---
name: prompt-architect
description: >
  A skill that helps Myra write better, sharper prompts to Claude — calibrated to the
  task type and designed to unlock higher-quality outputs. Trigger when she says "how
  should I ask you this", "help me prompt you", "I'm not getting what I want from you",
  "prompt architect", "how do I get better results from Claude", or when she seems to
  be getting consistently underwhelming outputs on a particular type of task. Never apply
  this skill to simple tasks; reserve for complex, creative, or high-value requests.
---

# Prompt Architect

## The Core Insight

Claude doesn't have good days and bad days. What varies is the quality of the input.
A vague prompt gets a generic response. A precisely architected prompt gets the best
Claude is capable of.

---

## The Prompt Anatomy

### 1. Role / Persona
Tell Claude who to be, not just what to do.

*Weak:* "Give me feedback on this essay"
*Strong:* "You're a rigorous editor with a taste for cinematic prose and a low tolerance for hedging. Read this as if you're deciding whether to publish it."

**For Myra:** Her best results come from giving Claude a personality with opinions. "Skeptical but invested" outperforms "helpful reviewer" every time.

### 2. Context Stack
Give Claude the layers it needs:
- What is this for? (audience, purpose, stakes)
- What constraints apply? (voice, length, format, what NOT to do)
- What has already been tried / decided?
- What does success look like?

### 3. The Constraint Frame
Constraints are activators, not limitations. A prompt with no constraints gets Claude's average output.

*Productive constraints:*
- "No bullet points. Prose only."
- "Make it Baseerat voice — cinematic, layered, no research-speak"
- "Don't give me the safe version first. Give me the version you actually think is best."

### 4. The Anti-Pattern
Tell Claude explicitly what to avoid. Underused and high-impact.

- "Don't give me generic advice — I need this specific to qualitative research"
- "Don't soften the feedback"
- "Don't add a section I didn't ask for"

### 5. Output Specification
Format, length, tone, structure. Tell Claude exactly what to produce.

### 6. The Activation Phrase
One sentence at the end that signals Claude to bring a specific quality.

- "Be ruthlessly honest."
- "Don't hold back the interesting version."
- "Challenge the premise if it deserves it."

---

## Prompt Templates by Task Type

### For Baseerat essays
```
You're a literary editor who loves cinematic, slow-burn cultural commentary.
I'm writing a piece for Baseerat — [topic/angle in one sentence].
[Paste draft or describe where you are]
What's not working? What's the strongest sentence? What's the piece actually about?
Don't restructure. Just tell me what you see.
```

### For QualiTEA Thoughts
```
You know QualiTEA Thoughts well — polished, direct, expert but not academic.
I'm writing a post about [topic].
[Paste draft or describe angle]
Read it as a qual researcher who's also a good writer. What's missing? What's too safe?
Be specific. No generic feedback.
```

### For research / analysis tasks
```
You're a senior qualitative researcher with strong critical thinking.
Context: [project / client / what this is for]
Task: [specific ask]
Constraints: [what you don't want, format requirements]
Output: [what you want to receive]
Don't pad. Don't hedge. Give me the sharpest version.
```

### For decisions / strategy
```
Here's the situation: [brief context]
Here's what I'm deciding between: [options]
Here's what I already know / have already decided: []
What I need from you: [analysis / pushback / stress-test / recommendation]
Don't give me a pros/cons list. Think like someone who's made this kind of decision before.
```

---

## The Upgrade Moves

**For better writing feedback:** Add "Read it aloud in your head first"

**For better analysis:** Add "Tell me what I'm not seeing"

**For better creative work:** Add "Give me the version that surprises you, not the one that satisfies the brief"

**For breaking Claude out of generic mode:** Add "You've been giving me the safe version. I want the interesting one."

**For Myra's specific pattern — arriving with semi-formed thinking:** Add "I'm bringing you a half-formed idea. Don't polish it — pressure-test it."

---

## Activation Phrases
- "Prompt architect — [task]"
- "How should I ask you this?"
- "Help me prompt you better"
- "I'm not getting what I want — how do I fix the prompt?"
