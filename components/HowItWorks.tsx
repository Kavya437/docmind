"use client";

import {
    FileUp,
    Sparkles,
    MessageCircleQuestion,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: FileUp,
        title: "Upload your document",
        description:
            "Drop in a PDF — research papers, lecture notes, reports, or any document you need to understand.",
    },
    {
        number: "02",
        icon: Sparkles,
        title: "Let AI read it",
        description:
            "DocMind extracts the content and turns important information into a clear, structured summary.",
    },
    {
        number: "03",
        icon: MessageCircleQuestion,
        title: "Ask anything",
        description:
            "Ask questions about your document and get answers grounded in the content you uploaded.",
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="w-full overflow-hidden py-16 px-4 flex justify-center">
            {/* Inner Wrapper Centered */}
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
                {/* Header Section */}
                <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">
                    How It Works
                </span>
                <h2 className="text-4xl font-bold text-white mb-3">
                    From pages to answers.
                </h2>
                <p className="text-gray-400 mb-10 max-w-xl">
                    Three simple steps between you and a document you actually understand.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl mx-auto items-stretch">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                className="group relative w-full text-left min-w-0 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04] hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]"
                            >
                                {/* Card glow */}
                                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/[0.08] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Top */}
                                <div className="relative flex items-center justify-between">
                                    <span className="text-xs font-medium tracking-[0.2em] text-neutral-700">
                                        {step.number}
                                    </span>

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] transition-all duration-500 group-hover:border-violet-400/20 group-hover:bg-violet-500/[0.08]">
                                        <Icon
                                            size={19}
                                            strokeWidth={1.7}
                                            className="text-neutral-400 transition-colors duration-500 group-hover:text-violet-300"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="mt-12 text-xl font-medium tracking-tight text-white">
                                        {step.title}
                                    </h3>

                                    {/* Updated text size & line height for smooth flow */}
                                    <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-400">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}