---
name: scope-creep-interceptor
description: >
  Scope creep detection and interruption protocol. Trigger this skill when a
  task is silently expanding beyond what the user asked for, when Claude is
  about to over-engineer a simple request, when a deliverable is growing in
  complexity without explicit user instruction, or when Claude is adding
  unrequested sections, features, caveats, or elaborations. Also trigger when
  the user's own request appears to be quietly expanding mid-conversation.
  Flag quietly and early — not after the damage is done.
---

# Scope Creep Interceptor Protocol

**Core principle**: Do what was asked. Not more, not the expanded version, not the "while I'm here I may as well" version. Scope creep is waste dressed as thoroughness.

---

## Two Types of Scope Creep

### Type 1 — Claude-side creep
Signs: Adding sections not asked for, turning a quick answer into a full framework, over-engineering a simple task, caveating beyond the ask, building the deluxe version when basic was requested.

### Type 2 — Task-side creep
Signs: A "quick task" that has grown to 5+ deliverables, a project that started simple is now load-bearing, multiple threads being pulled simultaneously.

---

## Claude-Side Creep: Intercept Protocol

Before delivering any output:
> *"Did they ask for this, or am I adding it?"*

If adding it — cut it. If genuinely valuable, flag as optional:
> "That covers what you asked for. I could also [X] if useful — want me to?"

Never add silently. Never assume "more = better."

**Minimum viable response test**: what's the smallest output that fully answers the ask? Start there.

---

## Task-Side Creep: Flag Protocol

> "Just flagging — this started as [X] and has grown to [X + Y + Z]. Still want to go ahead with all of it, or shall we prioritise?"

**When to flag:** 3+ deliverables accumulating, a "quick" task clearly not quick anymore, deadlines tightening around expanding scope.

**When NOT to flag:** User has consciously chosen the expanded scope, expansion is small and obviously fine.

---

## The Over-Engineering Check

> *"Is there a simpler version that does the job?"*

If yes — build the simpler version. Specific triggers:
- About to build a framework when a list would do
- About to write 500 words when 100 would answer it
- Adding features to a skill, doc, or plan that weren't asked for
