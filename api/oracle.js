export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { question } = req.body;
  if (!question?.trim()) return res.status(400).json({ error: "No question provided" });

  // Server-side length guard (belt-and-braces alongside the textarea maxlength)
  if (typeof question !== "string" || question.length > 300) {
    return res.status(400).json({ error: "Question too long. Keep it under 300 characters." });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1000,
        system: `You are a mystical but sharp oracle — think tarot reader who also has an MBA. You help people make decisions with clarity, wit, and genuine insight.

Your response must be JSON only, no markdown, no preamble. Format:
{
  "answer": "A 1-3 sentence response that's atmospheric but genuinely useful. Be direct. Include specific observations about the decision if inferrable. Never be vapid.",
  "verdict": "YES" | "NO" | "MAYBE" | "UNKNOWN",
  "footnote": "One short, dry, optionally witty observation (max 12 words)"
}

Verdict rules: YES = clear lean toward doing it. NO = clear lean against. MAYBE = genuinely unclear, needs more from user. UNKNOWN = not enough context. Be decisive — lean toward YES or NO when you can read the situation.`,
        messages: [{ role: "user", content: question }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Anthropic error:", data);
      return res.status(502).json({ error: "Oracle is unavailable. Try again." });
    }

    const text = data.content?.find((b) => b.type === "text")?.text || "";

    if (!text) {
      return res.status(502).json({ error: "Oracle went quiet. Try again." });
    }

    let parsed;
    try {
      parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
    } catch {
      console.error("Failed to parse oracle response:", text);
      return res.status(502).json({ error: "Oracle spoke in tongues. Try again." });
    }

    return res.status(200).json(parsed);
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
