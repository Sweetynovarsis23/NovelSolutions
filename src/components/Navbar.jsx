import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const isNavSolid = isScrolled || !isHomePage || isMobileMenuOpen;

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    const base = "transition-all duration-300 font-headline font-bold tracking-tight border-b-2 pb-1";
    if (isActive) {
      if (!isNavSolid) return `${base} text-white border-white hover:border-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]`;
      return `${base} text-primary border-primary`;
    }
    if (isNavSolid) return `${base} text-secondary hover:text-primary border-transparent hover:border-primary/20`;
    return `${base} text-white/80 hover:text-white border-transparent hover:border-white/40 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]`;
  };

  const getMobileLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return `text-2xl font-headline font-bold transition-all ${
      isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
    }`;
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isNavSolid ? 'bg-white/95 backdrop-blur-md shadow-md h-20' : 'bg-transparent h-24'}`}>
        <div className="flex justify-between items-center px-6 md:px-8 h-full max-w-screen-2xl mx-auto w-full">
          <Link to="/" className={`text-2xl font-black tracking-tighter font-headline transition-all duration-300 ${isNavSolid ? 'text-primary' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'}`}>
            NovelSolutions
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={getLinkStyle('/')}>Home</Link>
            <Link to="/products" className={getLinkStyle('/products')}>Products</Link>
            <Link to="/services" className={getLinkStyle('/services')}>Services</Link>
            <Link to="/contact" className={getLinkStyle('/contact')}>Contact</Link>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden lg:block">
              <span className={`material-symbols-outlined align-middle cursor-pointer transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-secondary hover:text-primary' : 'text-white/70 hover:text-white'}`}>search</span>
            </div>
            
            {/* Get Quote - Hide on very small screens, keep on sm/md */}
            <Link to="/quote" className="hidden sm:flex editorial-gradient text-white px-5 py-2.5 md:px-7 md:py-3 rounded shadow-lg active:scale-95 hover:scale-105 duration-200 font-bold transition-all text-sm md:text-base items-center">
              Get Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden flex items-center justify-center p-2 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`material-symbols-outlined text-3xl transition-colors ${isNavSolid ? 'text-primary' : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'}`}>
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-28 px-8 flex flex-col md:hidden"
          >
            <div className="flex flex-col space-y-8 mt-10">
              <Link to="/" className={getMobileLinkStyle('/')}>Home</Link>
              <Link to="/products" className={getMobileLinkStyle('/products')}>Products</Link>
              <Link to="/services" className={getMobileLinkStyle('/services')}>Services</Link>
              <Link to="/contact" className={getMobileLinkStyle('/contact')}>Contact</Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col gap-6">
              <Link to="/quote" className="editorial-gradient text-white px-7 py-4 rounded-xl shadow-lg active:scale-95 duration-200 font-bold transition-all text-center text-lg">
                Get a Custom Quote
              </Link>
              <div className="flex justify-center gap-6 mt-4 opacity-70">
                <span className="material-symbols-outlined text-primary text-3xl">public</span>
                <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
                <span className="material-symbols-outlined text-primary text-3xl">science</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
