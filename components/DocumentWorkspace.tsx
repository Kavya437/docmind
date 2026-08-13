"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { clearDocument } from "@/lib/documentStore";

type DocumentWorkspaceProps = {
  fileName: string;
  summary: string;
  fileUrl: string;
  documentText: string;
};

export default function DocumentWorkspace({
  fileName,
  summary,
  fileUrl,
  documentText,
}: DocumentWorkspaceProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  async function handleAsk() {
    if (!question.trim() || isAsking) return;

    setIsAsking(true);
    setAnswer("");

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: documentText,
          question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to answer question.");
      }

      setAnswer(data.answer);
      setQuestion("");
    } catch (error) {
      console.error(error);
      setAnswer("Sorry, I couldn't answer that question.");
    } finally {
      setIsAsking(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-white/[0.08] px-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-600 font-bold">
            D
          </div>

          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-violet-400">
              Document
            </p>

            <h1 className="truncate text-sm font-medium text-white sm:text-base">
              {fileName}
            </h1>
          </div>
        </div>

        <button
          onClick={async () => {
            await clearDocument();
            window.location.href = "/";
          }}
          className="rounded-lg border border-white/[0.1] px-4 py-2 text-sm text-neutral-300 transition hover:border-white/[0.2] hover:bg-white/[0.05] hover:text-white"
        >
          New document
        </button>
      </header>

      {/* Workspace */}
      <div className="grid h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        {/* PDF */}
        <section className="min-h-0 border-b border-white/[0.08] lg:border-b-0 lg:border-r">
          <div className="flex h-12 items-center border-b border-white/[0.08] px-5">
            <span className="text-sm font-medium text-neutral-400">
              PDF Preview
            </span>
          </div>

          <div className="h-[calc(100%-3rem)] bg-neutral-900">
            <iframe
              src={fileUrl}
              title={fileName}
              className="h-full w-full border-0 bg-white"
            />
          </div>
        </section>

        {/* AI */}
        <section className="flex min-h-0 flex-col bg-[#0C0C0F]">
          {/* AI Header */}
          <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/[0.08] px-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              <span className="text-sm font-medium text-violet-400">
                AI ANALYSIS
              </span>
            </div>

            <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
              Gemini AI
            </span>
          </div>

          {/* Summary */}
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-7">
            <h2 className="text-2xl font-semibold tracking-tight">
              Document Summary
            </h2>

            <div className="mt-6 whitespace-pre-wrap text-[15px] leading-7 text-neutral-300">
              {summary}
            </div>

            {/* Answer */}
            {answer && (
              <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-violet-400">
                  Answer
                </p>

                <p className="whitespace-pre-wrap text-sm leading-6 text-neutral-200">
                  {answer}
                </p>
              </div>
            )}
          </div>

          {/* Ask */}
          <div className="shrink-0 border-t border-white/[0.08] p-4 sm:p-5">
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.03] px-4 py-2 transition focus-within:border-violet-500/50">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAsk();
                  }
                }}
                placeholder="Ask anything about this document..."
                disabled={isAsking}
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-neutral-500"
              />

              <button
                onClick={handleAsk}
                disabled={!question.trim() || isAsking}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isAsking ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <Send size={17} />
                )}
              </button>
            </div>

            <p className="mt-2 px-1 text-[11px] text-neutral-600">
              Answers are generated from your uploaded document.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}