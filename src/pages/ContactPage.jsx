import React from 'react';
import hqImg from '../assets/hq.png';

const ContactPage = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted successfully. A specialist will be in touch.");
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* Header Section */}
      <section className="pt-40 pb-20 px-8 max-w-screen-2xl mx-auto flex flex-col items-center text-center">
        <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase mb-6 shadow-sm">
          24/7 SUPPORT NETWORK
        </span>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary mb-6 tracking-tight">
          Global <span className="text-primary-container">Connectivity.</span>
        </h1>
        <p className="text-secondary max-w-2xl font-medium text-lg leading-relaxed">
          Whether you need a dedicated chemical logistics architect or immediate support for an active shipment, our global response team is available around the clock.
        </p>
      </section>

      {/* Main Grid: Details + Form */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-32">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Details & Image Column */}
          <div className="lg:w-5/12 flex flex-col gap-10">
            {/* HQ Visual */}
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative h-80">
              <img src={hqImg} alt="NovelSolution Corporate Headquarters" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-8">
                <div className="text-white text-[10px] font-black tracking-widest uppercase mb-1 opacity-80">MAIN HUB</div>
                <h3 className="text-white font-bold text-xl font-headline">Houston Terminal HQ</h3>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="bg-primary rounded-[2.5rem] p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <span className="material-symbols-outlined">apartment</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-200 tracking-widest uppercase mb-1">Global Headquarters</p>
                    <p className="font-medium text-lg">422 Logistics Way, Suite 100</p>
                    <p className="text-blue-100 text-sm">Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <span className="material-symbols-outlined">phone_in_talk</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-200 tracking-widest uppercase mb-1">Direct Lines</p>
                    <p className="font-medium text-lg">+1 (800) 555-CHEM</p>
                    <p className="text-blue-100 text-sm">Mon-Fri: 24h Operating</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-200 tracking-widest uppercase mb-1">Business Inquiries</p>
                    <p className="font-medium text-lg">solutions@novelsolution.com</p>
                    <p className="text-blue-100 text-sm">Target response time: 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-7/12 bg-white rounded-[3rem] p-12 lg:p-16 shadow-xl shadow-blue-900/5 border border-slate-100">
            <h2 className="text-3xl font-extrabold text-primary font-headline mb-4 tracking-tight">Connect with Us</h2>
            <p className="text-secondary font-medium mb-10 leading-relaxed">
              Have a general inquiry, partnership request, or need immediate compliance assistance? Submit your details below and the appropriate department will respond.
            </p>

            <form className="space-y-7" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black tracking-widest text-secondary uppercase ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium transition-shadow" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black tracking-widest text-secondary uppercase ml-1">Business Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium transition-shadow" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black tracking-widest text-secondary uppercase ml-1">Company / Organization</label>
                <input type="text" placeholder="Global Retailers Ltd" className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium transition-shadow" />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black tracking-widest text-secondary uppercase ml-1">Inquiry Type</label>
                <select className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium text-slate-700 transition-shadow appearance-none cursor-pointer">
                  <option>General Support</option>
                  <option>Sales & Partnerships</option>
                  <option>Vendor Relations</option>
                  <option>Compliance Assistance</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black tracking-widest text-secondary uppercase ml-1">Message</label>
                <textarea rows="5" placeholder="How can our logistics network assist you today?" className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-medium transition-shadow resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-3">
                Send Message
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
