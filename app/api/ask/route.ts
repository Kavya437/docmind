import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { text, question } = await request.json();

    if (!text || !question) {
      return NextResponse.json(
        { error: "Document text and question are required." },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `
You are an AI document assistant.

Answer the user's question using ONLY the information in the document.

DOCUMENT:
${text}

QUESTION:
${question}

Give a clear and concise answer.
If the answer is not available in the document, say:
"I couldn't find that information in the document."
      `,
    });

    return NextResponse.json({
      answer: response.text,
    });
  } catch (error) {
    console.error("ASK API ERROR:", error);

    return NextResponse.json(
      { error: "Failed to answer the question." },
      { status: 500 }
    );
  }
}