"use client";

import { FileUp, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { extractText } from "@/lib/pdf";
import DocumentWorkspace from "@/components/DocumentWorkspace";
import { saveDocument } from "@/lib/documentStore";

export default function UploadCard() {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [summary, setSummary] = useState("");
    const [documentText, setDocumentText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <section
            id="upload"
            className="relative flex w-full flex-col items-center overflow-hidden px-6 py-24 sm:px-8"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/[0.045] blur-[150px]" />

            {/* SECTION HEADING */}
            <div className="relative flex w-full max-w-3xl flex-col items-center text-center">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-400">
                    Start with a document
                </p>

                <h2 className="mt-4 text-center text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
                    Ready to understand your PDF?
                </h2>

                <p className="mt-4 max-w-xl text-center text-sm leading-relaxed text-neutral-400 sm:text-base">
                    Upload a document and let DocMind turn pages of information into
                    clear, useful insights.
                </p>
            </div>

            {/* UPLOAD CARD */}
            {!summary && !isLoading && (
                <div className="relative mt-16 flex w-full justify-center">
                    <div className="group relative flex w-full max-w-2xl flex-col overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#0D0D12] shadow-[0_35px_100px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-violet-500/25">
                        {/* Card glow */}
                        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[110px]" />

                        {/* Grid texture */}
                        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:42px_42px]" />

                        {/* CARD CONTENT */}
                        <div className="relative flex flex-col items-center p-10 text-center sm:p-16">

                            {/* MAIN UPLOAD ZONE */}
                            <div className="flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] border border-violet-400/20 bg-violet-500/[0.08] shadow-[0_0_45px_rgba(139,92,246,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:border-violet-400/30 group-hover:bg-violet-500/[0.12]">
                                    <FileUp
                                        size={32}
                                        strokeWidth={1.7}
                                        className="text-violet-300"
                                    />
                                </div>

                                <p className="mt-8 text-lg font-medium text-neutral-200">
                                    Drag & drop your PDF here
                                </p>

                                <p className="mt-2 text-sm text-neutral-400">
                                    or choose a file from your computer
                                </p>

                                {/* Button */}
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="mt-14 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-neutral-200"
                                >
                                    <FileUp size={16} />
                                    Choose PDF
                                </button>

                                <input
                                    type="file"
                                    accept=".pdf"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={async (e) => {
                                        const file = e.target.files?.[0];

                                        if (!file) return;

                                        setSelectedFile(file);
                                        setIsLoading(true);
                                        setSummary("");

                                        try {
                                            const text = await extractText(file);
                                            setDocumentText(text);

                                            const response = await fetch("/api/summarize", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                },
                                                body: JSON.stringify({ text }),
                                            });

                                            const data = await response.json();

                                            if (!response.ok) {
                                                throw new Error(
                                                    data.error || "Failed to generate summary."
                                                );
                                            }

                                            await saveDocument({
                                                file,
                                                text,
                                                summary: data.summary,
                                            });

                                            router.push("/workspace");
                                        } catch (error) {
                                            console.error(error);
                                        } finally {
                                            setIsLoading(false);
                                        }
                                    }}
                                />

                                {/* File information */}
                                <p className="mt-12 text-xs text-neutral-600">
                                    PDF files · Maximum 20 MB
                                </p>
                            </div>
                        </div>

                        {/* FEATURE STRIP */}
                        <div className="relative w-full border-t border-white/[0.06] bg-white/[0.015] px-6 py-5">
                            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-medium text-neutral-400">
                                <span className="flex items-center gap-2">
                                    <Sparkles
                                        size={14}
                                        className="text-violet-400"
                                    />
                                    AI summaries
                                </span>

                                <span>Key insights</span>
                                <span>Document Q&A</span>
                                <span>Instant analysis</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* LOADING */}
            {isLoading && (
                <div className="relative mt-16 flex w-full justify-center">
                    <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0D0D12] px-6 py-24 text-center shadow-[0_35px_100px_rgba(0,0,0,0.35)]">
                        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[100px]" />

                        <div className="relative">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
                                <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-700 border-t-violet-400" />
                            </div>

                            <h3 className="mt-8 text-xl font-medium text-white">
                                Reading your document
                            </h3>

                            <p className="mt-3 text-sm text-neutral-500">
                                Extracting insights with AI...
                            </p>

                            {selectedFile && (
                                <p className="mt-6 text-xs text-neutral-600">
                                    {selectedFile.name}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* WORKSPACE */}
            {summary && !isLoading && selectedFile && (
                <div className="w-full">
                    <DocumentWorkspace
                        fileName={selectedFile.name}
                        summary={summary}
                        fileUrl={URL.createObjectURL(selectedFile)}
                        documentText={documentText}
                    />
                </div>
            )}
        </section>
    );
}