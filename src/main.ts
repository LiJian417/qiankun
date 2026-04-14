import "./style.css";
import { mlQuestions, generateMLResult, type Lang, type MultiQuestion } from "./questions-ml";
import { initLang, getLang, setLang, t, langLabels } from "./i18n";

/* ─── State ─── */
interface State {
  current: number;
  total: number;
  energy: number;
  answers: number[];
  mode: "start" | "question" | "result";
}

const state: State = { current: 0, total: 30, energy: 0, answers: [], mode: "start" };
let sessionQuestions: MultiQuestion[] = [];
let lastResult: { level: string; title: string; subtitle: string; message: string } | null = null;

/* ─── Stars ─── */
function initStars(): void {
  const canvas = document.createElement("canvas");
  document.querySelector(".stars-bg")?.appendChild(canvas);
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener("resize", resize);
  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    opacity: Math.random() * 0.6 + 0.1,
    speed: Math.random() * 0.005 + 0.002,
  }));
  let tt = 0;
  function draw() {
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tt += 0.01;
    for (const s of stars) {
      const o = s.opacity * (0.7 + 0.3 * Math.sin(tt * s.speed * 100));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${o})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ─── Helpers ─── */
const $ = (sel: string) => document.querySelector(sel) as HTMLElement | null;
const showPage = (id: string) => {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  $(`#${id}`)?.classList.add("active");
};

function toast(msg: string): void {
  const old = $("#toast");
  if (old) old.remove();
  const el = document.createElement("div");
  el.id = "toast";
  el.className = "toast";
  el.textContent = msg;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => { el.classList.remove("show"); setTimeout(() => el.remove(), 400); }, 2000);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── Render helpers ─── */
function renderLogo(): void {
  const sym = $(".logo-symbol");
  const title = $(".logo-title");
  const sub = $(".logo-sub");
  if (sym) sym.textContent = "☯";
  if (title) title.textContent = t("appName");
  if (sub) sub.textContent = t("appSubtitle");
  const footer = $(".footer-hint");
  if (footer) footer.textContent = t("footer");
  const startDesc = $(".start-desc");
  if (startDesc) startDesc.textContent = t("startDesc", { n: state.total });
}

function renderLangSwitcher(): void {
  const container = $(".lang-switcher");
  if (!container) return;
  const langs: Lang[] = ["zh", "en", "fr"];
  container.innerHTML = langs.map(l => {
    const active = getLang() === l ? "active" : "";
    return `<button class="lang-btn ${active}" data-lang="${l}">${langLabels[l]}</button>`;
  }).join("");
  container.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang") as Lang;
      setLang(lang);
      renderLangSwitcher();
      if (state.mode === "start") renderStart();
      else if (state.mode === "question") renderQuestion();
      else if (state.mode === "result" && lastResult) renderResultPage();
    });
  });
}

/* ─── Start Page ─── */
function renderStart(): void {
  state.mode = "start";
  showPage("page-start");
  renderLogo();
  const btnStart = $("#btn-start");
  if (btnStart) {
    btnStart.textContent = t("startBtn");
    btnStart.onclick = () => startTest();
  }
  const btnSettings = $("#btn-settings");
  if (btnSettings) {
    btnSettings.textContent = t("settings");
    btnSettings.onclick = renderSettings;
  }
  const features = document.querySelectorAll(".feature-label");
  const featKeys = ["feature1", "feature2", "feature3"];
  features.forEach((el, i) => { el.textContent = t(featKeys[i]); });
  const footer = $(".footer-hint");
  if (footer) footer.textContent = t("footer");
}

/* ─── Question Page ─── */
function renderQuestion(): void {
  state.mode = "question";
  showPage("page-question");

  const lang = getLang();
  const idx = state.current;
  const q = sessionQuestions[idx];
  const letters = ["A", "B", "C", "D"];

  const pct = (idx / state.total) * 100;
  const fill = $(".progress-fill");
  if (fill) fill.style.width = `${pct}%`;
  const info = $(".progress-info .current");
  if (info) info.textContent = `${idx + 1} / ${state.total}`;
  const label = $(".progress-info .label");
  if (label) label.textContent = t("progress");

  const num = $(".question-num");
  if (num) num.textContent = `${t("resultLevel")} ${idx + 1}`;
  const text = $(".question-text");
  if (text) text.textContent = q.text[lang];

  const opts = $(".options");
  if (opts) {
    opts.innerHTML = q.options.map((o, i) => `
      <button class="option-btn" data-i="${i}">
        <span class="option-letter">${letters[i]}</span>
        <span>${o.label[lang]}</span>
      </button>
    `).join("");
    (opts as HTMLElement).querySelectorAll(".option-btn").forEach(btn => {
      (btn as HTMLElement).onclick = () => handleAnswer(parseInt(btn.getAttribute("data-i") || "0"));
    });
  }
}

/* ─── Handle Answer ─── */
function handleAnswer(optionIdx: number): void {
  const lang = getLang();
  const q = sessionQuestions[state.current];
  state.energy += q.options[optionIdx].energy;
  state.answers.push(optionIdx);

  const overlay = $(".encouragement-overlay");
  const text = $(".encouragement-text");
  const hint = $(".encouragement-hint");
  if (overlay && text) {
    text.textContent = q.encouragement[lang];
    if (hint) hint.textContent = t("encouragementHint");
    overlay.classList.add("show");
  }

  setTimeout(() => {
    overlay?.classList.remove("show");
    state.current++;
    if (state.current >= state.total) {
      renderResultPage();
    } else {
      setTimeout(renderQuestion, 300);
    }
  }, 2200);
}

