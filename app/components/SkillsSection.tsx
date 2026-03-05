"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   Abstract 2D Browser + Smartphone SVG Visual
───────────────────────────────────────────────────────────────── */
function WebAppVisual() {
    return (
        <svg
            viewBox="0 0 220 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden="true"
        >
            {/* Browser window */}
            <rect x="10" y="20" width="140" height="100" rx="8" fill="rgba(255,183,0,0.06)" stroke="rgba(255,183,0,0.35)" strokeWidth="1.5" />
            {/* Browser toolbar */}
            <rect x="10" y="20" width="140" height="22" rx="8" fill="rgba(255,183,0,0.12)" />
            <rect x="10" y="34" width="140" height="8" fill="rgba(255,183,0,0.12)" />
            {/* Traffic lights */}
            <circle cx="22" cy="31" r="3.5" fill="#ff5f57" />
            <circle cx="33" cy="31" r="3.5" fill="#febc2e" />
            <circle cx="44" cy="31" r="3.5" fill="#28c840" />
            {/* URL bar */}
            <rect x="55" y="25" width="80" height="12" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,183,0,0.2)" strokeWidth="1" />
            <text x="65" y="34" fontSize="6" fill="rgba(255,183,0,0.6)" fontFamily="monospace">42.studio/app</text>
            {/* Code lines in browser */}
            <rect x="22" y="52" width="90" height="3" rx="1.5" fill="rgba(139,92,246,0.5)" />
            <rect x="22" y="60" width="70" height="3" rx="1.5" fill="rgba(255,183,0,0.3)" />
            <rect x="22" y="68" width="110" height="3" rx="1.5" fill="rgba(255,183,0,0.2)" />
            <rect x="22" y="76" width="55" height="3" rx="1.5" fill="rgba(59,130,246,0.4)" />
            <rect x="22" y="84" width="80" height="3" rx="1.5" fill="rgba(255,183,0,0.15)" />
            <rect x="22" y="92" width="60" height="3" rx="1.5" fill="rgba(139,92,246,0.3)" />
            {/* Smartphone overlapping */}
            <rect x="130" y="55" width="70" height="110" rx="10" fill="rgba(26,26,26,0.95)" stroke="rgba(255,183,0,0.5)" strokeWidth="1.5" />
            {/* Phone notch */}
            <rect x="152" y="60" width="26" height="6" rx="3" fill="rgba(255,183,0,0.15)" />
            {/* Phone screen content */}
            <rect x="138" y="75" width="54" height="8" rx="2" fill="rgba(255,183,0,0.2)" />
            <rect x="138" y="88" width="40" height="5" rx="1.5" fill="rgba(255,255,255,0.08)" />
            <rect x="138" y="97" width="50" height="5" rx="1.5" fill="rgba(255,255,255,0.06)" />
            <rect x="138" y="107" width="30" height="5" rx="1.5" fill="rgba(255,255,255,0.06)" />
            {/* App icons row */}
            <rect x="138" y="120" width="12" height="12" rx="3" fill="rgba(255,183,0,0.3)" />
            <rect x="154" y="120" width="12" height="12" rx="3" fill="rgba(139,92,246,0.3)" />
            <rect x="170" y="120" width="12" height="12" rx="3" fill="rgba(59,130,246,0.3)" />
            {/* Phone home bar */}
            <rect x="150" y="150" width="30" height="3" rx="1.5" fill="rgba(255,183,0,0.3)" />
            {/* Glow accent */}
            <ellipse cx="165" cy="110" rx="30" ry="20" fill="rgba(255,183,0,0.05)" />
        </svg>
    );
}

