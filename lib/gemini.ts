import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateSummary(text: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Summarize this:\n\n${text}`,
    });

    return response.text;
  } catch (err: any) {
    console.log("ERROR STATUS:", err.status);
    console.log("ERROR MESSAGE:", err.message);
    console.log("ERROR DETAILS:", err);

    throw err;
  }
}