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

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-8 bg-tertiary-fixed text-primary font-headline text-xs font-extrabold tracking-[0.15em] uppercase rounded-sm"
          >
            Bulk Export Specialists
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-6xl md:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-8"
          >
            Pristine Efficiency <br/>
            <span className="text-on-primary-container">In Global Motion.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/80 max-w-xl mb-12 leading-relaxed font-medium"
          >
            NovelSolutions specializes in the cross-border distribution of high-performance home cleaning products, ensuring every shipment arrives with clinical precision.
          </motion.p>
          
          <div className="flex flex-wrap gap-5">
            <Link to="/quote" className="editorial-gradient text-white px-10 py-5 rounded-xl font-bold shadow-2xl flex items-center gap-2 group transition-all hover:scale-105 active:scale-95">
              Start Your Shipment
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
            <button className="glass-panel text-primary px-10 py-5 rounded-xl font-bold border border-white/20 transition-all hover:bg-white">
              Our Capabilities
            </button>
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
