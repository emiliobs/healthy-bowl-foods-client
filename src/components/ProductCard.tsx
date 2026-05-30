// src/components/ProductCard.tsx

import React from 'react';

// EN: We no longer define Product here — we import it from the shared types file
// ES: Ya no definimos Product aquí — lo importamos desde el archivo de tipos compartidos
// EN: This prevents having duplicate definitions across multiple files
// ES: Esto evita tener definiciones duplicadas en múltiples archivos
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="product-price">£{product.price.toFixed(2)}</p>
      <span className="product-status">
        {product.isAvailable ? 'In stock' : 'Out of stock'}
      </span>
    </div>
  );
};

export default ProductCard;