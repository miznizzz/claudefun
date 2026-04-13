# claude-skills

A collection of behaviour-shaping skills for Claude. Each skill is a structured `.md` file that tells Claude *how* to behave in specific situations — not just what to know, but how to act, when to trigger, and what to avoid.

These skills were built and refined through real use, not theory. They're designed to make Claude more useful, more honest, and significantly less annoying.

---

## What is a skill?

A skill is a markdown file you install into a Claude Project. It sits in the project's context and shapes Claude's behaviour for that project. Think of it as a standing instruction set — but more structured, more specific, and more powerful than a system prompt paragraph.

Each skill has:
- A **frontmatter description** that tells Claude when to trigger it
- A **core principle** that captures the intent in one sentence
- **Protocols** with specific steps, checks, and rules
- **Hard rules** for what never to do

Skills work best when installed together — they're designed to complement each other.

---

## Skills in this repo

### Response Quality
| Skill | What it does |
|---|---|
| [`response-optimisation`](./response-optimisation/SKILL.md) | Keeps responses the right length, right format, and right shape. Cuts padding, prevents confirmation loops. |
| [`response-evaluation`](./response-evaluation/SKILL.md) | Pre-send QA pass. Checks that the answer is accurate, scoped correctly, and actually answers what was asked. |
| [`reasoning-transparency`](./reasoning-transparency/SKILL.md) | Surfaces logic on complex problems. Prevents black-box responses where Claude lands on a conclusion without showing how. |

### Behaviour & Self-Correction
| Skill | What it does |
|---|---|
| [`self-improvement`](./self-improvement/SKILL.md) | Structured mistake-learning. Diagnose → Correct → Log → Learn. Escalates recurring patterns to memory edits. |
| [`scope-creep-interceptor`](./scope-creep-interceptor/SKILL.md) | Detects when tasks are silently expanding and flags it early. Works for Claude-side over-engineering and user-side overcommitment. |
| [`proactive-research`](./proactive-research/SKILL.md) | Checks memory, past chats, and web before asking a clarifying question. Research first, ask only when genuinely necessary. |

### Interaction Style
| Skill | What it does |
|---|---|
| [`emotional-support`](./emotional-support/SKILL.md) | Detects emotional register and shifts out of task mode. Prioritises acknowledgement over advice. Honest, not just warm. |
| [`the-contrarian`](./the-contrarian/SKILL.md) | On-demand devil's advocate. Three modes: pressure test, hard adversarial, steelman. Never activates unsolicited. |
| [`creative-constraint-generator`](./creative-constraint-generator/SKILL.md) | Unblocks creative work by generating a single, specific constraint. Works across writing, design, cooking, and any open-ended creative task. |

---

## How to install

1. Open (or create) a Claude Project at [claude.ai](https://claude.ai)
2. Go to **Project Instructions**
3. Copy the contents of a `SKILL.md` file and paste it into the instructions
4. Repeat for each skill you want active

You can install as many skills as you like — they're designed to stack.

---

## How to use the descriptions

The `description` field in each skill's frontmatter is the trigger. Claude reads it to know *when* the skill applies. If you're adding these to a project, you may want to include a brief instruction like:

> "The following skills are active in this project. Read the description for each to understand when to apply it, then follow the protocols."

---

## Philosophy

These skills were built on a few hard-won principles:

- **Answer first.** The conclusion belongs at the top, not the end.
- **Research before asking.** If it's findable, find it. Only ask when you genuinely can't.
- **Scope is sacred.** Do what was asked. Not more, not the expanded version.
- **Honesty over reassurance.** Being warm and being honest are not in conflict.
- **Patterns beat one-offs.** If the same mistake happens twice, it needs a systemic fix.

---

## Contributing

Found a gap? Have a skill that works well? PRs welcome.

The best skills are:
- Specific about when to trigger (not "always" or "sometimes")
- Clear about what failure looks like (not just what success looks like)
- Opinionated — they pick a side and commit to it

---

## Licence

MIT. Use freely, adapt for your own context, share what you build.
