// src/App.tsx

import React from 'react';
import type { Product } from './types/product';
import ProductList from './components/ProductList';

const App: React.FC = () => {

  const products: Product[] =[
    { id:1, name: 'Organic Tumeric Root', price: 15.99, isAvailable: true},
    { id: 2, name: 'Fresh Ginger Root', price: 12.59, isAvailable: true},
    { id: 3, name: 'Dried Chia Seeds', price:55.55, isAvailable:false}
  ];

  return (
    <div>
      <header>
        <h1>Healthy Bowl Foods</h1>
        <p>Fresh &amp; natural products</p>
      </header>

      <main>
        <h2>Our Products</h2>

        <ProductList products={products}></ProductList>
      </main>
    </div>
  );
};

export default App;