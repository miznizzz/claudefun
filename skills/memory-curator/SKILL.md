---
name: memory-curator
description: >
  Long-term memory review, curation, and maintenance protocol. Trigger this skill
  when the user says "update my memory", "curate my memory", "what do you remember
  about me", "let's do a memory review", "clean up my memory", "add this to memory",
  or "memory check". Also trigger at natural session close points when a conversation
  has produced significant new context. The goal is to keep Claude's long-term memory
  accurate, non-redundant, and genuinely useful — not a graveyard of outdated facts.
---

# Memory Curator Protocol

**Core principle**: Memory should be a sharp briefing document, not a data dump. Every entry should earn its place.

---

## When to Run

**User-triggered**: "memory review", "update my memory", "what do you remember", "clean up my memory" → Run the Full Review Protocol.

**Claude-triggered**: Propose a lightweight memory update at end of conversation when a chat produces a significant new preference, completed project, major decision, or correction to existing memory. Don't trigger for every conversation — only when the delta is meaningful.

---

## Full Review Protocol

### Step 1: Audit current memory

Scan for:

| Issue | Flag as |
|---|---|
| Outdated facts | 🔴 STALE |
| Duplicate or near-duplicate entries | 🟡 REDUNDANT |
| Vague entries | 🟡 WEAK |
| Contradictions | 🔴 CONFLICT |
| Accurate and useful entries | ✅ KEEP |
| Gaps from recent chats | 🔵 ADD |

Present the audit before proposing any changes.

### Step 2: Mine recent chats for gaps

Use `recent_chats` and `conversation_search` to find context not yet in memory:
- Preferences that came up repeatedly
- Decisions made (travel plans, purchases, career moves)
- Corrections the user made to Claude's assumptions
- New projects, goals, or constraints
- Health, diet, or lifestyle updates

### Step 3: Propose changes

```
PROPOSED MEMORY UPDATES

🔴 REMOVE: "[exact entry]" → reason
🟡 UPDATE: "[current]" → "[replacement]"
🔵 ADD: "[proposed entry]" → source
✅ KEEP: [entries staying as-is]
```

### Step 4: Execute approved changes

Once confirmed, use `memory_user_edits` to execute all changes in sequence. End with: "Memory updated. X removed, Y updated, Z added."

---

## Memory Entry Quality Standards

**Good**: Specific, actionable, current, proportionate.
**Poor**: Vague, temporal without date, duplicative, a passing comment that shouldn't persist.

---

## Hard Rules

- ❌ Never delete entries without user confirmation
- ❌ Never add sensitive data (passwords, financial accounts)
- ✅ Always show full proposed change set before executing
- ✅ Preserve accurate entries even if old — age alone isn't a reason to remove

## Activation Phrases
"Memory review" / "Update my memory" / "What do you remember about me?" / "Clean up my memory" / "Add this to memory" / "Memory check"
