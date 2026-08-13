import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateSummary(text: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `
You are DocMind, an AI document analysis assistant.

Analyze the following document and produce a concise, useful summary.

IMPORTANT:
- Do not write an introduction such as "Here is a summary..."
- Do not use markdown headings with # symbols.
- Follow the exact section structure below.
- Keep each section concise.
- If a section has no relevant information, write "Not mentioned in the document."
- Do not invent or assume information.

OUTPUT FORMAT:

OVERVIEW
Write 2-4 sentences explaining what the document is about and its main purpose.

KEY POINTS
- Point 1
- Point 2
- Point 3
- Point 4
- Point 5

IMPORTANT DATES
- Date — Event
If there are no important dates, write: Not mentioned in the document.

IMPORTANT PEOPLE
- Person — Role or relevance
If there are no important people, write: Not mentioned in the document.

KEY TOPICS
- Topic 1
- Topic 2
- Topic 3
- Topic 4

DOCUMENT:
${text}
`,
    });

    return response.text;
  } catch (err: any) {
    console.log("ERROR STATUS:", err.status);
    console.log("ERROR MESSAGE:", err.message);
    console.log("ERROR DETAILS:", err);

    throw err;
  }
}

export async function askDocument(text: string, question: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `
You are DocMind, an AI assistant that answers questions about documents.

Answer the user's question using ONLY the information contained in the document.

Rules:
- Do not invent information.
- If the answer cannot be found in the document, clearly say so.
- Give a direct answer first.
- Add brief supporting details when useful.
- Keep the answer concise and easy to understand.

DOCUMENT:
${text}

QUESTION:
${question}
`,
    });

    return response.text;
  } catch (err: any) {
    console.log("ASK ERROR STATUS:", err.status);
    console.log("ASK ERROR MESSAGE:", err.message);
    console.log("ASK ERROR DETAILS:", err);

    throw err;
  }
}