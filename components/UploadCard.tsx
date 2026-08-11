"use client";
import { FileUp } from "lucide-react";
import { useRef, useState } from "react";
import { extractText } from "@/lib/pdf";
import SummaryCard from "@/components/SummaryCard";

export default function UploadCard() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [summary, setSummary] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    return (
        <section className="mx-auto max-w-4xl px-6 pb-20">
            <div className="rounded-3xl border-2 border-dashed border-neutral-700 bg-neutral-900/50 p-12 text-center transition hover:border-violet-500">

                <FileUp size={60} className="mx-auto mb-6 text-violet-500" />

                <h2 className="text-2xl font-semibold">
                    Upload your PDF
                </h2>

                <p className="mt-3 text-neutral-400">
                    Drag & drop your PDF here or click below to browse.
                </p>

                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-medium hover:bg-violet-500"
                >
                    Browse Files
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

                            const response = await fetch("/api/summarize", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ text }),
                            });

                            const data = await response.json();

                            if (!response.ok) {
                                throw new Error(data.error || "Failed to generate summary.");
                            }

                            setSummary(data.summary);
                        } catch (error) {
                            console.error(error);
                        } finally {
                            setIsLoading(false);
                        }
                    }}
                />

                {selectedFile && (
                    <p className="mt-4 text-sm text-green-400">
                        Selected: {selectedFile.name}
                    </p>
                )}

                <p className="mt-4 text-sm text-neutral-500">
                    Supports PDF • Max 20 MB
                </p>

                {isLoading && (
                    <div className="mx-auto mt-10 max-w-5xl px-6 pb-10">
                        <div className="flex flex-col items-center justify-center rounded-3xl border border-neutral-800 bg-neutral-950 px-6 py-12">
                            <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-700 border-t-violet-500" />

                            <h3 className="mt-5 text-lg font-medium">
                                Analyzing your document...
                            </h3>

                            <p className="mt-2 text-sm text-neutral-500">
                                Extracting insights with AI
                            </p>
                        </div>
                    </div>
                )}

                {summary && !isLoading && <SummaryCard summary={summary} />}

            </div>
        </section>
    );
}