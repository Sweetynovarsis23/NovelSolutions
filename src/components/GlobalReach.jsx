import React from 'react';
import { motion } from 'framer-motion';

const GlobalReach = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col lg:flex-row gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="font-headline text-sm font-extrabold text-primary mb-6 tracking-[0.2em] flex items-center gap-3">
            <span className="w-12 h-0.5 bg-primary"></span> GLOBAL REACH
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-primary mb-8 leading-tight tracking-tighter">
            Your Gateway to 140+ International Markets
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 leading-relaxed font-medium">
            We don't just ship; we clear the way. Our deep expertise in customs brokerage for chemical products means your goods never sit idle at borders.
          </p>
          
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-on-primary-container/20 flex items-center justify-center rounded-2xl flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">public</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl font-bold text-primary mb-2">Strategic Hubs</h4>
                <p className="text-on-surface-variant font-medium">Located in Singapore, Rotterdam, and Houston for maximum logistical leverage.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-on-primary-container/20 flex items-center justify-center rounded-2xl flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">description</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl font-bold text-primary mb-2">Documentation Specialists</h4>
                <p className="text-on-surface-variant font-medium">Automated MSDS management and multi-lingual labeling compliance.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
            <img 
              className="w-full h-[600px] object-cover" 
              alt="Global shipping routes map"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1SQwMxQYC3Gef8h1RR_y4Pdyn0B5s51YyD_xfehBYVznDdb0p3qk_n6xhD7tsRtsGsH4enUxnC4QO2DoRlEUr28i0UydUUGj38IgjT92YbsbokLtihc__o20GLsx_M8Zr9-FFg1DcE0LsSgI9tfr486WKuJc0pXGfRLPoQg6hsjV8bXXmqBxcq5K37YKTg7e34dBR1-_yhRhugVBCIk5aYqeB9NgDd7JKgjwh_CQUwJGlt0pe_4XkLRepJtLD8JZobfzsDg8DEIPA"
            />
            <div className="absolute top-10 right-10 glass-panel px-6 py-4 rounded-3xl flex items-center gap-4 shadow-xl border border-white/50">
              <div className="w-4 h-4 bg-tertiary-fixed rounded-full animate-pulse shadow-[0_0_15px_rgba(152,249,148,0.8)]"></div>
              <span className="text-sm font-extrabold text-primary tracking-tight">Live Traffic Monitoring</span>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReach;
