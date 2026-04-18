import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Product Imagery
import toiletCleanerImg from '../assets/products/novel_toilet_cleaner.png';
import handwashImg from '../assets/products/kitchen_degreaser.png'; // Using placeholder
import handwashBulkImg from '../assets/products/floor_cleaner.png'; // Using placeholder
import dishwashImg from '../assets/products/dish_soap.png'; // Using placeholder

const products = [
  {
    id: 1,
    name: 'Novel Toilet Cleaner',
    ref: '5 Ltr Can',
    description: 'Kills 99.9% Germs - 10X Cleaning Action',
    category: 'Cleaning Liquids',
    price: '₹ 199 /Can',
    image: toiletCleanerImg,
    badge: 'BEST SELLER',
    subBadge: 'BULK CAN',
    features: ['REMOVES LIMESCALE', 'DEEP CLEANING'],
    icons: ['sanitizer', 'bolt']
  },
  {
    id: 2,
    name: 'Novel Fresh Handwash (1L)',
    ref: '1 Ltr Bottle',
    description: 'Germ Defence Liquid Handwash',
    category: 'Hand Care',
    price: '₹ 53 /Btl',
    image: handwashImg,
    badge: 'FRESHNESS',
    subBadge: 'SKIN SAFE',
    features: ['100% SURE', 'GERM DEFENCE'],
    icons: ['clean_hands', 'shield']
  },
  {
    id: 3,
    name: 'Novel Fresh Handwash (5L)',
    ref: '5 Ltr Can',
    description: 'Bulk Germ Defence Handwash',
    category: 'Hand Care',
    price: '₹ 221 /Can',
    image: handwashBulkImg,
    badge: 'BULK SAVINGS',
    subBadge: 'EXPORT',
    features: ['HIGH VOLUME', 'COST EFFECTIVE'],
    icons: ['inventory_2', 'payments']
  },
  {
    id: 4,
    name: 'Novel Dishwashing Liquid',
    ref: '250 Ml Bottle',
    description: 'Lemon Fresh Cleaning Power',
    category: 'Dish Care',
    price: '₹ 26 /Btl',
    image: dishwashImg,
    badge: 'LEMON POWER',
    subBadge: '',
    features: ['GREASE CUTTER', 'LEMON SCENT'],
    icons: ['local_florist', 'sparkles']
  }
];

const ProductsPage = () => {
  const [filter, setFilter] = useState('All Products');

  const filteredProducts = filter === 'All Products' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8 max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="max-w-3xl">
          <div className="text-sm font-extrabold text-primary tracking-[0.2em] mb-6 uppercase opacity-70">
            NOVEL SOLUTION PRODUCT LINE
          </div>
          <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl font-extrabold text-primary leading-[1.05] tracking-tighter mb-8 md:mb-10">
            Professional <br/> Performance.
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl font-medium">
            Setting the global standard for essential home cleaning. Our high-performance NOVEL formulations are engineered for maximum efficiency in every batch.
          </p>
        </div>

        {/* Feature Cards Stack */}
        <div className="bg-surface-container-low p-10 rounded-[2.5rem] border border-slate-100 shadow-sm max-w-md w-full">
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">precision_manufacturing</span>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1 text-lg">Industrial Strength</h4>
                <p className="text-secondary text-sm font-medium leading-relaxed">Concentrated formulas for the most demanding environments.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">conveyor_belt</span>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1 text-lg">Export Scalability</h4>
                <p className="text-secondary text-sm font-medium leading-relaxed">Optimized packaging for B2B wholesale logistics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 md:px-8 max-w-screen-2xl mx-auto mb-12 md:mb-16 border-b border-slate-100 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
            {['All Products', 'Cleaning Liquids', 'Hand Care', 'Dish Care'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-6 text-on-surface-variant">
            <div className="flex gap-2">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">grid_view</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors opacity-40">view_list</span>
            </div>
            <div className="text-[11px] font-extrabold uppercase tracking-widest flex items-center gap-2">
              SORT: RELEVANCY <span className="material-symbols-outlined text-xs">expand_more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="bg-surface-container-low rounded-[3rem] p-8 mb-6 relative overflow-hidden aspect-square flex items-center justify-center transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100 shadow-sm">
                  <img src={product.image} className="w-4/5 h-auto object-contain transition-transform duration-500 group-hover:scale-110" alt={product.name} />
                  
                  {/* Badge Layout */}
                  <div className="absolute top-6 left-6 space-y-2">
                    <div className="px-5 py-1.5 bg-white/90 backdrop-blur rounded-full text-[10px] font-black text-primary border border-slate-200 uppercase tracking-widest shadow-sm">
                      {product.badge}
                    </div>
                    {product.subBadge && (
                      <div className="px-5 py-1.5 bg-primary rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-primary/20">
                        {product.subBadge}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between items-start px-2">
                  <div>
                    <h3 className="font-headline text-xl font-extrabold text-primary mb-1 transition-colors uppercase tracking-tight">{product.name}</h3>
                    <div className="text-secondary text-xs font-medium mb-4 flex items-center gap-2">
                      <span className="opacity-80 font-bold">{product.ref}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span>{product.description}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {product.features.map((feat, i) => (
                        <div key={feat} className="flex items-center gap-1 text-[9px] font-extrabold text-on-surface-variant uppercase tracking-widest opacity-80 bg-slate-100 px-2 py-1 rounded">
                          <span className="material-symbols-outlined text-xs font-normal text-primary">{product.icons[i]}</span>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full mt-auto flex justify-between items-end border-t border-slate-100 pt-4">
                    <div className="font-headline font-black text-2xl text-slate-800 tracking-tight">
                        {product.price}
                    </div>
                    <Link to="/contact" className="bg-[#0066cc] hover:bg-[#004e9c] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-md active:scale-95">
                        Get Best Price
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Corporate Efficiency Section */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <h3 className="font-headline text-3xl font-extrabold mb-6 leading-tight">Export Integrity</h3>
            <p className="text-on-primary-container text-sm font-medium leading-relaxed mb-12 opacitiy-90">
              Precision-graded NOVEL formulations designed for high-volume transcontinental export. We manage the chemical complexity so your retail chain remains consistently stocked.
            </p>
            <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 inline-block">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-60">CERTIFICATION</div>
              <div className="text-sm font-bold">Standardized Professional Strength</div>
            </div>
            {/* Texture */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          </div>

          <div className="bg-surface-container-low rounded-[3rem] p-12 border border-slate-100">
            <h3 className="font-headline text-2xl font-extrabold text-primary mb-6">Bulk & Wholesale</h3>
            <p className="text-secondary text-sm font-medium leading-relaxed">
              Fulfillment across India and Global Networks. Our products are packaged in durable materials designed for transit safety and warehouse stacking.
            </p>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined text-slate-200 text-6xl opacity-40">inventory_2</span>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-[3rem] p-12 border border-slate-100">
            <h3 className="font-headline text-2xl font-extrabold text-primary mb-6">Volume Optimization</h3>
            <p className="text-secondary text-sm font-medium leading-relaxed">
              Each product is calibrated for pallet density, reducing shipping costs and carbon footprints across global distribution operations.
            </p>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined text-slate-200 text-6xl opacity-40">local_shipping</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
