"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  CheckCircle, 
  BarChart2, 
  Bell, 
  Target, 
  ArrowRight,
  Activity,
  LineChart,
  Zap,
  TrendingUp,
  Instagram,
  Twitter,
  Github,
  Menu,
  X,
  Plus,
  Minus,
  Sparkles,
  Layers,
  Smartphone,
  Star
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Fade up variant for scroll animations
  const fadeUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-lg border-b border-gray-200/50 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight z-50">
            <div className="w-7 h-7 rounded-lg bg-primary shadow-[0_0_15px_rgba(182,255,59,0.5)] flex items-center justify-center">
              <Activity size={16} strokeWidth={3} className="text-black" />
            </div>
            HabitCore
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <Link href="#features" className="hover:text-black transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-black transition-colors">Method</Link>
            <Link href="#testimonials" className="hover:text-black transition-colors">Stories</Link>
            <Link href="#faq" className="hover:text-black transition-colors">FAQ</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-4 z-50">
            <button className="text-sm font-semibold text-gray-600 hover:text-black transition-colors px-4 py-2">
              Log in
            </button>
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 -mr-2 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold tracking-tight mt-10">
              <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4 flex justify-between items-center group">
                Features <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </Link>
              <Link href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4 flex justify-between items-center group">
                Method <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </Link>
              <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4 flex justify-between items-center group">
                Stories <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </Link>
              <Link href="#faq" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4 flex justify-between items-center group">
                FAQ <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </Link>
            </div>
            <div className="mt-auto pb-12 pt-8 flex flex-col gap-4">
              <button className="w-full bg-gray-100 text-black px-6 py-4 rounded-2xl text-lg font-bold active:scale-95 transition-transform">
                Log in
              </button>
              <button className="w-full bg-primary text-black px-6 py-4 rounded-2xl text-lg font-bold border border-primary/20 shadow-[0_0_30px_rgba(182,255,59,0.3)] active:scale-95 transition-transform">
                Get Started Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 md:pt-32 pb-16">
        
        {/* 1. HERO SECTION */}
        <section className="px-4 md:px-6 mb-20 md:mb-32 max-w-[1240px] mx-auto">
          <div className="bg-primary rounded-[2.5rem] p-6 pt-16 pb-0 md:p-16 lg:p-24 relative overflow-hidden flex flex-col items-center text-center shadow-[0_20px_60px_-15px_rgba(182,255,59,0.4)]">
            
            {/* Background elements */}
            <motion.div style={{ y: y1 }} className="absolute top-10 left-4 md:left-10 text-black/5">
              <Activity size={180} strokeWidth={0.5} />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-40 right-4 md:right-10 text-black/5 hidden md:block">
              <Target size={260} strokeWidth={0.5} />
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative z-10 max-w-4xl w-full flex flex-col items-center"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 text-xs md:text-sm font-bold text-black mb-8 select-none">
                <Sparkles size={16} className="text-amber-500 fill-amber-500" />
                V2.0 is now live for iOS & Web
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-[11vw] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter mb-6 text-black">
                Habits that <br className="hidden sm:block"/>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-black text-primary px-4 md:px-6 py-1 md:py-2 rounded-2xl md:-rotate-2 inline-block shadow-2xl">actually stick</span>
                  <div className="absolute inset-0 bg-black rounded-2xl blur-lg opacity-20 transform translate-y-4"></div>
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-base sm:text-xl md:text-2xl font-medium text-black/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Rewire your daily routine with data-driven tracking, smart nudges, and minimalist design. 
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 md:mb-24 relative z-20">
                <button className="w-full sm:w-auto bg-black text-white px-8 py-4 md:py-5 rounded-full text-lg font-bold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group shadow-2xl shadow-black/20">
                  Start tracking free
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <p className="text-xs font-semibold text-black/50 sm:hidden mt-2">No credit card required.</p>
              </motion.div>

              {/* Graphical App Preview for Hero */}
              <motion.div 
                variants={fadeUp}
                className="w-full max-w-2xl mx-auto relative mt-auto -mb-1"
              >
                <div className="bg-white rounded-t-3xl md:rounded-t-[2.5rem] p-4 md:p-6 shadow-2xl border-t border-l border-r border-black/5 w-full flex flex-col gap-4 relative">
                  {/* Decorative status bar */}
                  <div className="w-16 h-1.5 bg-gray-200 rounded-full mx-auto mb-2" />
                  
                  {/* Mock UI Rows */}
                  {[
                    { name: "Morning Run", streak: 12, color: "bg-black", text: "text-white" },
                    { name: "Read 10 Pages", streak: 5, color: "bg-gray-100", text: "text-black" },
                    { name: "Drink Water", streak: 45, color: "bg-primary", text: "text-black" }
                  ].map((habit, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center justify-between p-4 rounded-2xl ${habit.color} ${habit.text} shadow-sm cursor-default`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${i===0 ? 'bg-white/20' : i===1 ? 'bg-white' : 'bg-black/10'}`}>
                          <CheckCircle size={24} className={i===0 ? "text-white" : "text-black"} />
                        </div>
                        <div className="font-bold text-lg">{habit.name}</div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs opacity-70 font-bold uppercase tracking-wider">Streak</span>
                        <span className="text-2xl font-black">{habit.streak}</span>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Gradient to mask bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent rounded-t-3xl pointer-events-none" />
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* LOGO CLOUD (Social Proof) */}
        <section className="px-6 mb-24 md:mb-32 max-w-[1200px] mx-auto border-b border-gray-200/60 pb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by 50,000+ daily doers</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale select-none">
              <div className="text-2xl font-black tracking-tighter">TechDaily</div>
              <div className="text-2xl font-black font-serif italic">The Verge</div>
              <div className="text-2xl font-black uppercase tracking-widest">Wired</div>
              <div className="text-2xl font-black lowercase">fastcompany</div>
              <div className="hidden md:block text-2xl font-black bg-black text-white px-3 pb-1 -skew-x-12">GQ</div>
            </div>
          </motion.div>
        </section>

        {/* 2. CORE FEATURES (Bento Grid) */}
        <section id="features" className="px-4 md:px-6 mb-24 md:mb-40 max-w-[1200px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-12 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">Core Features</h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">Everything you need to build consistency, stripped of all the unnecessary clutter.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 font-bold hover:text-primary transition-colors text-lg">
              View all features <ArrowRight size={20} />
            </button>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
            {/* Large Card 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp}
              className="md:col-span-2 bg-black text-white p-8 md:p-12 rounded-[2rem] relative overflow-hidden group flex flex-col justify-between min-h-[300px] md:min-h-[400px]"
            >
              <div className="relative z-10 max-w-sm mb-12">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6 backdrop-blur-md">
                  <LineChart size={28} strokeWidth={2} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Deep Analytics</h3>
                <p className="text-gray-400 text-lg font-medium">Understand your patterns. We visualize your completions so you can see exactly where you drop off.</p>
              </div>
              
              {/* Graphic element */}
              <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[110%] md:w-[60%] opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                <svg viewBox="0 0 200 100" className="w-full h-auto stroke-primary fill-none transition-transform duration-700 group-hover:scale-105" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0,80 Q20,20 40,60 T80,40 T120,60 T160,20 T200,50" />
                  <path d="M0,90 Q40,40 80,70 T160,30 T200,60" className="stroke-primary/30" />
                </svg>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp}
              className="bg-gray-100 p-8 md:p-12 rounded-[2rem] flex flex-col group hover:bg-gray-200 transition-colors duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Bell size={28} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">Smart Nudges</h3>
              <p className="text-gray-600 font-medium">Gentle, contextual reminders that adapt to your schedule.</p>
              
              <div className="mt-auto pt-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Zap size={20} className="text-black" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Time for a run!</div>
                    <div className="text-xs text-gray-500">You're on a 5 day streak.</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp}
              className="bg-[#F2FBDF] p-8 md:p-12 rounded-[2rem] flex flex-col group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary text-black flex items-center justify-center mb-6 shadow-sm group-hover:rotate-12 transition-transform duration-500">
                <Layers size={28} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">Goal Systems</h3>
              <p className="text-gray-700 font-medium">Break massive ambitions down into daily atomic actions.</p>
            </motion.div>

            {/* Large Card 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp}
              className="md:col-span-2 bg-white border border-gray-200 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group min-h-[300px]"
            >
              <div className="relative z-10 max-w-sm mb-12">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                  <CheckCircle size={28} strokeWidth={2} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frictionless Logs</h3>
                <p className="text-gray-500 text-lg font-medium">Designed for speed. Track your entire routine in under 10 seconds.</p>
              </div>

               <div className="absolute right-0 bottom-0 md:-right-10 md:-bottom-20 w-[90%] md:w-[60%] flex gap-2 sm:gap-4 p-4 transform rotate-12 opacity-80 group-hover:rotate-6 transition-transform duration-700">
                  {[1,2,3,4].map((col) => (
                    <div key={col} className="flex flex-col gap-2 sm:gap-4">
                      {[1,2,3,4,5].map((row) => (
                        <div key={`${col}-${row}`} className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg ${(col * 5 + row) % 3 !== 0 ? 'bg-primary' : 'bg-gray-100'} shadow-sm`} />
                      ))}
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </section>

        {/* 3. HOW IT WORKS (Vertical on Mobile) */}
        <section id="how-it-works" className="px-6 mb-24 md:mb-40 max-w-[1000px] mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">The Methodology</h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">It's not about motivation, it's about systems. Here is how HabitCore rewires your behavior.</p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between relative gap-16 md:gap-0">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[2px] bg-gray-100 -z-10" />
            
            {/* Connecting line for mobile */}
            <div className="md:hidden absolute top-[10%] bottom-[10%] left-1/2 w-[2px] -translate-x-1/2 bg-gray-100 -z-10" />
            
            <MethodStep 
              number="01"
              icon={<Smartphone size={32} className="text-black" strokeWidth={1.5} />}
              title="Track Frictionlessly"
              description="Log actions in 2 taps. We removed all complex menus so you actually do it."
              delay={0}
            />
            <MethodStep 
              number="02"
              icon={<BarChart2 size={32} className="text-black" strokeWidth={1.5} />}
              title="Analyze Patterns"
              description="See correlations between days of the week, weather, and your success rates."
              delay={0.2}
            />
            <MethodStep 
              number="03"
              icon={<Target size={32} className="text-black" strokeWidth={1.5} />}
              title="Optimize Routine"
              description="Adjust your systems based on hard data, not just how you feel that day."
              delay={0.4}
            />
          </div>
        </section>

        {/* 4. VALUE SECTION (Dark Mode Impact) */}
        <section className="px-4 md:px-6 mb-24 md:mb-40 max-w-[1240px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0A0A0A] text-white rounded-[2.5rem] p-8 py-16 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden relative shadow-2xl"
          >
            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
            
            <div className="lg:w-[55%] relative z-10 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                Your ultimate <br />
                <span className="text-primary inline-flex mt-2 selection:bg-white selection:text-black">Consistency Engine</span>
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                We've stripped away the noise. What's left is a powerful, behavior-driven platform that uses your own data to reinforce good habits.
              </p>
              <ul className="space-y-6 inline-block text-left">
                {[
                  "Behavioral insights powered by your data",
                  "Minimalist interface reduces cognitive load",
                  "Cross-platform sync (iOS, Web, Mac)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-medium text-gray-200">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="text-primary" size={16} strokeWidth={2.5} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-[45%] w-full flex justify-center lg:justify-end relative z-10">
              <div className="w-full max-w-[400px] aspect-square lg:aspect-[4/5] bg-black border border-gray-800 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                
                {/* Abstract UI Matrix */}
                <div className="h-6 w-1/2 bg-gray-800 rounded-lg mb-4" />
                
                <div className="flex-1 flex flex-col gap-3">
                  {Array.from({ length: 6 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex gap-3 h-full">
                      {[1, 2, 3, 4, 5, 6].map(i => {
                        const isPrimary = (rowIndex * 6 + i) % 7 === 0 || (rowIndex * 6 + i) % 4 === 0;
                        const isSecondary = (rowIndex * 6 + i) % 5 === 0;
                        return (
                          <motion.div 
                            key={i} 
                            whileHover={{ scale: 1.15, zIndex: 20 }}
                            className={`flex-1 rounded-md sm:rounded-lg ${isPrimary ? 'bg-primary' : isSecondary ? 'bg-primary/40' : 'bg-gray-900'} border border-gray-800 transition-colors cursor-pointer`} 
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
                
                <div className="relative z-20 mt-auto pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg">Weekly Consistency</div>
                      <div className="text-primary font-bold text-3xl mt-1">94%</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5. TESTIMONIALS */}
        <section id="testimonials" className="px-6 mb-24 md:mb-40 max-w-[1200px] mx-auto">
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">Habit Transformations</h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">Real stories from people who rewired their routines forever.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <TestimonialCard 
              quote="I've tried 10 different habit apps. This is the only one minimal enough that I actually use it daily without feeling overwhelmed."
              author="Sarah Jenkins"
              role="Product Designer"
              rating={5}
            />
            <TestimonialCard 
              quote="The streak visualization completely changed how I look at my morning routine. 100 days strong and never missing twice."
              author="Marcus Chen"
              role="Software Engineer"
              rating={5}
            />
            <TestimonialCard 
              quote="I stopped focusing on the outcomes and started focusing on the daily action. The data simply speaks for itself over time."
              author="Elena Rodriguez"
              role="Founder"
              rating={5}
            />
          </div>
        </section>

        {/* 6. FAQ (New Section) */}
        <section id="faq" className="px-6 mb-24 md:mb-40 max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <FaqItem 
              question="Is HabitCore completely free?" 
              answer="The core tracking experience is completely free forever. We offer a Pro plan for advanced analytics and unlimited goals." 
            />
            <FaqItem 
              question="Can I import my data from other apps?" 
              answer="Yes! We support CSV imports from most major habit tracking applications to keep your historic streaks alive." 
            />
            <FaqItem 
              question="Does it work offline?" 
              answer="HabitCore is local-first. You can log all your habits offline, and it will automatically sync when you reconnect." 
            />
            <FaqItem 
              question="Is there a desktop app?" 
              answer="We currently offer native iOS and Web apps. A dedicated MacOS application is currently in beta." 
            />
          </div>
        </section>

        {/* 7. CTA SECTION */}
        <section className="px-4 md:px-6 mb-10 max-w-[1240px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[2.5rem] p-10 md:p-24 text-center relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(182,255,59,0.4)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 blur-3xl rounded-full" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight mb-8 text-black leading-[1.05]">
                Start your first <br/>streak today.
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-black/70 mb-12 max-w-xl mx-auto">
                Join 50,000+ others building better lives through daily action. Takes 30 seconds to start.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20 focus:outline-none focus:ring-4 focus:ring-black/20">
                  Join for Free
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="bg-white px-6 py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 font-bold text-2xl tracking-tight mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary flex flex-shrink-0 items-center justify-center">
                  <Activity size={18} strokeWidth={3} className="text-black" />
                </div>
                HabitCore
              </div>
              <p className="text-gray-500 font-medium max-w-sm leading-relaxed mb-8">
                The minimalist consistency engine designed to help you build habits that actually last.
              </p>
              <div className="flex items-center gap-5 text-gray-400">
                <Link href="#" className="hover:text-primary transition-colors bg-gray-50 p-3 rounded-full hover:bg-black group"><Twitter size={20} className="group-hover:text-primary" /></Link>
                <Link href="#" className="hover:text-primary transition-colors bg-gray-50 p-3 rounded-full hover:bg-black group"><Instagram size={20} className="group-hover:text-primary" /></Link>
                <Link href="#" className="hover:text-primary transition-colors bg-gray-50 p-3 rounded-full hover:bg-black group"><Github size={20} className="group-hover:text-primary" /></Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-black mb-6 uppercase tracking-wider text-sm">Product</h4>
              <ul className="space-y-4 font-medium text-gray-500">
                <li><Link href="#" className="hover:text-black transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">iOS App</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Web App</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-black mb-6 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-4 font-medium text-gray-500">
                <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 font-medium text-sm">© {new Date().getFullYear()} HabitCore Inc. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
              Made with <Sparkles size={14} className="text-black" /> for doers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MethodStep({ number, icon, title, description, delay }: { number: string, icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3 px-4 md:px-6 relative group"
    >
      <div className="w-24 h-24 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 relative z-10 outline outline-8 outline-background group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
        <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
          {icon}
        </div>
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-black text-primary text-sm font-black flex items-center justify-center rounded-xl shadow-lg border-2 border-background">
          {number}
        </div>
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">{title}</h3>
      <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, role, rating }: { quote: string, author: string, role: string, rating: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/5"
    >
      <div>
        <div className="flex gap-1 mb-6 text-primary">
          {Array.from({length: rating}).map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>
        <p className="text-xl md:text-2xl font-bold tracking-tight text-black mb-10 leading-snug">
          "{quote}"
        </p>
      </div>
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center font-bold text-white shadow-inner">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-black">{author}</h4>
          <p className="text-sm font-medium text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 bg-white rounded-2xl overflow-hidden transition-colors hover:border-gray-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
      >
        <h4 className="text-lg md:text-xl font-bold text-black pr-8">{question}</h4>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/20 text-primary' : 'text-black'}`}>
          {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-0 text-gray-600 font-medium leading-relaxed text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