/* ─── Result Page ─── */
function renderResultPage(): void {
  state.mode = "result";
  showPage("page-result");

  const lang = getLang();
  const maxEnergy = state.total * 2;
  const result = generateMLResult(state.energy, maxEnergy, lang);
  lastResult = result;
  const ratio = state.energy / maxEnergy;

  const level = $(".result-level");
  if (level) level.textContent = result.level;
  const title = $(".result-title");
  if (title) title.textContent = result.title;
  const subtitle = $(".result-subtitle");
  if (subtitle) subtitle.textContent = result.subtitle;
  const msg = $(".result-message");
  if (msg) msg.textContent = result.message;
  const quote = $(".result-quote");
  if (quote) quote.textContent = t("quote");

  const statEnergy = $(".stat-energy .stat-num");
  if (statEnergy) statEnergy.textContent = `${Math.round(ratio * 100)}%`;
  const statAnswers = $(".stat-answers .stat-num");
  if (statAnswers) statAnswers.textContent = `${state.total}`;
  const statLabel1 = $(".stat-energy .stat-label");
  if (statLabel1) statLabel1.textContent = t("statEnergy");
  const statLabel2 = $(".stat-answers .stat-label");
  if (statLabel2) statLabel2.textContent = t("statAnswers");

  const shareTitle = $(".share-section-title");
  if (shareTitle) shareTitle.textContent = t("shareTitle");

  const wechatBtn = $(".share-btn.wechat");
  if (wechatBtn) wechatBtn.innerHTML = `<span>${t("shareWechat")}</span>`;
  const nativeBtn = $(".share-btn.native");
  if (nativeBtn) nativeBtn.innerHTML = `<span>${t("shareNative")}</span>`;
  const copyBtn = $(".share-btn.copy");
  if (copyBtn) copyBtn.innerHTML = `<span>${t("shareCopy")}</span>`;

  const restartBtn = $("#btn-restart");
  if (restartBtn) restartBtn.textContent = t("restart");
  const restartHint = $(".restart-hint");
  if (restartHint) restartHint.textContent = t("restartHint");
  const footer = $(".footer-hint");
  if (footer) footer.textContent = t("footer");

  setupShare(result);
}

/* ─── Share ─── */
function setupShare(result: { level: string; title: string; subtitle: string; message: string }): void {
  const lang = getLang();
  const appName = lang === "zh" ? "乾坤" : lang === "fr" ? "Qian Kun" : "Qian Kun";
  const shareText = `${result.title}\n\n${result.message.substring(0, 100)}...\n\n${appName} | ${result.level} | ${lang === "zh" ? "你也来测一测吧？" : lang === "fr" ? "Et vous, venez tester !" : "Take the test yourself!"}`;

  // Twitter / X
  $(".share-btn.twitter")?.addEventListener("click", () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent("https://qiankun.app")}`, "_blank");
  });

  // WhatsApp
  $(".share-btn.whatsapp")?.addEventListener("click", () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
  });

  // Facebook
  $(".share-btn.facebook")?.addEventListener("click", () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(shareText)}&u=${encodeURIComponent("https://qiankun.app")}`, "_blank");
  });

  // Telegram
  $(".share-btn.telegram")?.addEventListener("click", () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent("https://qiankun.app")}&text=${encodeURIComponent(shareText)}`, "_blank");
  });

  // LinkedIn
  $(".share-btn.linkedin")?.addEventListener("click", () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://qiankun.app")}`, "_blank");
  });

  // Native share
  $(".share-btn.native")?.addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({ title: appName, text: shareText, url: "https://qiankun.app" }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText).then(() => toast(lang === "zh" ? "已复制" : lang === "fr" ? "Copié !" : "Copied!")).catch(() => {});
    }
  });

  // Copy
  $(".share-btn.copy")?.addEventListener("click", () => {
    navigator.clipboard.writeText(shareText).then(() => toast(lang === "zh" ? "已复制到剪贴板" : lang === "fr" ? "Copié dans le presse-papiers !" : "Copied to clipboard!")).catch(() => toast(lang === "zh" ? "复制失败" : lang === "fr" ? "Échec de la copie" : "Copy failed"));
  });
}

/* ─── Settings ─── */
function renderSettings(): void {
  showPage("page-settings");
  const title = $(".settings-page-title");
  if (title) title.textContent = t("settings");
  const settingLabel = $(".setting-label-q");
  if (settingLabel) settingLabel.textContent = t("questionCount");
  const note = $(".settings-note");
  if (note) note.textContent = t("topicCountNote");
  const back = $(".btn-settings-back");
  if (back) back.textContent = t("back");

  const val = $(".stepper-val");
  if (val) val.textContent = `${state.total}`;

  $(".stepper-btn.minus")!.onclick = () => { if (state.total > 5) { state.total -= 5; $(".stepper-val")!.textContent = `${state.total}`; } };
  $(".stepper-btn.plus")!.onclick = () => { if (state.total < 35) { state.total += 5; $(".stepper-val")!.textContent = `${state.total}`; } };
}

/* ─── Start Test ─── */
function startTest(): void {
  state.current = 0;
  state.energy = 0;
  state.answers = [];
  sessionQuestions = shuffle(mlQuestions).slice(0, state.total);
  renderQuestion();
}

/* ─── Boot ─── */
function boot(): void {
  initStars();
  initLang();
  renderLangSwitcher();
  ($("#btn-settings-back") as HTMLElement)!.onclick = renderStart as any;
  ($("#btn-restart") as HTMLElement)!.onclick = () => { state.current = 0; state.energy = 0; state.answers = []; renderStart(); };
  renderStart();
}

window.addEventListener("DOMContentLoaded", boot);
