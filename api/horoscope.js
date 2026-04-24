module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { sign, mood, event } = req.body;
  if (!sign || !mood || !event) return res.status(400).json({ error: "Missing fields" });

  if (typeof event !== "string" || event.length > 500) {
    return res.status(400).json({ error: "Event too long. Keep it under 500 characters." });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1000,
        system: `You write feral horoscopes. Rules, non-negotiable:

VOICE: Present tense. No hedging ("might", "could", "perhaps" — banned). Second person. Occasionally profane if it fits naturally. Blunt.

BANNED WORDS AND PHRASES: "the cosmos", "the universe", "celestial energies", "alignments", "the stars say", "embrace", "journey", "healing", "transformation", "deep down", "your soul", "you are feeling", "perhaps", "might", "could be", "remember that", "it's okay"

STRUCTURE:
1. One sharp behavioral observation about this sign right now — not cosmic, behavioral. Feels like you know them personally.
2. Name the specific thing they're actually dealing with based on the event. Weird-specific. The kind of specific that makes someone feel seen.
3. Two short directives. Imperative. Orders, not suggestions. Slightly uncomfortable to read.
4. One closing foresight line. What's coming. Not comforting, not doom. Just a fact from the future.

FORMAT: 3-4 short paragraphs. No headers. No lists. No asterisks. No emojis. Dense, rhythmic prose. 150-200 words max.

TONE: Brutally perceptive friend who reads cards and does not sugarcoat. Not mystical — specific.`,
        messages: [{
          role: "user",
          content: `Sign: ${sign}\nMood: ${mood}\nSomething that happened today: ${event}\n\nGive me the feral horoscope.`
        }]
      })
    });

    if (!response.ok) throw new Error("Anthropic API error");
    const data = await response.json();
    const horoscope = data.content?.find(b => b.type === "text")?.text || "";

    if (!horoscope) {
      return res.status(502).json({ error: "Oracle went quiet. Try again." });
    }

    res.status(200).json({ horoscope });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Oracle is down. Try again." });
  }
};
