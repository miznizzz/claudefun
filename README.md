# Health OS ✨
### A personal health & fitness dashboard built with Dr. Candid

A beautiful, mobile-first weekly health dashboard tracking meals, workouts, supplements, lab results, and daily affirmations — built for one person, personalised to the last detail.

---

## What it is

Health OS is a single-file web app that acts as a unified command centre for health and fitness management. It was built in collaboration with [Dr. Candid](https://claude.ai) — an AI health companion — and is updated weekly to reflect the current training cycle, meal plan, and supplement schedule.

It is not a generic fitness app. Every piece of data in it — the lab markers, the workout logic, the supplement timing, the meal rules — is specific to one person's health profile, built up over months of tracking, blood tests, and pattern recognition.

---

## Features

**📅 Weekly Plan**
- Day-by-day view across the full week
- Meals tab: breakfast, lunch, dinner, snacks with prep notes
- Workout tab: session type, duration, Notion view references, weighted vs bodyweight flags
- Supplements tab: full daily schedule with timing guidance
- Iron day, oven night, and meal plan badges per day
- Bedtime targets and alerts baked into each day

**🩺 Health Dashboard**
- Biometric stats pulled from Apple Health (steps, sleep, HRV, VO₂ Max, resting HR)
- Lab markers from most recent blood panel with status indicators
- Expandable notes on each marker
- Highest priority action callout (persistent allergy referral reminder)
- Next retest date

**📋 Non-Negotiables**
- 14 health rules that don't change week to week
- The actual principles behind the plan — useful for reference when decision-making on the fly

**🌅 Daily Affirmations**
- Morning and evening modes
- Rotates daily
- Written to be grounding, not toxic-positive

---

## How it works

The dashboard is a **single HTML file** — no backend, no build step, no dependencies to install. It loads React and fonts from CDN and runs entirely in the browser.

Weekly plan data is stored in `localStorage`, meaning it persists between sessions on the same device without any server.

**To update the weekly plan:**
1. Dr. Candid generates updated plan data each Sunday during the weekly check-in
2. A new `index.html` is downloaded
3. Re-upload to GitHub — GitHub Pages serves the new version within minutes

---

## Tech stack

- React 18 (via CDN)
- Babel Standalone (JSX in browser)
- Google Fonts — Playfair Display + DM Sans
- localStorage for plan persistence
- Zero npm, zero build tools, zero dependencies

---

## Health context (why it's built this way)

This dashboard was built around a specific set of health constraints and goals:

- Dairy allergy and histamine sensitivity — meal logic reflects this
- Active supplementation protocol (B12, Vitamin D, iron, quercetin, collagen, magnesium)
- 3-week rotating PT trainer cycle (lower body → upper body → full body)
- 5–6 training days per week with structured rest before PT Fridays
- Weight loss target alongside performance maintenance
- Lab markers being actively managed (Vitamin D, B12, ferritin, eosinophilia)
- Sleep optimisation as the primary lever for everything else

The workout logic specifically accounts for muscle group sequencing across the week so nothing is pre-fatigued before the Friday trainer session.

---

## Updating the plan

Each Sunday, the weekly check-in with Dr. Candid follows this structure:

1. Report on the week — what was completed, energy levels, anything to flag
2. Dr. Candid updates the plan data and generates a new `index.html`
3. Upload to GitHub → live within minutes

The health markers and rules sections update less frequently — only when new blood results come in or protocols change.

---

## Disclaimer

This dashboard is a personal health tracking tool built in collaboration with an AI. It is not medical advice. Always consult a qualified healthcare professional for medical decisions.

---

*Built with 💛 by Dr. Candid × Myra — April 2026*
