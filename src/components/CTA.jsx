import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-screen-2xl mx-auto editorial-gradient rounded-[3.5rem] p-16 md:p-28 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter">
            Ready to Streamline <br className="hidden md:block" /> Your Exports?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-14 text-xl font-medium opacity-90 leading-relaxed">
            Get a custom logistics quote tailored to your specific cleaning product volume and global destination requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/quote" className="bg-white text-primary px-12 py-5 rounded-xl font-bold font-headline text-lg shadow-xl hover:scale-105 active:scale-95 transition-all">
              Get a Logistics Quote
            </Link>
            <button className="border border-white/30 text-white px-12 py-5 rounded-xl font-bold font-headline text-lg hover:bg-white/10 transition-all">
              Talk to an Expert
            </button>
          </div>
        </div>
        
        {/* Background visual texture */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>
    </section>
  );
};

export default CTA;
