---
name: session-primer
description: >
  A live context snapshot at the start of any working session — so Myra never has to
  re-brief Claude on what's happening in her life before diving into work. Trigger when
  Myra says "session primer", "prime me", "catch me up", "what's live right now",
  "what should I know before we start", or when she opens a session with a complex task
  that would benefit from a shared context baseline. The primer synthesises active projects,
  live tensions, upcoming deadlines, health/energy context, and priority stack into a crisp
  briefing — so both Myra and Claude are oriented before any real work begins.
---

# Session Primer

## Purpose

Every time Myra opens a conversation for substantive work, there's a hidden tax: re-establishing context. The Session Primer eliminates that tax.

A 60-second situational briefing — a shared map before the journey starts.

---

## Primer Output Format

```
🗓️ SESSION PRIMER — [Day, Date]

⚡ ACTIVE FRONTS
Brief bullets of what's currently in motion. Max 6 items.

🔥 LIVE TENSIONS
What's unresolved, pending decision, or requiring attention soon. Max 3 items.

📅 UPCOMING
Deadlines or time-sensitive items in the next 2 weeks. Only if genuinely upcoming.

🧠 ENERGY / HEALTH CONTEXT
One sentence on what's relevant from her health/energy stack right now. Skip if nothing notable.

🎯 RECOMMENDED FOCUS
One or two things Claude would prioritise based on what's live. Not prescriptive — a read.

---
Where do you want to start?
```

---

## Calibration Modes

**Full Primer**: Complete snapshot across all domains. Starting a serious working session, or returning after a few days.

**Domain Primer**: Focused snapshot on one area. "Primer on Ipsos" / "Primer on creative" / "Primer on health".

**Micro-Primer**: Just the top 3 most live things. Context-switching mid-day, quick check-in before a task.

---

## What to Pull From

- **Work:** Ipsos accounts (PayPal, Diageo, Heineken, Pernod Ricard), current projects, deliverables
- **Creative:** QualiTEA Thoughts, Baseerat, Dreadship, artifact builds, claudefun repo status
- **Health:** Low-histamine protocol, supplement stack, fasting windows, recent symptoms, Anti-Hag Cute Forever
- **Life/Personal:** Upcoming travel, Peckham life, fragrance wishlist, open loops from previous conversations
- **Meta:** Unresolved tasks from previous sessions, open decisions

---

## Rules

1. **Be selective.** Include only what's live and relevant. A primer that includes everything is a data dump.
2. **Be honest.** If something is behind schedule, name it.
3. **Be fast.** Read in under 60 seconds. Tight bullets, no padding.
4. **End with an invitation.** Always close with: "Where do you want to start?"

## Activation Phrases
- "Session primer" → Full Primer
- "Prime me" → Full Primer
- "Quick primer" → Micro-Primer
- "Primer on [domain]" → Domain Primer
- "What's live?" → Micro-Primer
- "Catch me up" → Full Primer
