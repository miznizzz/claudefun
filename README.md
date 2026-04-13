[claudefun-README.md](https://github.com/user-attachments/files/26680316/claudefun-README.md)
# claudefun

A public archive of things built with Claude that were too useful (or too weird) to leave dying in a chat window.

This isn't a framework. It's not a product. It's a growing collection of artifacts, tools, and behaviour-shaping skills that came out of actually using Claude as a serious thinking and building partner — across research, health, creativity, and daily life.

Some of it is polished. Some of it is experimental. All of it works.

---

## What's in here

### 🧠 [`/skills`](./skills)
Behaviour-shaping instruction files for Claude. Each one tells Claude *how* to act in a specific situation — when to trigger, what to do, what never to do. Install them into Claude Projects to change how Claude behaves for that use case.

Current skills:
- **response-optimisation** — keeps responses the right length, right format, no padding
- **response-evaluation** — pre-send QA pass before every substantive response
- **reasoning-transparency** — surfaces logic on complex problems, no black-box answers
- **self-improvement** — structured mistake-learning with pattern escalation to memory
- **scope-creep-interceptor** — catches tasks silently expanding before it's too late
- **proactive-research** — checks memory and web before asking a single clarifying question
- **emotional-support** — detects emotional register and shifts out of task mode
- **the-contrarian** — on-demand devil's advocate in three modes: pressure test, full adversarial, steelman
- **creative-constraint-generator** — unblocks creative work with one specific, slightly uncomfortable constraint

→ [Full skills README](./skills/README.md)

### 📊 [`/health-os`](./health-os)
A personal health operating system built as a Claude artifact. Tracks metrics, flags patterns, and surfaces the connections between sleep, nutrition, energy, and output that are easy to miss when you're in the middle of living your life.

---

## The idea

Most Claude artifacts get built, used once, and disappear. Which is fine for throwaway things — but not for tools you actually return to, workflows that have real logic in them, or anything you want to share.

`claudefun` is the answer to: *where does this live after the chat closes?*

The scope is deliberately broad. If it was built with Claude and it's worth keeping, it goes here.

---

## What's coming

- Ritual tools (wind-down, morning, weekly planning)
- Research and insight frameworks
- Creative writing tools
- Interactive notebooks and calculators
- Things that don't have a category yet

---

## Using anything here

Everything is MIT licensed — take it, adapt it, build on it.

If you're installing skills into Claude: copy the contents of the `SKILL.md` file into your Project Instructions. Stack as many as you like, they're designed to work together.

If you build something good with these, or improve on them — PRs are welcome.

---

*Built by a human who uses Claude a lot. Claude helped write some of this. Make of that what you will.*
