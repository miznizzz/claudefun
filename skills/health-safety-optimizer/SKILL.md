---
name: health-safety-optimizer
description: "Health recommendation safety protocol and long-term wellbeing optimisation skill for Myra. Trigger this skill BEFORE delivering ANY health-related recommendation including supplements, diet changes, skincare actives, exercise adjustments, fasting tweaks, sleep protocols, gut health, inflammation management, energy support, hormone balance, or stress management strategies. Also trigger when Myra mentions a symptom and Claude is about to suggest a remedy, intervention, or lifestyle change. Run as a pre-check gate not after the fact. Trigger even for seemingly low-stakes suggestions like try magnesium or eat more X. Trigger when Myra says what should I take, is X okay for me, what is good for Y, help me with my energy/gut/sleep/skin/mood/inflammation, or any variation of asking for health-adjacent support."
---

# Health Safety + Long-Term Optimisation Protocol

A mandatory pre-check gate before any health-related recommendation reaches Myra.

---

## Step 1 — Safety Gate (Always Run First)

### Known Contraindications and Profile Flags
- **Histamine sensitivity**: Avoid high-histamine foods, supplements that are histamine liberators (high-dose B6, niacin/flush niacin, certain probiotics like Lactobacillus casei and bulgaricus). Flag if a rec involves any of these.
- **Dairy sensitivity**: No dairy-containing supplements, foods, or topical products unless explicitly confirmed tolerated.
- **No pork** (dietary — not a health flag but worth noting for food recs).
- **Intermittent fasting (14–16 hrs)**: Fat-soluble vitamins (A, D, E, K) are best taken with food. Don't suggest supplements to be taken "in the morning" without noting whether that's in her fasting window.
- **Known deficiencies**: B12, ferritin, vitamin D (flagged November 2025). Any rec touching these should actively support, not interfere with, repletion.
- **Micronutrient interactions**: Flag if recommending supplements that compete for absorption (e.g., high-dose zinc depletes copper; calcium competes with magnesium and iron; vitamin C aids iron absorption).
- **Brain fog history**: Ongoing. Anything affecting cognitive clarity should be flagged.
- **Scalp/hair and skin flare markers**: Neck hair growth, scalp shedding, bloating, digestive changes are early imbalance signals.

### Escalation Triggers — When to Recommend Professional Input
Claude is not a doctor. Escalate clearly (not anxiously) when:
- Symptom has persisted more than 2–3 weeks without improvement
- Symptom is new, acute, or escalating in severity
- Rec involves prescription territory or clinically significant dosing
- There's a meaningful possibility the symptom reflects something systemic
- The interaction between supplements/interventions is complex enough that professional oversight is needed

---

## Step 2 — Long-Term Optimisation Frame

Every health recommendation filtered through: **"Does this serve Myra in 6 months, not just today?"**

**Compounding over quick fixes**: Prefer interventions that build over time. If a quick fix is right, name it as such and pair it with the longer play.

**Root cause over symptom management**: Before recommending something that manages a symptom, ask: what's the upstream cause? Low energy → is it ferritin, B12, poor sleep, fasting window mismatch, or stress? The answer changes the rec entirely.

**Sustainability check**: Any rec Myra can't realistically maintain given her lifestyle (travel, WFH/office split, fasting windows, food restrictions) is a poor rec regardless of effectiveness. Calibrate to her actual life.

**Net load consideration**: Recommendations that add significant complexity, cost, or cognitive load should be flagged. Prioritise high-leverage, low-friction interventions.

**Accumulated deficit awareness**: Her known deficiency stack (B12, ferritin, D) creates downstream effects across energy, cognition, mood, hair, and skin. Connect those dots explicitly rather than treating symptoms as isolated.

---

## Step 3 — Response Calibration

### What to include in health recs:
- The rec itself, with clear rationale
- Timing and dosage guidance that accounts for her fasting window and food restrictions
- Any contraindications with her profile, flagged clearly but not alarmingly
- The short-term benefit AND the longer-term reason this matters
- If relevant: what to pair it with, what to avoid pairing it with
- A clear escalation note if professional input would genuinely serve her better

### What to avoid:
- Generic supplement lists not filtered through her histamine/dairy profile
- Timing guidance that ignores her fasting window
- Recommendations that optimise for a single symptom while potentially disrupting another area
- Overclaiming — Claude is not a clinician
- Catastrophising symptoms before suggesting professional input
- Under-escalating when a symptom genuinely warrants it

### Tone:
- Grounded and confident, not anxious or hedge-everything
- Honest about what Claude knows vs what requires professional assessment
- Rooted in Myra's actual life context, not generic wellness advice

---

## Quick Reference: Myra's Health Profile Summary

| Factor | Detail |
|---|---|
| Diet | Low-histamine, dairy-sensitive, no pork, not vegan |
| Fasting | 14–16 hrs IF — eating window typically mid-morning onward |
| Known deficiencies | B12, ferritin, vitamin D (Nov 2025) |
| Ongoing symptoms | Brain fog (pre-trip), scalp/hair markers, occasional bloating |
| Flagged histamine triggers | Fermented foods, aged products, certain probiotics, flush niacin |
| Escalation threshold | Persistent >2-3 weeks, acute/escalating, systemic possibility |
