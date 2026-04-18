import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import terminalImg from '../assets/services/terminal.png';
import shippingImg from '../assets/services/shipping.png';
import warehouseImg from '../assets/services/warehouse.png';

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleConsultation = (e) => {
    e.preventDefault();
    navigate('/quote');
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden bg-surface pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-7">
            <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase mb-6 shadow-sm">
              GLOBAL OPERATIONS
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary font-headline tracking-tighter mb-8 leading-[1.05]">
              Pristine Efficiency <br/>In Every <span className="text-primary-container">Batch.</span>
            </h1>
            <p className="text-xl text-secondary max-w-xl font-medium leading-relaxed mb-10">
              Beyond transportation. We provide specialized handling for complex liquid supply chains, ensuring compliance, safety, and fluidity for your high-performance cleaning products at every terminal.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/quote" className="editorial-gradient text-white px-10 py-5 rounded-xl font-bold shadow-2xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group">
                Request a Proposal
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-surface-container-low rounded-full absolute -top-12 -right-12 w-full h-full -z-10 shadow-inner"></div>
            <img 
              src={terminalImg} 
              alt="Logistics Terminal" 
              className="rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,52,102,0.3)] object-cover w-full lg:h-[550px] -rotate-2 hover:rotate-0 transition-transform duration-700" 
            />
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-surface-container-low border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-primary font-headline mb-4 tracking-tight">Logistics Reimagined</h2>
            <p className="text-secondary font-medium max-w-2xl text-lg">
              Specialized solutions for essential home care cargo, from industrial strength floor cleaners to commercial hardware distribution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* International Freight */}
            <div className="md:col-span-2 group bg-white p-12 rounded-[2.5rem] shadow-xl shadow-blue-900/5 relative overflow-hidden flex flex-col justify-between min-h-[420px] transition-all hover:-translate-y-2 border border-slate-100">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl">public</span>
                </div>
                <h3 className="text-3xl font-bold text-primary font-headline mb-4 tracking-tight">International Freight</h3>
                <p className="text-secondary font-medium max-w-md leading-relaxed text-lg">
                  Multimodal transport solutions spanning sea, air, and land. We manage the complexity of global trade routes with real-time tracking and optimized routing for heavy-duty goods.
                </p>
              </div>
              <div className="mt-10 relative z-10">
                <ul className="flex flex-wrap gap-4 text-xs font-black tracking-widest text-primary uppercase">
                  <li className="bg-primary/5 px-4 py-2 rounded-lg border border-primary/10">Sea Freight</li>
                  <li className="bg-primary/5 px-4 py-2 rounded-lg border border-primary/10">Air Express</li>
                  <li className="bg-primary/5 px-4 py-2 rounded-lg border border-primary/10">Road Networks</li>
                </ul>
              </div>
              <img 
                src={shippingImg} 
                alt="Container Ship" 
                className="absolute top-0 right-0 w-3/5 h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700 [mask-image:linear-gradient(to_left,black_40%,transparent)]" 
              />
            </div>

            {/* Customs Clearance */}
            <div className="bg-primary p-12 rounded-[2.5rem] shadow-xl flex flex-col justify-between text-white relative overflow-hidden group hover:-translate-y-2 transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-[100%] transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur">
                  <span className="material-symbols-outlined text-white text-3xl">verified_user</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4 tracking-tight leading-snug">Customs Compliance</h3>
                <p className="text-blue-100 font-medium leading-relaxed">
                  Seamless regulatory navigation for chemical exports. Our experts handle all documentation to prevent delays.
                </p>
              </div>
              <Link to="/contact" className="mt-8 text-white font-bold flex items-center gap-2 group/link relative z-10">
                Learn More
                <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">chevron_right</span>
              </Link>
            </div>

            {/* Specialized Chemical Handling */}
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-blue-900/5 group hover:bg-slate-50 transition-colors duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">science</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4 tracking-tight text-primary">Chemical Handling</h3>
              <p className="text-secondary font-medium leading-relaxed">
                ISO-certified handling of concentrated cleaners and degreasers. Safe, robust transport containers.
              </p>
            </div>

            {/* Warehousing */}
            <div className="md:col-span-2 bg-white p-12 rounded-[2.5rem] shadow-xl shadow-blue-900/5 flex flex-col md:flex-row gap-10 items-center overflow-hidden border border-slate-100">
              <div className="flex-1">
                <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
                </div>
                <h3 className="text-3xl font-bold text-primary font-headline mb-4 tracking-tight">Smart Warehousing</h3>
                <p className="text-secondary font-medium leading-relaxed text-lg mb-6">
                  Strategically located global hubs equipped with WMS technology for real-time inventory visibility and pristine cleanliness standards, optimized for pallet density.
                </p>
              </div>
              <div className="flex-1 w-full h-64 rounded-2xl overflow-hidden relative shadow-inner">
                <img src={warehouseImg} alt="Warehouse interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form / CTA Section Integrated */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-surface-container-low rounded-[3rem] overflow-hidden shadow-xl shadow-blue-900/5 border border-slate-100 flex flex-col lg:flex-row">
            
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
              <h2 className="text-4xl font-extrabold text-primary font-headline mb-6 tracking-tight relative z-10">Request a Custom Solution</h2>
              <p className="text-secondary font-medium text-lg mb-10 leading-relaxed relative z-10">
                Tell us about your home care export challenges. Our logistics architects will design a framework optimized for your specific liquid payload and destination network.
              </p>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    <span className="material-symbols-outlined text-primary text-xl">support_agent</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg mb-1">Direct Consultation</p>
                    <p className="text-secondary text-sm font-medium">Speak with a dedicated export specialist within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    <span className="material-symbols-outlined text-primary text-xl">fact_check</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg mb-1">Compliance Guarantee</p>
                    <p className="text-secondary text-sm font-medium">Full ISO 9001:2015 regulatory audit included in proposal.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-12 lg:p-16 border-l border-slate-100">
              <form className="space-y-7" onSubmit={handleConsultation}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black tracking-widest text-secondary uppercase ml-1">Full Name</label>
                    <input type="text" placeholder="Jane Smith" className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium transition-shadow" required />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black tracking-widest text-secondary uppercase ml-1">Company</label>
                    <input type="text" placeholder="Nova Cleaners LLC" className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium transition-shadow" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-[10px] font-black tracking-widest text-secondary uppercase ml-1">Primary Service Requirement</label>
                  <select className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium text-slate-700 transition-shadow appearance-none cursor-pointer">
                    <option>International Sea Freight (Bulk)</option>
                    <option>Specialized Chemical Transit</option>
                    <option>Smart Climate Warehousing</option>
                    <option>Customs & Regulatory Audit</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-[10px] font-black tracking-widest text-secondary uppercase ml-1">Project Details</label>
                  <textarea rows="4" placeholder="Briefly describe your essential cleaning products volume and destination..." className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium transition-shadow resize-none" required></textarea>
                </div>
                
                <button type="submit" className="w-full editorial-gradient text-white py-5 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Request Detailed Proposal
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
