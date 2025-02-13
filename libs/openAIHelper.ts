import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateAISummary(insights: object) {
  const prompt = `Summarize these sales insights in a professional tone: ${JSON.stringify(insights)}`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 100,
    });

    // ✅ Use optional chaining (?) and a fallback string
    return response?.choices?.[0]?.message?.content?.trim() || "Summary not available.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    return "Failed to generate summary.";
  }
}
