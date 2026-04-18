import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const productCategories = [
  { 
    title: 'Liquid Detergents', 
    icon: 'water_drop',
    description: 'High-concentration NOVEL surfactants and commercial cleaning fluids.' 
  },
  { 
    title: 'Hand Care', 
    icon: 'clean_hands',
    description: 'Bulk-packed 1L to 5L formulation for germ defence and hygiene.' 
  },
  { 
    title: 'Surface Care', 
    icon: 'cleaning_services',
    description: 'Disinfectants and specialized toilet cleaners for heavy duties.' 
  },
  { 
    title: 'Dish Care', 
    icon: 'local_florist',
    description: 'Lemon fresh grease-cutting liquids scaled for international distribution.' 
  }
];

const ProductGallery = () => {
  return (
    <section id="products" className="py-24 bg-surface-container-low px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-5xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight"
            >
              Product Expertise
            </motion.h2>
            <p className="text-on-surface-variant text-xl font-medium">
              We specialize in the high-volume export of diverse home cleaning categories, maintaining clinical purity and chemical stability throughout the transit.
            </p>
          </div>
          <Link to="/products" className="editorial-gradient text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 text-center">
            View All Products
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-2xl mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors">{product.icon}</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-4">{product.title}</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