/* ─────────────────────────────────────────────────────────────────
   Sub-skill Badge
───────────────────────────────────────────────────────────────── */
function SkillBadge({ label, color = "primary" }: { label: string; color?: "primary" | "blue" | "purple" | "green" }) {
    const colorMap = {
        primary: "bg-primary/10 text-primary border-primary/25",
        blue: "bg-blue-500/10 text-blue-300 border-blue-500/25",
        purple: "bg-purple-500/10 text-purple-300 border-purple-500/25",
        green: "bg-green-500/10 text-green-300 border-green-500/25",
    };
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorMap[color]} backdrop-blur-sm`}>
            {label}
        </span>
    );
}

/* ─────────────────────────────────────────────────────────────────
   Main Skills Section Component
───────────────────────────────────────────────────────────────── */
export default function SkillsSection() {
    const [heroHovered, setHeroHovered] = useState(false);

    return (
        <section id="skills" className="py-24 md:py-32 relative z-10 w-full bg-background-dark border-t border-white/5" dir="rtl">
            {/* Background cyber grid */}
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
            {/* Amber glow blob */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-surface-dark border border-primary/20 text-xs text-primary font-medium tracking-wide">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        المهارات والتخصصات
                    </div>
                    <h2 className="font-serif-ar text-4xl md:text-5xl font-bold text-white mb-3">
                        ترسانة المهارات <span className="text-primary">.</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl font-light">
                        مجموعة متكاملة من التخصصات التقنية، مرتّبة بحسب الأولوية والتأثير.
                    </p>
                </div>

                {/* ── BENTO GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

                    {/* ══════════════════════════════════════════════════════
              ROW 1 — Hero Card (col-span-8) + Data Intelligence (col-span-4)
          ══════════════════════════════════════════════════════ */}

                    {/* 1A ★ Web & App Hero Card */}
                    <div
                        className="md:col-span-8 group relative rounded-2xl overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-[#141200] via-[#0d0d0d] to-background-dark p-7 md:p-8 flex flex-col gap-6 cursor-default transition-all duration-500 hover:border-primary/80"
                        style={{
                            boxShadow: "0 0 40px rgba(255,183,0,0.12), inset 0 0 60px rgba(255,183,0,0.03)",
                        }}
                        onMouseEnter={() => setHeroHovered(true)}
                        onMouseLeave={() => setHeroHovered(false)}
                    >
                        {/* Corner glow on hover */}
                        <div
                            className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: "radial-gradient(circle at 20% 20%, rgba(255,183,0,0.12) 0%, transparent 60%)",
                                opacity: heroHovered ? 1 : 0,
                            }}
                        />

                        {/* 42 Studio watermark — revealed on hover */}
                        <div
                            className="absolute bottom-5 left-6 flex items-center gap-1.5 transition-all duration-500 pointer-events-none"
                            style={{ opacity: heroHovered ? 1 : 0, transform: heroHovered ? "translateY(0)" : "translateY(6px)" }}
                        >
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-display">Made by</span>
                            <span className="text-xs font-bold text-primary/70">42 Studio</span>
                        </div>

                        {/* Priority badge */}
                        <div className="flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold tracking-wide">
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                التخصص الرئيسي
                            </div>
                            <span className="text-xs font-mono text-slate-600 hidden md:block" dir="ltr">web + mobile</span>
                        </div>

                        {/* Content + Visual */}
                        <div className="flex flex-col md:flex-row items-start gap-6 flex-1">
                            {/* Text */}
                            <div className="flex-1 flex flex-col gap-4">
                                <div>
                                    <h3 className="font-serif-ar text-2xl md:text-3xl font-bold text-white leading-snug mb-1">
                                        تطوير الويب والتطبيقات الذكية
                                    </h3>
                                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                                        بناء تجارب رقمية من الفكرة إلى الإنتاج — من واجهات React/Next.js المتقدمة، إلى تطبيقات الهاتف متعددة المنصات، بلمسة تصميمية احترافية.
                                    </p>
                                </div>

                                {/* Sub-skills */}
                                <div className="flex flex-wrap gap-2">
                                    <SkillBadge label="React / Next.js" color="primary" />
                                    <SkillBadge label="Cross-platform Mobile" color="blue" />
                                    <SkillBadge label="UI/UX Design" color="purple" />
                                    <SkillBadge label="TypeScript" color="primary" />
                                    <SkillBadge label="TailwindCSS" color="blue" />
                                </div>

                                {/* Mini progress bars */}
                                <div className="space-y-2 mt-1 max-w-xs">
                                    {[
                                        { label: "React / Next.js", pct: 88 },
                                        { label: "Mobile Apps", pct: 75 },
                                        { label: "UI/UX Design", pct: 82 },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-center gap-3">
                                            <span className="text-xs text-slate-500 w-28 shrink-0 text-left" dir="ltr">{item.label}</span>
                                            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-l from-primary to-primary/40 rounded-full"
                                                    style={{ width: `${item.pct}%`, boxShadow: "0 0 8px rgba(255,183,0,0.5)" }}
                                                />
                                            </div>
                                            <span className="text-xs text-primary font-mono w-8 text-right">{item.pct}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SVG Visual */}
                            <div className="w-full md:w-[200px] h-[140px] md:h-[170px] flex-shrink-0 relative">
                                <div className="absolute inset-0 bg-primary/5 rounded-xl blur-2xl" />
                                <div className="relative w-full h-full">
                                    <WebAppVisual />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 1B ── Data Intelligence Card */}
                    <div className="md:col-span-4 group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0a0f1c] to-background-dark p-6 flex flex-col gap-4 transition-all duration-300 hover:border-blue-500/40"
                        style={{ boxShadow: "0 0 0px rgba(59,130,246,0)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(59,130,246,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0px rgba(59,130,246,0)")}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-blue-400 text-2xl">query_stats</span>
                        </div>

                        <div>
                            <h3 className="font-serif-ar text-xl font-bold text-white mb-1">
                                تحليل البيانات والذكاء الاصطناعي
                            </h3>
                            <p className="text-sm text-slate-400 font-light leading-relaxed">
                                استخراج الأنماط من البيانات الضخمة وتحويلها إلى رؤى قابلة للتنفيذ.
                            </p>
                        </div>

                        {/* Skills chips */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {["Python", "Tableau", "Excel", "Data Viz", "Pandas"].map((s) => (
                                <span key={s} className="px-2.5 py-1 text-xs rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/15 font-mono" dir="ltr">
                                    {s}
                                </span>
                            ))}
                        </div>

                        {/* Background icon */}
                        <div className="absolute -bottom-6 -left-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-[120px] text-blue-400">analytics</span>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════════════════
              ROW 2 — Automation Card (col-span-5) + C++ (col-span-3) + (vibe coding) Coding (col-span-4)
          ══════════════════════════════════════════════════════ */}

                    {/* 2A ── Automation & Bots */}
                    <div className="md:col-span-5 group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d0a14] to-background-dark p-6 flex flex-col gap-4 transition-all duration-300 hover:border-purple-500/40"
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 35px rgba(139,92,246,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
                    >
                        <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

                        <div className="flex items-center justify-between">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-purple-400 text-2xl">smart_toy</span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest" dir="ltr">n8n + bots</span>
                        </div>

                        <div>
                            <h3 className="font-serif-ar text-xl font-bold text-white mb-1">
                                أنظمة الأتمتة والبوتات
                            </h3>
                            <p className="text-sm text-slate-400 font-light leading-relaxed">
                                أتمتة سير العمل وبناء بوتات ذكية تعمل على منصات التواصل الرئيسية.
                            </p>
                        </div>

                        {/* Platform icons row */}
                        <div className="flex flex-wrap gap-2 mt-1">
                            {[
                                { icon: "✈️", label: "Telegram" },
                                { icon: "💬", label: "WhatsApp" },
                                { icon: "📸", label: "Instagram" },
                                { icon: "⚡", label: "n8n" },
                            ].map((p) => (
                                <div key={p.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/8 border border-purple-500/15 text-purple-300 text-xs font-medium">
                                    <span>{p.icon}</span>
                                    <span dir="ltr">{p.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Animated dots representing bot flow */}
                        <div className="flex items-center gap-1 mt-auto" dir="ltr" aria-hidden="true">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-1.5 h-1.5 rounded-full bg-purple-400/50"
                                    style={{ animation: `pulse ${1 + i * 0.15}s ease-in-out infinite alternate` }}
                                />
                            ))}
                            <span className="text-[10px] text-purple-400/60 ml-2 font-mono">workflow active</span>
                        </div>

                        <div className="absolute -bottom-6 -left-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-[120px] text-purple-400">hub</span>
                        </div>
                    </div>

                    {/* 2B ── C++ Basics */}
                    <div className="md:col-span-3 group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0a100a] to-background-dark p-6 flex flex-col gap-3 transition-all duration-300 hover:border-green-500/40"
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 25px rgba(34,197,94,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
                    >
                        <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-green-400 text-xl">memory</span>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg text-white mb-1">أساسيات C++</h3>
                            <p className="text-xs text-slate-400 font-light leading-relaxed">
                                فهم عميق للذاكرة والمؤشرات والبرمجة الكائنية على المستوى المنخفض.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {["OOP", "Pointers", "STL", "Algorithms"].map((t) => (
                                <span key={t} className="px-2 py-0.5 text-[11px] rounded bg-green-500/8 text-green-400 border border-green-500/15 font-mono" dir="ltr">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="absolute -bottom-4 -left-2 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-[90px] text-green-400">terminal</span>
                        </div>
                    </div>

                    {/* 2C ── (vibe coding) Coding (Glow Effect) */}
                    <div className="md:col-span-4 group relative rounded-2xl overflow-hidden border border-primary/20 p-6 flex flex-col gap-3 transition-all duration-300 hover:border-primary/50"
                        style={{
                            background: "radial-gradient(ellipse at 60% 40%, rgba(255,183,0,0.07) 0%, rgba(8,8,8,1) 70%)",
                            boxShadow: "0 0 0px rgba(255,183,0,0)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 50px rgba(255,183,0,0.18), inset 0 0 30px rgba(255,183,0,0.05)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 0px rgba(255,183,0,0)";
                        }}
                    >
                        {/* Animated glow orb */}
                        <div className="absolute top-4 left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse pointer-events-none" />

                        <div className="flex items-center gap-3 relative">
                            <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
                            </div>
                            {/* Unique sparkling text */}
                            <span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest" dir="ltr">✦ intuition-driven</span>
                        </div>

                        <div className="relative">
                            <h3 className="font-bold text-lg text-white mb-1">
                                استعمال الذكاء الاصطناعي{" "}
                                <span className="text-primary text-sm font-mono">((vibe coding))</span>
                            </h3>
                            <p className="text-xs text-slate-400 font-light leading-relaxed">
                                القدرة على توجيه الذكاء على القيام بمختلف المهام المتكررة وبناء الانظمة
                            </p>
                        </div>

                        {/* Pulsing vibe keywords */}
                        <div className="flex flex-wrap gap-1.5 mt-auto relative">
                            {["prompt engineering", "AI-assisted"].map((v, i) => (
                                <span
                                    key={v}
                                    className="px-2.5 py-1 text-[11px] rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                                    style={{ animationDelay: `${i * 0.4}s` }}
                                    dir={v.match(/[\u0600-\u06FF]/) ? "rtl" : "ltr"}
                                >
                                    {v}
                                </span>
                            ))}
                        </div>

                        {/* Glow line accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-l from-transparent via-primary/40 to-transparent" />
                    </div>

                </div>{/* end bento grid */}
            </div>
        </section>
    );
}
