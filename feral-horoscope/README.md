# 🔮 Feral Horoscope

A witchy, AI-powered horoscope generator that tells you what you actually need to hear. No celestial energies. No transformation arcs. Just a brutally specific reading based on your sign, your mood, and one thing that happened to you today.

Built with vanilla HTML/JS and the Anthropic Claude API.

**[→ Live demo](https://miznizzz.github.io/claudefun/feral-horoscope/)**

---

## What it does

You enter three things: your star sign, your current mood, and one specific thing that happened today. The oracle returns a personalised horoscope in a voice that is present tense, directive, occasionally profane, and allergic to vague astrology-speak.

It will not tell you to embrace your journey. It will tell you what to do.

---

## Setup

This is a single `index.html` file with no dependencies and no build step.

**To run locally:** just open `index.html` in a browser.

**To use the oracle:** you'll need a free Anthropic API key.
1. Get one at [console.anthropic.com](https://console.anthropic.com)
2. Paste it into the key entry screen on first load
3. It's stored in your browser's localStorage — never sent anywhere except Anthropic's API

---

## Deployment

Works out of the box with GitHub Pages. Upload `index.html` to your repo, enable Pages under Settings → Pages → Deploy from branch, and it's live.

---

## Stack

- Vanilla HTML, CSS, JavaScript
- [Anthropic Claude API](https://docs.anthropic.com) (`claude-sonnet-4-20250514`)
- No frameworks. No dependencies. One file.

---

## Notes

- API calls are made directly from the browser using `anthropic-dangerous-allow-browser: true` — fine for personal/demo use, not recommended for production at scale
- Each reading costs a fraction of a cent from your Anthropic API credits
- The key is stored in localStorage and never leaves your device

---

*Part of [claudefun](https://github.com/miznizzz/claudefun) — a collection of experimental web projects.*
