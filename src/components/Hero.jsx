import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgImage from '../assets/services/terminal.png';

const Hero = () => {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden pt-20">
      {/* Animated Logistics Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#051120]">
        <motion.img 
          src={bgImage} 
          alt="Logistics Terminal" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Animated Shipping Route Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 100 100">
           <path d="M-10,80 Q30,60 50,40 T110,20" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.5" />
           <motion.circle 
              r="1" 
              fill="#38bdf8"
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: 'path("M-10,80 Q30,60 50,40 T110,20")' }}
           />
           
           <path d="M-10,20 Q40,50 60,60 T110,80" fill="none" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="0.5" />
           <motion.circle 
              r="0.8" 
              fill="#38bdf8"
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: 'path("M-10,20 Q40,50 60,60 T110,80")' }}
           />
        </svg>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-8 w-full">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 md:mb-8 bg-[#00ff88] text-slate-900 font-headline text-xs font-extrabold tracking-[0.15em] uppercase rounded-sm shadow-lg shadow-[#00ff88]/20"
          >
            Bulk Export Specialists
          </motion.div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white font-headline tracking-tighter mb-6 leading-[1.05]">
            Pristine <br/>Efficiency <br/><span className="text-blue-300">In Global Motion.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-xl font-medium leading-relaxed mb-8 md:mb-12">
            NovelSolutions specializes in the cross-border distribution of high-performance home cleaning products, ensuring every shipment arrives with clinical precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link to="/products" className="editorial-gradient text-white px-8 py-4 md:py-5 rounded-xl font-bold text-center text-lg shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)] transition-all hover:scale-105 active:scale-95 group">
              Explore Catalog
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 md:py-5 rounded-xl font-bold text-center text-lg hover:bg-white/20 transition-all">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Asymmetric Data Card Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="hidden xl:block absolute bottom-24 right-12 z-20 w-80 glass-panel p-7 rounded-3xl shadow-2xl border border-white/40"
      >
        <div className="flex justify-between items-start mb-6">
          <span className="material-symbols-outlined text-primary text-4xl">language</span>
          <span className="text-xs font-bold text-primary bg-tertiary-fixed/40 px-3 py-1.5 rounded-full">LIVE TRACK</span>
        </div>
        <div className="space-y-5">
          <div>
            <div className="text-[11px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Active Routes</div>
            <div className="text-3xl font-extrabold text-primary">1,422</div>
          </div>
          <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-primary/80"></div>
          </div>
          <div className="text-sm font-semibold text-secondary leading-relaxed">
            99.8% On-time delivery rate across EMEA and APAC regions.
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
