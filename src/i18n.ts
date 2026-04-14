export type Lang = "zh" | "en" | "fr";

const translations: Record<Lang, Record<string, string>> = {
  zh: {
    appName: "乾坤",
    appSubtitle: "心理能量测试",
    feature1: "探索自我",
    feature2: "触及灵魂",
    feature3: "心灵滋养",
    startDesc: "本次测试共 {n} 道心理题目，循序渐进，带你走进内心深处。每一道题没有对错，只有诚实面对自己。",
    startBtn: "开始探索",
    settings: "题库设置",
    settingsTitle: "题库数量",
    questionCount: "题目数量",
    topicCountNote: "题库共 35 道题，每次随机抽取\n题目无对错，请按直觉作答",
    back: "← 返回",
    progress: "能量聚集中",
    encouragementHint: "下一题正在到来...",
    resultLevel: "等级",
    resultTitle: "你的内心",
    resultSubtitle: "心理能量：",
    statEnergy: "心理能量",
    statAnswers: "完成题目",
    shareTitle: "分享",
    shareWechat: "微信 / 朋友圈",
    shareNative: "系统分享",
    shareCopy: "复制内容",
    restart: "再做一次",
    restartHint: "每次题目顺序随机，体验不同",
    footer: "☯ 乾坤 · 身心赋能",
    // 结果等级
    level_star: "明朗如星",
    level_spring: "春风初度",
    level_cloud: "云中微光",
    level_dawn: "静待破晓",
    // 结果标题
    res1_title: "你的内心，光芒万丈",
    res1_subtitle: "心理能量：充沛",
    res1_msg: "你内心有一种很珍贵的力量——不是那种张扬的、炫耀的力量，而是一种温柔的、稳定的、自洽的光芒。你不需要外界的认可来证明自己，因为你已经和自己和解了。\n\n继续保持这份状态，你的存在本身就在影响和治愈着身边的人。偶尔也允许自己脆弱一下，这不会让你失去光芒，反而会让你更有层次、更有温度。",
    res2_title: "你在发光，只是还没察觉",
    res2_subtitle: "心理能量：回升中",
    res2_msg: "你正处于一个很特别的阶段——旧的壳正在裂开，新的光正在渗入。也许你还没完全意识到自己的成长，但改变确实在发生了。\n\n这个阶段的你，最需要做的是：给自己时间，不要急。你已经走了很远，你值得一个温柔的拥抱，包括来自你自己的。",
    res3_title: "黑暗中，你仍在发光",
    res3_subtitle: "心理能量：需要滋养",
    res3_msg: "你现在的状态可能不太好，但你没有放弃，这就够了。你能走到今天，本身就是一种了不起的力量。\n\n请记住：你不需要时刻坚强，偶尔的疲惫和脆弱是人之常情。给自己一些时间和空间，去做一些让自己感到活着的事情，哪怕只是听一首歌、散一次步。你很重要，你的感受很重要。",
    res4_title: "夜最深的时候，黎明就不远了",
    res4_subtitle: "心理能量：低谷期",
    res4_msg: "如果你正处于人生中比较艰难的时期，我想告诉你：你不是一个人。每一个穿过黑夜的人，都曾经以为自己走不出去。\n\n但他们走出来了，你也可以。\n\n今天的你愿意来做这个测试，本身就说明你还在寻找光，寻找答案。这份渴望，就是你最强的力量。\n\n给自己一个拥抱吧，哪怕只是心里默默抱一下。你已经很努力了。",
    quote: "「你比自己想象的更强大。」",
  },
  en: {
    appName: "Qian Kun",
    appSubtitle: "Psychological Energy Test",
    feature1: "Explore Self",
    feature2: "Touch the Soul",
    feature3: "Nurture the Heart",
    startDesc: "This test has {n} psychological questions, guiding you inward step by step. There are no right or wrong answers—only honest reflection.",
    startBtn: "Begin Journey",
    settings: "Settings",
    settingsTitle: "Question Bank",
    questionCount: "Number of Questions",
    topicCountNote: "35 questions in total, randomly selected each time.\nNo right or wrong answers—follow your intuition.",
    back: "← Back",
    progress: "Gathering Energy",
    encouragementHint: "Next question arriving...",
    resultLevel: "Level",
    resultTitle: "Your Inner World",
    resultSubtitle: "Psychological Energy:",
    statEnergy: "Energy",
    statAnswers: "Questions",
    shareTitle: "Share",
    shareWechat: "Share",
    shareNative: "System Share",
    shareCopy: "Copy",
    restart: "Try Again",
    restartHint: "Questions are randomized each time for a fresh experience",
    footer: "☯ Qian Kun · Soul Nourishment",
    level_star: "Bright as a Star",
    level_spring: "Early Spring",
    level_cloud: "Light Through Clouds",
    level_dawn: "Waiting for Dawn",
    res1_title: "Your Inner Light Shines Bright",
    res1_subtitle: "Energy: Abundant",
    res1_msg: "You possess a rare and precious inner strength—not the loud, showy kind, but a gentle, steady, self-harmonizing glow. You don't need external validation because you've already made peace with yourself.\n\nKeep nurturing this state. Your very existence uplifts and heals those around you. Occasionally allowing yourself to be vulnerable won't diminish your light—it will make you more layered and more human.",
    res2_title: "You're Glowing, You Just Haven't Noticed",
    res2_subtitle: "Energy: Recovering",
    res2_msg: "You're in a remarkable phase—the old shell is cracking, new light is seeping in. Perhaps you haven't fully recognized your growth yet, but change is genuinely happening.\n\nWhat you need most right now is patience with yourself. You've come a long way. You deserve a gentle embrace, especially from yourself.",
    res3_title: "Even in Darkness, You Still Shine",
    res3_subtitle: "Energy: Needs Nourishment",
    res3_msg: "Your current state may be challenging, but you haven't given up—and that's everything. Making it this far is already a remarkable feat of strength.\n\nRemember: you don't need to be strong all the time. Occasional exhaustion and vulnerability are perfectly human. Give yourself space and time to do things that make you feel alive, even if it's just listening to a song or taking a walk. You matter. Your feelings matter.",
    res4_title: "The Deepest Night Precedes the Dawn",
    res4_subtitle: "Energy: Low Point",
    res4_msg: "If you're going through a difficult time, I want you to know: you are not alone. Every person who has walked through darkness once felt they couldn't make it through.\n\nBut they did. And so can you.\n\nThe fact that you're taking this test today means you're still seeking light, still seeking answers. That very desire is your greatest strength.\n\nGive yourself a hug—even if only in your heart. You've been working so hard.",
    quote: "「You are stronger than you think.」",
  },
  fr: {
    appName: "Qian Kun",
    appSubtitle: "Test d'Énergie Psychologique",
    feature1: "Explorer le Soi",
    feature2: "Toucher l'Âme",
    feature3: "Nourrir le Cœur",
    startDesc: "Ce test comprend {n} questions psychologiques, vous guidant vers votre intériorité pas à pas. Il n'y a ni bonnes ni mauvaises réponses—seulement l'honnêteté envers vous-même.",
    startBtn: "Commencer",
    settings: "Paramètres",
    settingsTitle: "Banque de Questions",
    questionCount: "Nombre de Questions",
    topicCountNote: "35 questions au total, tirées au sort à chaque fois.\nPas de bonnes ni de mauvaises réponses—fiez-vous à votre intuition.",
    back: "← Retour",
    progress: "Accumuler l'Énergie",
    encouragementHint: "Question suivante en approche...",
    resultLevel: "Niveau",
    resultTitle: "Votre Monde Intérieur",
    resultSubtitle: "Énergie Psychologique:",
    statEnergy: "Énergie",
    statAnswers: "Questions",
    shareTitle: "Partager",
    shareWechat: "Partager",
    shareNative: "Partage Système",
    shareCopy: "Copier",
    restart: "Réessayer",
    restartHint: "Questions aléatoires à chaque fois pour une expérience fraîche",
    footer: "☯ Qian Kun · Nourriture de l'Âme",
    level_star: "Lumineux comme une Étoile",
    level_spring: "Premier Printemps",
    level_cloud: "Lumière à travers les Nuages",
    level_dawn: "En Attendant l'Aube",
    res1_title: "Votre Lumière Intérieure Brille Fort",
    res1_subtitle: "Énergie: Abondante",
    res1_msg: "Vous possédez une force intérieure rare et précieuse—pas du genre bruyant ou tapageur, mais une lueur douce, stable et en harmonie avec vous-même. Vous n'avez pas besoin de validation externe parce que vous vous êtes réconcilié avec vous-même.\n\nContinuez à cultiver cet état. Votre existence même inspire et guérit ceux qui vous entourent. Vous permettre parfois d'être vulnérable ne diminuera pas votre lumière—elle vous rendra plus profond et plus humain.",
    res2_title: "Vous Brillez, Vous ne l'avez Pas Encore Remarqué",
    res2_subtitle: "Énergie: en Reprise",
    res2_msg: "Vous traversez une phase remarquable—l'ancienne coquille se fissure, une nouvelle lumière s'infiltre. Vous n'avez peut-être pas encore pleinement pris conscience de votre croissance, mais le changement est bien réel.\n\nCe dont vous avez le plus besoin en ce moment, c'est de la patience envers vous-même. Vous avez parcouru un long chemin. Vous méritez une étreinte douce, surtout de votre propre part.",
    res3_title: "Même dans l'Obscurité, Vous Continuez de Briller",
    res3_subtitle: "Énergie: à Nourrir",
    res3_msg: "Votre état actuel peut être difficile, mais vous n'avez pas abandonné—et c'est l'essentiel. Arriver jusqu'ici est déjà une force remarquable.\n\nSouvenez-vous : vous n'avez pas besoin d'être fort en permanence. La fatigue et la vulnérabilité occasionnelles sont parfaitement humaines. Accordez-vous du temps et de l'espace pour faire des choses qui vous font sentir vivant, même si ce n'est qu'écouter une chanson ou vous promener. Vous comptez. Vos sentiments comptent.",
    res4_title: "La Nuit la Plus Profonde Précède l'Aube",
    res4_subtitle: "Énergie: Point Bas",
    res4_msg: "Si vous traversez une période difficile, je veux que vous sachiez : vous n'êtes pas seul. Chaque personne qui a traversé l'obscurité a un jour pensé ne pas pouvoir s'en sortir.\n\nMais ils s'en sont sortis. Et vous le pouvez aussi.\n\nLe fait que vous fassiez ce test aujourd'hui signifie que vous cherchez encore la lumière, encore des réponses. Ce désir même est votre plus grande force.\n\nFaites-vous un câlin—même si ce n'est que dans votre cœur. Vous avez tellement努力.",
    quote: "「Vous êtes plus fort que vous ne le pensez.」",
  },
};

let currentLang: Lang = "zh";

export function setLang(lang: Lang): void {
  currentLang = lang;
  localStorage.setItem("qiankun-lang", lang);
}

export function getLang(): Lang {
  return currentLang;
}

export function t(key: string, vars?: Record<string, string | number>): string {
  let text = translations[currentLang][key] || translations["zh"][key] || key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, String(v));
    }
  }
  return text;
}

export function initLang(): void {
  const saved = localStorage.getItem("qiankun-lang") as Lang | null;
  if (saved && translations[saved]) {
    currentLang = saved;
  } else {
    // Detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "fr") currentLang = "fr";
    else if (browserLang === "en") currentLang = "en";
    else currentLang = "zh";
  }
}

export const langLabels: Record<Lang, string> = {
  zh: "中文",
  en: "EN",
  fr: "FR",
};
