"use client";

import React from "react";

/**
 * MemodyAnimator
 * Redesigned for:
 * 1. File enters box.
 * 2. Box glows, file turns into 3 initial parts.
 * 3. Each of the 3 parts multiplies by 2 (becoming 6 total).
 * 4. Animated "playback" loop with gaps.
 */
export default function MemodyAnimator() {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Background Aura */}
            <div className="absolute w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>

            {/* Processor Box */}
            <div className="relative z-20 w-32 h-32 bg-surface-dark border-2 border-primary/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,183,0,0.15)] overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-20"></div>
                <div className="animate-box-glow absolute inset-0 opacity-0 bg-primary/20"></div>

                <span className="material-symbols-outlined text-4xl text-primary/30 select-none">
                    developer_board
                </span>
            </div>

            {/* The Moving File */}
            <div className="animate-file-move absolute z-30 left-[-40px]">
                <div className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center backdrop-blur-md shadow-xl">
                    <span className="material-symbols-outlined text-primary text-2xl">audio_file</span>
                </div>
            </div>

            {/* The Slices (3 splitting into 6) */}
            <div className="absolute z-10 flex gap-12 pointer-events-none">
                {[0, 1, 2].map((groupIndex) => (
                    <div key={groupIndex} className="relative flex items-center justify-center w-6">
                        {/* The 2 twin slices that form when "multiplied by 2" */}
                        <div
                            className="animate-slice-reveal absolute opacity-0 w-6 h-24 bg-primary/40 rounded-md border border-primary/30 shadow-[0_0_10px_rgba(255,183,0,0.2)]"
                            style={{
                                animationDelay: `${groupIndex * 0.1}s`,
                                // We'll apply the multiplication offset via a wrapper child or separate style
                            }}
                        >
                            {/* Multiplying part A */}
                            <div
                                className="absolute inset-0 w-full h-full bg-[#ffb700] rounded-md"
                                style={{ animation: 'splitApartMirror 8s infinite forwards' }}
                            >
                                <div className="w-full h-full flex flex-col items-center justify-center gap-1 opacity-60">
                                    <div className="w-4 h-0.5 bg-white/40 rounded-full"></div>
                                    <div className="w-4 h-0.5 bg-white/40 rounded-full"></div>
                                </div>
                            </div>

                            {/* Multiplying part B (The Clone) */}
                            <div
                                className="absolute inset-0 w-full h-full bg-[#ffb700] rounded-md"
                                style={{ animation: 'splitApart 8s infinite forwards' }}
                            >
                                <div className="w-full h-full flex flex-col items-center justify-center gap-1 opacity-60">
                                    <div className="w-4 h-0.5 bg-white/40 rounded-full"></div>
                                    <div className="w-4 h-0.5 bg-white/40 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
