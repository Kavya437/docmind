"use client";

import { useEffect, useState } from "react";
import { getDocument } from "@/lib/documentStore";
import DocumentWorkspace from "@/components/DocumentWorkspace";

type DocumentData = {
    file: File;
    text: string;
    summary: string;
};

export default function WorkspacePage() {
    const [document, setDocument] = useState<DocumentData | null>(null);
    const [fileUrl, setFileUrl] = useState("");

    useEffect(() => {
        async function loadDocument() {
            try {
                const data = await getDocument();

                if (!data) return;

                setDocument(data);

                const url = URL.createObjectURL(data.file);
                setFileUrl(url);
            } catch (error) {
                console.error("Failed to load document:", error);
            }
        }

        loadDocument();
    }, []);

    useEffect(() => {
        return () => {
            if (fileUrl) {
                URL.revokeObjectURL(fileUrl);
            }
        };
    }, [fileUrl]);

    if (!document || !fileUrl) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] text-white">
                <div className="text-center">
                    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-neutral-700 border-t-violet-500" />
                    <p className="mt-4 text-sm text-neutral-500">
                        Loading document...
                    </p>
                </div>
            </main>
        );
    }

    return (
        <DocumentWorkspace
            fileName={document.file.name}
            summary={document.summary}
            fileUrl={fileUrl}
            documentText={document.text}
        />
    );
}