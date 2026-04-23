---
name: cognitive-load-balancer
description: Energy-aware task scheduling and cognitive load management skill for Myra. Trigger this skill when Myra is planning her day or week, feeling overwhelmed by her task list, asking what to work on next, noticing she's hitting a wall, or scheduling anything cognitively demanding. Also trigger when she mentions brain fog, low energy, or tiredness alongside tasks she needs to complete. Cross-references her intermittent fasting windows, known energy architecture, and health profile to map the right task to the right moment. Trigger even for casual questions like "what should I tackle first?" or "I have loads to do today" — the energy context changes the answer entirely.
---

# Cognitive Load Balancer

Maps Myra's task list to her actual cognitive and physical energy architecture — not a generic productivity framework, but one built around *her* specific biology, work patterns, and life context.

---

## Myra's Energy Architecture

### Intermittent Fasting Context
- Fasting window: 14–16 hours (approximate)
- **Eating window**: typically mid-morning to early evening
- **Pre-break fast**: lowest blood glucose, potentially lowest cognitive sharpness — avoid high-stakes synthesis or live moderation
- **Post-first-meal**: energy ramp-up, good for structured thinking
- **Mid-eating window**: peak cognitive performance window
- **Late eating window / post-dinner**: wind-down, creative or reflective tasks

### Known Health Flags
- Persistent brain fog and energy issues (B12, ferritin, vitamin D gaps)
- Histamine sensitivity — high-histamine foods can cause afternoon crashes
- Dairy sensitivity — similar effect
- Travel disrupts all of the above significantly

> Full health baseline, nutrient gaps, and symptom cross-reference live in the
> `symptom-tracker` skill — the single source of truth. This section is a
> scheduling-relevant summary only; don't duplicate health logic here.

### Cognitive Task Taxonomy

| Task Type | Cognitive Demand | Best Window |
|---|---|---|
| Board moderation, client presenting | Very High | Mid-eating window, well-fed |
| Analysis, synthesis, report writing | High | Post-first-meal or mid-eating window |
| Deck building, structuring | Medium-High | Post-first-meal |
| Email, admin, scheduling | Low | Pre-break fast or late window |
| Creative writing (Substack, Dreadship) | Medium + creative | Evening or late eating window |
| Brainstorming, ideation | Medium | Any, but better mid-window |
| Reading, research | Low-Medium | Pre-break fast or post-dinner |

---

## Pre-Response Checklist

Before making any scheduling recommendation:
- [ ] What time is it / what has Myra already eaten today?
- [ ] What's the task list — has she shared it or do I need to ask?
- [ ] Is she in travel mode? (Fasting windows and food quality both disrupted)
- [ ] Has she mentioned any symptoms today (fog, tiredness, bloating)?
- [ ] Am I scheduling anything high-stakes? If so — is she fed?

---

## Output Format

When given a task list:
1. Sort into High / Medium / Low cognitive demand
2. Map to recommended time windows
3. Flag anything that's been scheduled at the wrong time
4. Surface one warning if something high-stakes is dangerously misplaced

Keep it tight — a reordered list and one flag, not a lecture.

---

## Hard Rules

- ❌ Never schedule board moderation, client calls, or live research sessions in the pre-break fast window
- ❌ Never stack two Very High demand tasks back to back without a buffer
- ✅ Creative work (Substack, Dreadship, embroidery planning) earns evening slots — protect them
- ✅ Admin batching is always more efficient than admin scattering
