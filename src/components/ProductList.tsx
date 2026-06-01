// src/components/ProductList.tsx

import React from 'react';
import type { Product } from '../types/product';
import ProductCard from './ProductCard';
import EmptyState from './EmptyState';


interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

  
  if (products.length === 0) {
    return <EmptyState></EmptyState>;
  }

  return (
    <div className="product-list">
     
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
};

export default ProductList;