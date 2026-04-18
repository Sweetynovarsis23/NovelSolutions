import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import globalNetworkImg from '../assets/global_network.png';

const countries = ['United States', 'United Kingdom', 'Germany', 'France', 'Netherlands', 'Singapore', 'Japan', 'United Arab Emirates', 'Saudi Arabia', 'Australia', 'Canada', 'India', 'Brazil'];
const cargoTypes = ['Standard Liquid Freight', 'Hazardous Chemicals (Class 8)', 'Food-Grade Solutions', 'Temperature Controlled', 'Bio-Hazardous Material'];

const QuotePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    cargoType: 'Standard Liquid Freight',
    priority: 'Standard',
    volume: '',
    frequency: 'One-time',
    email: '',
    company: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const updateForm = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* Header Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8 max-w-screen-2xl mx-auto flex flex-col items-center text-center">
        <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase mb-6 shadow-sm">
          Global Logistics Solutions
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">Global Logistics Quote</h1>
        <p className="text-on-surface-variant text-lg font-medium max-w-2xl leading-relaxed">
          Secure precision-engineered transport for your high-value assets and sensitive chemicals with our tailored logistics solutions.
        </p>
      </section>

      {/* Quote Container */}
      <section className="px-6 md:px-8 max-w-screen-2xl mx-auto mb-32 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Form Area */}
          <div className="lg:col-span-8 flex flex-col relative w-full">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/5 rounded-[3rem] -rotate-1 scale-105 -z-10 blur-xl"></div>
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl p-6 md:p-12 border border-slate-100 w-full">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between relative max-w-2xl mx-auto mb-12">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-high -translate-y-1/2 -z-10"></div>
                {[1, 2, 3].map(num => (
                  <div key={num} className="flex flex-col items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-headline transition-all duration-300 ${step >= num ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant'}`}>
                      {num}
                    </div>
                    <div className={`text-[10px] font-black uppercase tracking-widest ${step >= num ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {num === 1 ? 'Shipment' : num === 2 ? 'Volume' : 'Contact'}
                    </div>
                  </div>
                ))}
              </div>

              {/* Form Content */}
              <div className="bg-white rounded-[2.5rem] md:p-12 shadow-xl shadow-blue-900/5 transition-all min-h-[500px] flex flex-col">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10 flex-1 p-6 md:p-0"
                    >
                      <h2 className="font-headline text-2xl font-bold text-primary">Step 1: Shipment Origin & Destination</h2>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-widest text-secondary ml-1">Origin Country</label>
                          <select 
                            value={formData.origin}
                            onChange={(e) => updateForm('origin', e.target.value)}
                            className="w-full bg-surface-container-low border-none rounded-xl p-4 font-medium focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                          >
                            <option value="">Select Country</option>
                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-widest text-secondary ml-1">Destination Country</label>
                          <select 
                            value={formData.destination}
                            onChange={(e) => updateForm('destination', e.target.value)}
                            className="w-full bg-surface-container-low border-none rounded-xl p-4 font-medium focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                          >
                            <option value="">Select Country</option>
                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-widest text-secondary ml-1">Cargo Type</label>
                          <select 
                            value={formData.cargoType}
                            onChange={(e) => updateForm('cargoType', e.target.value)}
                            className="w-full bg-surface-container-low border-none rounded-xl p-4 font-medium focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                          >
                            {cargoTypes.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-widest text-secondary ml-1">Priority Level</label>
                          <div className="flex bg-surface-container-low p-1.5 rounded-xl gap-2">
                            {['Express', 'Standard'].map(p => (
                              <button 
                                key={p}
                                onClick={() => updateForm('priority', p)}
                                className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${formData.priority === p ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                              >
                                {p}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10 flex-1 p-6 md:p-0"
                    >
                      <h2 className="font-headline text-2xl font-bold text-primary">Step 2: Volume & Frequency</h2>
                      
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-widest text-secondary ml-1">Monthly Volume (m³)</label>
                        <input 
                          type="number" 
                          placeholder="e.g. 5000"
                          value={formData.volume}
                          onChange={(e) => updateForm('volume', e.target.value)}
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 font-medium focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-widest text-secondary ml-1">Shipment Frequency</label>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {['One-time', 'Weekly', 'Bi-weekly', 'Monthly'].map(freq => (
                            <button 
                              key={freq}
                              onClick={() => updateForm('frequency', freq)}
                              className={`p-4 rounded-xl text-sm font-bold border-2 transition-all ${formData.frequency === freq ? 'bg-primary/5 border-primary text-primary' : 'bg-transparent border-surface-container-high text-on-surface-variant hover:border-primary/20'}`}
                            >
                              {freq}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10 flex-1 p-6 md:p-0"
                    >
                      <h2 className="font-headline text-2xl font-bold text-primary">Step 3: Business Contact Details</h2>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-widest text-secondary ml-1">Full Name</label>
                          <input 
                            type="text" 
                            placeholder="John Doe"
                            className="w-full bg-surface-container-low border-none rounded-xl p-4 font-medium focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-widest text-secondary ml-1">Business Email</label>
                          <input 
                            type="email" 
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => updateForm('email', e.target.value)}
                            className="w-full bg-surface-container-low border-none rounded-xl p-4 font-medium focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-widest text-secondary ml-1">Company Name</label>
                        <input 
                          type="text" 
                          placeholder="NovelSolutions Global"
                          value={formData.company}
                          onChange={(e) => updateForm('company', e.target.value)}
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 font-medium focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4 pt-10 border-t border-slate-100 p-6 md:p-0">
                  {step > 1 ? (
                    <button 
                      onClick={prevStep}
                      className="px-10 py-4 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <span className="material-symbols-outlined">west</span> Back
                    </button>
                  ) : <div className="hidden sm:block" />}
                  
                  <button 
                    onClick={step === 3 ? () => alert("Quote Submitted!") : nextStep}
                    disabled={step === 1 && (!formData.origin || !formData.destination)}
                    className={`px-12 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all w-full sm:w-auto ${step === 1 && (!formData.origin || !formData.destination) ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'editorial-gradient text-white shadow-lg shadow-primary/20 active:scale-95'}`}
                  >
                    {step === 3 ? 'Generate Quote' : 'Next Step'}
                    <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Space */}
          <div className="lg:col-span-4 space-y-8 w-full mt-12 lg:mt-0">
            
            {/* NovelSolutions Standard Card */}
            <div className="bg-primary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <h3 className="font-headline text-2xl font-bold mb-8">The NovelSolutions Standard</h3>
              <div className="space-y-6">
                {[
                  { title: 'ISO 9001:2015 CERTIFIED', desc: 'Strict adherence to international quality management systems.' },
                  { title: 'REACH COMPLIANCE', desc: 'Fully compliant with EU regulations on chemicals and safe usage.' },
                  { title: 'REAL-TIME TELEMETRY', desc: '24/7 GPS and environmental monitoring at every mile.' }
                ].map(item => (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-xl">verified_user</span>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black tracking-widest uppercase mb-1">{item.title}</h4>
                      <p className="text-xs text-on-primary-container leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Network Card */}
            <div className="relative rounded-[3rem] overflow-hidden group shadow-xl h-64 flex items-end">
              <img src={globalNetworkImg} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Warehouse operations" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
              <div className="relative p-8 z-10 w-full">
                <div className="text-[10px] font-black text-on-primary-container uppercase tracking-widest mb-2 opacity-80">GLOBAL NETWORK</div>
                <h4 className="font-headline text-2xl font-bold text-white leading-tight">Precision Operations in 140+ Countries</h4>
              </div>
            </div>

            {/* Help Box */}
            <div className="bg-surface-container-low p-10 rounded-[3rem] text-center border border-slate-100">
              <h4 className="font-bold text-primary text-lg mb-2">Need immediate help?</h4>
              <p className="text-secondary text-sm font-medium mb-8">Our chemical logistics experts are available for live consultation.</p>
              <button className="w-full bg-white border border-slate-200 text-primary py-4 rounded-xl font-bold shadow-sm hover:shadow-md transition-all active:scale-95">
                Speak with a Specialist
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default QuotePage;
