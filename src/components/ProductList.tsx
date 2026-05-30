// src/components/ProductList.tsx

import React from 'react';

// EN: Import the shared Product type — same source of truth for every component
// ES: Importar el tipo Product compartido — misma fuente de verdad para cada componente
import type { Product } from '../types/product';
import ProductCard from './ProductCard';

// EN: ProductList receives an ARRAY of products — not just one
// ES: ProductList recibe un ARRAY de productos — no solo uno
// EN: Product[] means "an array where every element must be of type Product"
// ES: Product[] significa "un array donde cada elemento debe ser de tipo Product"
// EN: This is identical to List<Product> in C#
// ES: Esto es idéntico a List<Product> en C#
interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

  // EN: If the array is empty, show a message instead of an empty page
  // ES: Si el array está vacío, mostrar un mensaje en lugar de una página vacía
  // EN: This is called conditional rendering — we will go deep on this in Module 6
  // ES: Esto se llama renderizado condicional — profundizaremos en esto en el Módulo 6
  if (products.length === 0) {
    return <p className='messageError'><strong>No products available at the moment.</strong></p>;
  }

  return (
    <div className="product-list">

      {/* EN: .map() iterates the array and returns a ProductCard for each product  */}
      {/* ES: .map() itera el array y retorna un ProductCard por cada producto       */}
      {/* EN: This is identical to a foreach loop in C# but it returns JSX elements */}
      {/* ES: Es idéntico a un foreach en C# pero retorna elementos JSX              */}
      {/* EN: The 'key' prop is REQUIRED — React uses it to track each item          */}
      {/* ES: La prop 'key' es OBLIGATORIA — React la usa para rastrear cada item    */}
      {/* EN: Always use the database ID as key — never use the array index          */}
      {/* ES: Usa siempre el ID de base de datos como key — nunca el índice del array */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
};

export default ProductList;