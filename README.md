# ☯ 乾坤 Qian Kun

> A psychological wellness app — 35 soul-touching questions in Chinese, English, and French. Take the test, discover your inner energy level, and share with the world.

**心理能量测试** | 中 · EN · FR

---

## Features

- **35 soul-touching questions** — randomly sampled each time (5–35 adjustable)
- **3 languages** — Chinese, English, French (auto-detect browser language)
- **Energy feedback** — each answer reveals a warm encouragement
- **4 result levels** — from "Bright as a Star" to "Waiting for Dawn"
- **Global sharing** — Twitter/X, WhatsApp, Facebook, Telegram, LinkedIn, native share
- **Native apps** — iOS & Android via Capacitor

---

## Run

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
├── main.ts          # App logic, routing, state
├── questions-ml.ts  # Multilingual question bank (35 questions)
├── i18n.ts          # UI strings (zh/en/fr)
└── style.css        # Dark gold theme, responsive

ios/                 # Capacitor iOS project
android/             # Capacitor Android project
```

---

## Tech Stack

- Vite + TypeScript
- Capacitor (iOS + Android)
- No framework — vanilla TypeScript for minimal bundle (~62KB JS)
