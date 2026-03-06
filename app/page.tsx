"use client";

import { useState } from "react";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={closeMobileMenu} className="flex items-center gap-3 group cursor-pointer hover:opacity-90">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
              <span className="material-symbols-outlined text-2xl">code_blocks</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-ar font-bold text-xl leading-none tracking-wide text-white">ت . م</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-display">Dev.Ops</span>
            </div>
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#home">الرئيسية</a>
            <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#about">عني</a>
            <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#skills">المهارات</a>
            <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#projects">المشاريع</a>
            <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#42lab">مختبر 42</a>
          </div>
          {/* CTA & Language */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
              <span>EN</span>
              <span className="w-px h-4 bg-slate-700"></span>
              <span className="text-primary">AR</span>
            </button>
            <a href="#contact" onClick={closeMobileMenu} className="relative group overflow-hidden rounded-lg bg-transparent border border-primary/30 text-primary px-6 py-2.5 text-sm font-bold hover:bg-primary hover:text-background-dark transition-all duration-300 shadow-[0_0_15px_rgba(255,183,0,0.1)] hover:shadow-[0_0_25px_rgba(255,183,0,0.4)] block">
              <span className="relative z-10 flex items-center gap-2">
                <span>تواصل معي</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </span>
            </a>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col px-6 py-4 gap-1 border-t border-white/5">
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="text-base font-medium text-slate-300 hover:text-primary transition-colors py-3 border-b border-white/5 flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-primary text-lg">home</span>
              الرئيسية
            </a>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="text-base font-medium text-slate-300 hover:text-primary transition-colors py-3 border-b border-white/5 flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-primary text-lg">person</span>
              عني
            </a>
            <a
              href="#skills"
              onClick={closeMobileMenu}
              className="text-base font-medium text-slate-300 hover:text-primary transition-colors py-3 border-b border-white/5 flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-primary text-lg">school</span>
              المهارات
            </a>
            <a
              href="#projects"
              onClick={closeMobileMenu}
              className="text-base font-medium text-slate-300 hover:text-primary transition-colors py-3 border-b border-white/5 flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-primary text-lg">folder_open</span>
              المشاريع
            </a>
            <a
              href="#42lab"
              onClick={closeMobileMenu}
              className="text-base font-medium text-slate-300 hover:text-primary transition-colors py-3 border-b border-white/5 flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-primary text-lg">science</span>
              مختبر 42
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-3 flex items-center justify-center gap-2 bg-primary text-background-dark px-6 py-3 rounded-lg font-bold text-sm hover:bg-white transition-all duration-300"
            >
              <span>تواصل معي</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="min-h-[100vh] flex items-center justify-center relative pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApqeBaZskP8Ul_X2tljx74UrNkx0midEkeT-AwLDcaLlvQpJUoeJA3Fa3fUwwSLu3mdA8xDTNuug_tYS3r77edbqKTNIfk5IbSpgtA-SyCacfqyiZ4Ma3dC9VwnK_Jj-pXJNulMPMcua_4qNMn85FhsQMFwkWdYXoQ0dLM3EHd4sOHDuylwc7MWL3BFN5HG8tKQNebLckXhAncyNmWp0ZnyUWniXBjwZP1OF_kDAr1Cot878mw6EpkQ0DsomHH7hNCj4CAcP8oe_x0')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content (Right Side in RTL) */}
          <div className="flex-1 flex flex-col items-start gap-8 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-primary tracking-wide">متاح للعمل الحر</span>
            </div>

            {/* Main Typography */}
            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-light text-slate-300 tracking-wide">
                مرحباً، أنا <span className="text-primary font-semibold">مطور برمجيات</span> وشغوف ببناء تجارب ويب متميزة
              </h2>
              <h1 className="font-serif-ar text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 hero-text-shadow leading-[1.3] pb-4">
                تحسين مهدي
              </h1>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg font-light border-r-2 border-primary/40 pr-6 mr-1">
                اركز شغفي على بناء وتطوير المواقع الإلكترونية والتطبيقات المبتكرة. أسعى لدمج الإبداع في التصميم مع كفاءة الأداء لبناء حلول تقنية متكاملة.
              </p>
            </div>

            {/* Stats / Social Proof */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md border-t border-slate-800 pt-8 mt-2">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white font-display">2+</span>
                <span className="text-xs text-slate-500">سنوات خبرة</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white font-display">+10</span>
                <span className="text-xs text-slate-500">مشروع مكتمل</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <a href="#projects" className="flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,183,0,0.3)] cursor-pointer w-full sm:w-auto text-center">
                <span>استكشف أعمالي</span>
                <span className="material-symbols-outlined text-xl">arrow_downward</span>
              </a>
              <button className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-lg font-bold text-white border border-slate-700 hover:border-primary/50 hover:bg-surface-dark transition-all duration-300 group w-full sm:w-auto text-center">
                <span className="material-symbols-outlined text-xl text-primary group-hover:rotate-12 transition-transform">download</span>
                <span>السيرة الذاتية</span>
              </button>
            </div>
          </div>

          {/* Visual Element (Left Side in RTL) */}
          <div className="flex-1 w-full flex justify-center md:justify-end relative">
            {/* Abstract Tech Card Visualization */}
            <div className="relative w-[320px] h-[420px] md:w-[400px] md:h-[500px]" style={{ perspective: '1000px' }}>
              {/* Glowing Orb Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full animate-pulse"></div>

              {/* Main Glass Card */}
              <div className="relative w-full h-full bg-gradient-to-br from-surface-dark/90 to-background-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col gap-6 transform hover:rotate-y-12 transition-transform duration-700 ease-out" style={{ transformStyle: 'preserve-3d' }}>
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-500">AI_Model_v2.0.py</span>
                </div>

                {/* Code Block Visual */}
                <div className="flex-1 font-mono text-xs leading-6 overflow-hidden relative" dir="ltr">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-dark/90 pointer-events-none z-10"></div>
                  <p className="text-slate-400 text-left">
                    <span className="text-purple-400">import</span> tensorflow <span className="text-purple-400">as</span> tf<br />
                    <span className="text-purple-400">from</span> keras.models <span className="text-purple-400">import</span> Sequential<br />
                    <br />
                    <span className="text-slate-500"># Neural Model Initialization</span><br />
                    <span className="text-blue-400">def</span> <span className="text-yellow-400">create_model</span>():<br />
                    &nbsp;&nbsp;model = Sequential()<br />
                    &nbsp;&nbsp;model.add(Dense(<span className="text-primary">128</span>, activation=<span className="text-green-400">'relu'</span>))<br />
                    &nbsp;&nbsp;model.add(Dropout(<span className="text-primary">0.2</span>))<br />
                    &nbsp;&nbsp;model.add(Dense(<span className="text-primary">64</span>, activation=<span className="text-green-400">'relu'</span>))<br />
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> model<br />
                    <br />
                    <span className="text-slate-500"># Start Processing...</span><br />
                    <span className="text-green-400">&gt;&gt; System Ready</span>
                  </p>
                </div>

                {/* Card Footer - Tech Stack Icons */}
                <div className="grid grid-cols-4 gap-4 mt-auto">
                  <div className="aspect-square rounded bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-help" title="Python">
                    <span className="material-symbols-outlined text-primary text-2xl">terminal</span>
                  </div>
                  <div className="aspect-square rounded bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-help" title="Data">
                    <span className="material-symbols-outlined text-blue-400 text-2xl">database</span>
                  </div>
                  <div className="aspect-square rounded bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-help" title="Analytics">
                    <span className="material-symbols-outlined text-purple-400 text-2xl">monitoring</span>
                  </div>
                  <div className="aspect-square rounded bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-help" title="AI">
                    <span className="material-symbols-outlined text-green-400 text-2xl">psychology</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-6 top-20 bg-surface-dark border border-primary/30 p-3 rounded-lg shadow-xl animate-[bounce_3s_infinite]">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
              </div>
              <div className="absolute -left-4 bottom-20 bg-surface-dark border border-white/10 p-3 rounded-lg shadow-xl animate-[bounce_4s_infinite]">
                <span className="material-symbols-outlined text-white">code</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="absolute bottom-8 left-1/2 transform translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-[10px] uppercase tracking-widest text-slate-400">تصفح المزيد</span>
          <span className="material-symbols-outlined text-primary">keyboard_arrow_down</span>
        </a>
      </main>

      {/* Marquee / Skills Strip */}
      <div className="overflow-hidden w-full">
        <div className="bg-primary py-3 rotate-1 md:rotate-0 transform md:transform-none">
          <div className="flex gap-8 whitespace-nowrap animate-marquee min-w-full justify-around text-background-dark font-bold text-sm tracking-wider">
            <span>WEB DEVELOPMENT</span> • <span>NEXT.JS</span> • <span>REACT</span> • <span>MOBILE APPS</span> • <span>DATA SCIENCE</span> • <span>AUTOMATION</span> • <span>N8N BOTS</span> • <span>PYTHON</span> • <span>UI/UX</span> • <span>C++</span> • <span>VIBE CODING</span>
          </div>
        </div>
      </div>

      {/* Skills Bento Grid Section */}
      <SkillsSection />

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative z-10 w-full flex justify-center bg-background-dark">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 space-y-6">
              <h2 className="font-serif-ar text-4xl md:text-5xl font-bold text-white mb-2">عني <span className="text-primary">.</span></h2>
              <h3 className="text-2xl font-display text-slate-300">طالب علوم بيانات & مطور ويب</h3>
              <p className="text-lg text-slate-400 leading-relaxed font-light border-r-2 border-primary/40 pr-6 mr-1">
                أجمع بين خلفيتي الأكاديمية كطالب في علوم البيانات وشغفي بتطوير الويب والتطبيقات. هدفي هو بناء حلول برمجية ذكية تتسم بالأداء العالي، الأمان، والتصميم العصري المبتكر. أؤمن بأن البيانات المعقدة تحتاج إلى واجهات مستخدم مذهلة وسلسة لتصبح ذات تأثير قوي.
              </p>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-surface-dark">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-mono text-slate-500 ml-auto mr-4" dir="ltr">guest@tahseen:~$</span>
                </div>
                <div className="p-6 font-mono text-sm md:text-base text-green-400 leading-relaxed" dir="ltr">
                  <p><span className="text-purple-400">tahseen</span>.<span className="text-blue-400">getRole</span>() <span className="text-slate-500">// Executing...</span></p>
                  <p className="text-yellow-300">{"=>"} "Data Science Student & Full-Stack Developer"</p>
                  <br />
                  <p><span className="text-purple-400">tahseen</span>.<span className="text-blue-400">getSkills</span>()</p>
                  <p className="text-yellow-300">{"=>"} ["Python", "Machine Learning", "React", "Next.js", "TailwindCSS", "Node.js"]</p>
                  <p className="mt-4 animate-pulse">_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 md:py-32 relative z-10 w-full bg-surface-dark/30 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12 md:mb-20 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 uppercase">
            <div>
              <h2 className="font-serif-ar text-4xl md:text-5xl font-bold text-white mb-4 text-center md:text-right">أهم الأعمال <span className="text-primary">.</span></h2>
              <p className="text-slate-400 max-w-xl text-center md:text-right font-light">مجموعة مختارة من المشاريع التي تدمج بين الجانب التحليلي العميق للبيانات وتطوير الواجهات المتقدمة والمتجاوبة.</p>
            </div>
            <div className="relative flex items-center gap-2 border border-slate-700 bg-surface-dark/60 px-5 py-2 rounded-full cursor-not-allowed opacity-75 select-none" title="Coming Soon">
              {/* Pulsing dot */}
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary/60"></span>
              </span>
              <span className="text-sm font-bold text-slate-400" dir="ltr">GitHub</span>
              <span className="material-symbols-outlined text-slate-500 text-[16px]">lock</span>
              {/* Tooltip badge */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-dark border border-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg tracking-widest uppercase">قريباً</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[340px]">
            {/* Large Project - Web App */}
            <div className="md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden border border-white/10 bg-background-dark p-8 flex flex-col justify-end transition-all hover:border-primary/50 min-h-[400px] md:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
              {/* Minimal geometric background pattern */}
              <div className="absolute inset-0 bg-[#0a0a0a] transition-transform duration-700 group-hover:scale-105 opacity-80 cyber-grid"></div>

              <div className="relative z-20 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md">تطبيق ويب</span>
                  <span className="px-3 py-1 text-xs font-mono text-white bg-white/5 rounded-full border border-white/10 backdrop-blur-md" dir="ltr">Next.js & React</span>
                </div>
                <h3 className="font-serif-ar text-3xl font-bold text-white mb-3">منصة المحفظة الاستثمارية</h3>
                <p className="text-slate-400 text-sm md:text-base max-w-lg line-clamp-3 font-light leading-relaxed">تطبيق ويب متكامل مصمم لعرض وتحليل البيانات الاستثمارية المعقدة في الوقت الفعلي بواجهة مستخدم تفاعلية وعصرية تعتمد على أحدث تقنيات React.</p>
              </div>
            </div>

            {/* Small Project 1 - Data Science */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] p-6 flex flex-col transition-all hover:border-primary/50 hover:-translate-y-1">
              <div className="mb-auto flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <span className="material-symbols-outlined text-3xl">psychology_alt</span>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-surface-dark px-2 py-1 rounded" dir="ltr">Python / ML</span>
              </div>
              <div className="mt-8 z-10">
                <h3 className="font-bold text-xl text-white mb-2">نموذج التنبؤ الذكي</h3>
                <p className="text-sm text-slate-400 line-clamp-3 font-light">نموذج تعلم آلي مطور باستخدام Python و TensorFlow لتحليل سلوكيات المستخدمين بدقة عالية والتنبؤ بالاتجاهات المستقبلية للسوق.</p>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-9xl">analytics</span>
              </div>
            </div>

            {/* Small Project 2 - Web App */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] p-6 flex flex-col transition-all hover:border-primary/50 hover:-translate-y-1">
              <div className="mb-auto flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <span className="material-symbols-outlined text-3xl">api</span>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-surface-dark px-2 py-1 rounded" dir="ltr">Node.js / Express</span>
              </div>
              <div className="mt-8 z-10">
                <h3 className="font-bold text-xl text-white mb-2">واجهة برمجة تطبيقات قابلة للتوسع</h3>
                <p className="text-sm text-slate-400 line-clamp-3 font-light">بنية تحتية متطورة مصممة باستخدام Node.js لربط الواجهات الأمامية بقواعد البيانات بشكل آمن وسريع يدعم آلاف الطلبات المتزامنة.</p>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-9xl">dns</span>
              </div>
            </div>

            {/* Medium Project - Data Visualization */}
            <div className="md:col-span-3 group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-surface-dark to-background-dark p-8 flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all hover:border-primary/50 text-right">
              <div className="flex-1 w-full order-2 md:order-1">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-green-400 bg-green-400/10 rounded-full border border-green-400/20" dir="ltr">Data Engineering</span>
                <h3 className="font-serif-ar text-2xl font-bold text-white mb-3">هندسة وتصور البيانات</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-light">بناء أنظمة متكاملة لجمع، تنظيف، وتخزين البيانات الضخمة، وعرضها في لوحات تحكم ديناميكية توفر رؤى دقيقة وسريعة لاتخاذ القرارات الاستراتيجية للمؤسسات.</p>
              </div>
              <div className="w-full md:w-1/3 order-1 md:order-2 aspect-video md:aspect-auto h-48 md:h-full rounded-xl bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-8xl text-slate-800 absolute opacity-50 transform -rotate-12">monitoring</span>
                <div className="relative z-10 grid grid-cols-4 gap-3 p-6 w-full h-full items-end" dir="ltr">
                  <div className="bg-primary/40 rounded-t-sm w-full h-[40%] animate-[pulse_3s_ease-in-out_infinite]"></div>
                  <div className="bg-blue-400/40 rounded-t-sm w-full h-[70%] animate-[pulse_4s_ease-in-out_infinite] delay-75"></div>
                  <div className="bg-purple-400/40 rounded-t-sm w-full h-[50%] animate-[pulse_2s_ease-in-out_infinite] delay-150"></div>
                  <div className="bg-green-400/40 rounded-t-sm w-full h-[90%] animate-[pulse_5s_ease-in-out_infinite] delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 42 Lab Section */}
      <section id="42lab" className="py-32 relative w-full overflow-hidden bg-white text-background-dark border-y border-slate-200">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <span className="text-[40vw] font-black leading-none tracking-tighter" dir="ltr">42</span>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-black text-white flex items-center justify-center text-4xl font-black mb-10 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform" dir="ltr">
            42
          </div>
          <h2 className="font-serif-ar text-5xl md:text-6xl font-black mb-6 text-center">مختبر 42 <span className="text-primary tracking-tighter">.</span></h2>
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl leading-relaxed mb-12 text-center">
            استوديو الإنتاج البرمجي حيث تتحول الأفكار المبتكرة والمتطلبات المعقدة الخاصة بالعملاء إلى منتجات رقمية احترافية، ممتدة من تصميم الواجهات الجذابة إلى بناء الأنظمة الخلفية الموثوقة وإطلاقها للعالم.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 rounded-full border border-black/10 text-sm font-bold tracking-wide shadow-sm bg-slate-50">تصميم واجهات احترافي</span>
            <span className="px-6 py-3 rounded-full border border-black/10 text-sm font-bold tracking-wide shadow-sm bg-slate-50">برمجة مخصصة للعملاء</span>
            <span className="px-6 py-3 rounded-full border border-black/10 text-sm font-bold tracking-wide shadow-sm bg-slate-50">أنظمة قابلة للتوسع</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10 w-full flex flex-col items-center justify-center text-center pb-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="font-serif-ar text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-8 hero-text-shadow leading-tight pb-2">
            لنصنع المستقبل
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl mx-auto font-light leading-relaxed">
            سواء كنت تبحث عن تطوير تطبيق ويب جديد، أو تحليل بيانات ضخمة، أو بناء نظام متكامل، أنا هنا لتحويل رؤيتك إلى واقع ملموس.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20 max-w-2xl mx-auto">
            {/* Email */}
            <a href="mailto:42devrest@gmail.com" className="group relative flex items-center gap-4 p-5 rounded-2xl bg-surface-dark/50 border border-white/10 hover:border-primary/50 hover:bg-surface-dark transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500 font-medium">راسلني عبر</div>
                <div className="text-white font-bold">البريد الإلكتروني</div>
              </div>
              <span className="material-symbols-outlined text-slate-600 mr-auto group-hover:text-primary transition-colors">arrow_back</span>
            </a>

            {/* Telegram */}
            <a href="https://t.me/TnMi0" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-4 p-5 rounded-2xl bg-surface-dark/50 border border-white/10 hover:border-blue-400/50 hover:bg-surface-dark transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">send</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500 font-medium">تواصل عبر</div>
                <div className="text-white font-bold">تيليجرام</div>
              </div>
              <span className="material-symbols-outlined text-slate-600 mr-auto group-hover:text-blue-400 transition-colors">arrow_back</span>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/1tsin?igsh=MXZoNXRhZWNmOGV6Zg==" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-4 p-5 rounded-2xl bg-surface-dark/50 border border-white/10 hover:border-purple-400/50 hover:bg-surface-dark transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500 font-medium">تابعني على</div>
                <div className="text-white font-bold">إنستغرام</div>
              </div>
              <span className="material-symbols-outlined text-slate-600 mr-auto group-hover:text-purple-400 transition-colors">arrow_back</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/tahseen-mahdi-018617395?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-4 p-5 rounded-2xl bg-surface-dark/50 border border-white/10 hover:border-blue-600/50 hover:bg-surface-dark transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500 font-medium">تواصل عبر</div>
                <div className="text-white font-bold">لينكد إن</div>
              </div>
              <span className="material-symbols-outlined text-slate-600 mr-auto group-hover:text-blue-600 transition-colors">arrow_back</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6" dir="ltr">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all shadow-lg select-none">
              <span className="text-sm font-display font-medium leading-none">X</span>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all shadow-lg select-none">
              <span className="text-sm font-display font-medium leading-none">in</span>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all shadow-lg select-none">
              <span className="text-sm font-display font-medium leading-none">Gh</span>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all shadow-lg select-none">
              <span className="text-sm font-display font-medium leading-none">Be</span>
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
