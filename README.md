# ☯ Qian Kun 乾坤

**A soul-stirring psychological wellness app — 35 introspective questions in Chinese, English, and French.**

心理能量测试 | 中 · EN · FR

---

## Philosophy

No labels. No diagnoses. No pressure.

Qian Kun is a quiet space for you to check in with yourself — honestly, gently, without judgment. There are no right or wrong answers. Each question is an invitation to listen more carefully to what's already inside you.

After each answer, a warm encouragement appears — a small reminder that you're not alone. At the end, your unique psychological energy level is revealed, paired with a reflection crafted for that moment. Whatever you discover today is valid. Whatever you're feeling is real.

---

## Features

- **35 soul-touching questions** — randomized each session (5–35 adjustable)
- **3 languages** — Chinese, English, French, switch anytime
- **Energy feedback** — warm encouragement after every answer
- **4 result levels** — from "Bright as a Star" to "Waiting for Dawn"
- **Global sharing** — Twitter/X, WhatsApp, Facebook, Telegram, LinkedIn, native share
- **Native apps** — iOS & Android via Capacitor

---

## The Four Energy Levels

| Level | Chinese | English | French |
|-------|---------|---------|--------|
| ☀ | 明朗如星 | Bright as a Star | Lumineux comme une Étoile |
| 🌱 | 春风初度 | Early Spring | Premier Printemps |
| ☁ | 云中微光 | Light Through Clouds | Lumière à travers les Nuages |
| 🌅 | 静待破晓 | Waiting for Dawn | En Attendant l'Aube |

---

## Quick Start

```bash
npm install
npm run dev      # Development: http://localhost:5173
npm run build    # Production build
```

## Build Native Apps

### iOS (macOS + Xcode required)
```bash
npx cap sync ios
open ios/App/App.xcodeproj
# Build & Run in Xcode
```

### Android (Java + Android Studio required)
```bash
npx cap sync android
cd android && ./gradlew assembleDebug
# APK: android/app/build/outputs/apk/debug/app-debug.apk
```

---

## Project Structure

```
src/
├── main.ts          # App logic, routing, state management
├── questions-ml.ts   # Multilingual question bank (35 questions, zh/en/fr)
├── i18n.ts           # UI strings (Chinese, English, French)
└── style.css         # Dark gold theme, fully responsive

ios/                  # Capacitor iOS project
android/              # Capacitor Android project
```

---

## Tech Stack

- **Vite** + TypeScript (vanilla, no framework — ~62KB JS bundle)
- **Capacitor** (iOS + Android native wrapper)
- No dependencies beyond Capacitor core — lightweight and fast

---

## License

MIT — open to all.
