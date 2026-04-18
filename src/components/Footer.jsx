import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-20 px-8 bg-slate-50 font-body text-sm tracking-wide">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-t border-slate-200 pt-16">
          <div className="space-y-8">
            <div className="text-2xl font-black text-primary font-headline tracking-tighter">NovelSolution</div>
            <p className="text-on-surface-variant font-medium leading-relaxed max-w-xs">
              Connecting quality home cleaning formulations with global consumers. Pristine efficiency in motion, from production to port.
            </p>
            <div className="flex gap-6">
              <span className="material-symbols-outlined text-secondary opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer text-2xl">public</span>
              <span className="material-symbols-outlined text-secondary opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer text-2xl">mail</span>
              <span className="material-symbols-outlined text-secondary opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer text-2xl">call</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-8 uppercase tracking-[0.2em] text-[11px]">Operations</h4>
            <ul className="space-y-5">
              <li><a className="text-on-surface-variant font-medium hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30" href="#">Sustainability</a></li>
              <li><a className="text-on-surface-variant font-medium hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30" href="#">Global Network</a></li>
              <li><a className="text-on-surface-variant font-medium hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30" href="#">Safety Data</a></li>
              <li><a className="text-on-surface-variant font-medium hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30" href="#">Logistics Tech</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-8 uppercase tracking-[0.2em] text-[11px]">Compliance</h4>
            <ul className="space-y-5">
              <li><a className="text-on-surface-variant font-medium hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30" href="#">Export Policy</a></li>
              <li><a className="text-on-surface-variant font-medium hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30" href="#">Terms of Service</a></li>
              <li><a className="text-on-surface-variant font-medium hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30" href="#">Privacy Guide</a></li>
              <li><a className="text-on-surface-variant font-medium hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30" href="#">ISO Certifications</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-8 uppercase tracking-[0.2em] text-[11px]">Stay Updated</h4>
            <p className="text-on-surface-variant mb-6 font-medium text-xs leading-relaxed">
              Sign up for global logistics shifts and chemical export compliance updates.
            </p>
            <div className="flex gap-2">
              <input 
                className="bg-surface-container border-none text-xs rounded-xl w-full px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all" 
                placeholder="Business Email" 
                type="email"
              />
              <button className="editorial-gradient text-white p-3 rounded-xl shadow-md transition-transform active:scale-90">
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-xs font-medium">© 2024 NovelSolution Logistics. Pristine Efficiency in Motion.</div>
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest border border-slate-200 px-3 py-1 rounded">
            Certified ISO 9001:2015 Logistics Operator
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
