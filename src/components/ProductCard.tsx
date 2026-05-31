// src/components/ProductCard.tsx

import React, { useState } from 'react';

// EN: useState is imported from React — it is a Hook
// ES: useState se importa desde React — es un Hook
// EN: Hooks are special functions that add capabilities to functional components
// ES: Los Hooks son funciones especiales que añaden capacidades a los componentes funcionales

import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  // EN: useState returns an array of exactly two elements — we destructure them
  // ES: useState retorna un array de exactamente dos elementos — los desestructuramos
  //
  // EN: Element 1 — 'quantity' — the current value of the state variable
  // ES: Elemento 1 — 'quantity' — el valor actual de la variable de estado
  //
  // EN: Element 2 — 'setQuantity' — the ONLY way to update the state
  // ES: Elemento 2 — 'setQuantity' — la ÚNICA forma de actualizar el estado
  //
  // EN: 0 is the initial value — same as initializing int quantity = 0 in C#
  // ES: 0 es el valor inicial — igual que inicializar int quantity = 0 en C#
  const [quantity, setQuantity] = useState<number>(0);

  // EN: 'isAdded' tracks whether the user already clicked "Add to cart"
  // ES: 'isAdded' rastrea si el usuario ya hizo clic en "Add to cart"
  const [isAdded, setIsAdded] = useState<boolean>(false);

  // EN: This function runs when the user clicks the decrease button
  // ES: Esta función se ejecuta cuando el usuario hace clic en el botón de disminuir
  // EN: Math.max ensures quantity never goes below 1
  // ES: Math.max asegura que quantity nunca baje de 1
  const handleDecrease = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  // EN: This function runs when the user clicks the increase button
  // ES: Esta función se ejecuta cuando el usuario hace clic en el botón de aumentar
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // EN: This function runs when the user clicks "Add to cart"
  // ES: Esta función se ejecuta cuando el usuario hace clic en "Add to cart"
  // EN: In Module 11 this will dispatch to the global cart via Context API
  // ES: En el Módulo 11 esto enviará al carrito global vía Context API
  const handleAddToCart = () => {
    setIsAdded(true);

    // EN: Reset back to "Add to cart" after 2 seconds — good UX practice
    // ES: Volver a "Add to cart" después de 2 segundos — buena práctica de UX
    // EN: setTimeout is JavaScript's equivalent of Task.Delay in C#
    // ES: setTimeout es el equivalente en JavaScript a Task.Delay en C#
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="product-card">

      <h3>{product.name}</h3>
      <p className="product-price">£{product.price.toFixed(2)}</p>

      <span className="product-status">
        {product.isAvailable ? '✅ In stock' : '❌ Out of stock'}
      </span>

      {/* EN: Conditional rendering — only show controls if product is available */}
      {/* ES: Renderizado condicional — solo mostrar controles si el producto está disponible */}
      {/* EN: The && operator means "only render the right side if left side is true" */}
      {/* ES: El operador && significa "solo renderiza el lado derecho si el izquierdo es true" */}
      {product.isAvailable && (
        <div className="product-controls">

          {/* EN: Quantity counter */}
          {/* ES: Contador de cantidad */}
          <div className="quantity-control">

            {/* EN: onClick receives a function reference — never call it directly onClick={handleDecrease()} */}
            {/* ES: onClick recibe una referencia a función — nunca la llames directo onClick={handleDecrease()} */}
            <button
              className="qty-btn"
              onClick={handleDecrease}
            >
              −
            </button>

            {/* EN: quantity is a state variable — React re-renders this when it changes */}
            {/* ES: quantity es una variable de estado — React re-renderiza esto cuando cambia */}
            <span className="qty-value">{quantity}</span>

            <button
              className="qty-btn"
              onClick={handleIncrease}
            >
              +
            </button>

          </div>

          {/* EN: Add to cart button — changes text and disables itself while 'isAdded' is true */}
          {/* ES: Botón de agregar al carrito — cambia texto y se deshabilita mientras 'isAdded' es true */}
          <button
            className={`add-btn ${isAdded ? 'add-btn--added' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? '✅ Added!' : 'Add to cart'}
          </button>

        </div>
      )}

    </div>
  );
};

export default ProductCard;