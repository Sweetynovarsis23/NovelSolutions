import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isNavSolid = isScrolled || !isHomePage;

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isNavSolid ? 'bg-white/90 backdrop-blur-md shadow-md h-20' : 'bg-transparent h-24'}`}>
      <div className="flex justify-between items-center px-8 h-full max-w-screen-2xl mx-auto w-full">
        <Link to="/" className={`text-2xl font-black tracking-tighter font-headline transition-all duration-300 ${isNavSolid ? 'text-primary' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'}`}>
          NovelSolution
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className={getLinkStyle('/')}>Home</Link>
          <Link to="/products" className={getLinkStyle('/products')}>Products</Link>
          <Link to="/services" className={getLinkStyle('/services')}>Services</Link>
          <Link to="/contact" className={getLinkStyle('/contact')}>Contact</Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block">
            <span className={`material-symbols-outlined align-middle cursor-pointer transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-secondary hover:text-primary' : 'text-white/70 hover:text-white'}`}>search</span>
          </div>
          <Link to="/quote" className="editorial-gradient text-white px-7 py-3 rounded shadow-lg active:scale-95 hover:scale-105 duration-200 font-bold transition-all">
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
