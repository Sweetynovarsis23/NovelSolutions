import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-surface px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-5xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight"
          >
            Standardizing Excellence
          </motion.h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto font-medium">
            We redefine chemical logistics through a commitment to purity, safety, and operational fluidity for home cleaning products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Feature: Safety Compliance */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white p-12 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group shadow-sm border border-slate-100"
          >
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-8">verified_user</span>
              <h3 className="font-headline text-4xl font-extrabold text-primary mb-6">Uncompromising Safety Compliance</h3>
              <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
                Our logistics chain adheres to the highest international standards for chemical transport, ensuring your cleaning formulations maintain their integrity from lab to shelf.
              </p>
            </div>
            <div className="mt-16 flex items-center gap-4 text-primary font-bold text-lg cursor-pointer group-hover:gap-6 transition-all">
              View Certifications <span className="material-symbols-outlined">chevron_right</span>
            </div>
            <div className="absolute -bottom-16 -right-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <span className="material-symbols-outlined text-[320px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
            </div>
          </motion.div>

          {/* Small Feature: Precision Handling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-12 rounded-[2.5rem] flex flex-col justify-between shadow-xl"
          >
            <div>
              <span className="material-symbols-outlined text-tertiary-fixed text-5xl mb-8">opacity</span>
              <h3 className="font-headline text-3xl font-extrabold mb-6">Precision Handling</h3>
              <p className="text-slate-300 text-lg">
                Custom temperature and pressure-controlled environments for sensitive liquid concentrates.
              </p>
            </div>
          </motion.div>

          {/* Small Feature: Smart Packaging */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-high p-12 rounded-[2.5rem] flex flex-col justify-between border border-slate-200"
          >
            <div>
              <span className="material-symbols-outlined text-primary text-5xl mb-8">inventory_2</span>
              <h3 className="font-headline text-3xl font-extrabold text-primary mb-6">Smart Packaging</h3>
              <p className="text-on-surface-variant text-lg">
                Sustainable, spill-proof packaging solutions designed specifically for global export routes.
              </p>
            </div>
          </motion.div>

          {/* Medium Feature: Direct Manufacturer Integration */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-surface-container-low p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-12 items-center overflow-hidden border border-slate-200"
          >
            <div className="flex-1">
              <h3 className="font-headline text-3xl font-extrabold text-primary mb-6">Direct Manufacturer Integration</h3>
              <p className="text-on-surface-variant text-lg mb-8 font-medium">
                Real-time inventory syncing between your production line and our global distribution network.
              </p>
              <div className="flex gap-6">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 min-w-[120px]">
                  <div className="text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-widest">Latency</div>
                  <div className="text-2xl font-black text-primary">0.4ms</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 min-w-[120px]">
                  <div className="text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-widest">Uptime</div>
                  <div className="text-2xl font-black text-primary">99.9%</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <img 
                className="rounded-3xl shadow-2xl w-full h-64 object-cover" 
                alt="High-tech container handling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1w2nh-7oJpxYhBD44jYB_qr8c2Lj5MppKMLSvOxLcsvXJyKGQ0peiK9uFK07yme8PCoPtTETnXVv7nhh0JxLNUSw4Xp4KbrpPx5OY_uUcmoktcbDU0kgEVXT-RHv8N2ackpQT-o2uVU189IsaVR2T5Q9PqS5FHqiMcIraBsMMPX-Y38Og2etNe9KEhfXmqCDrAO2DhHnMGFLfbNurT0M98_gCFAsntPDD2_yuVKzRR1Emu6oySEdx2p-Lq7V2X450Mh6qwWNfwNvn"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
