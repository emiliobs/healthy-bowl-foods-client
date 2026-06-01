// src/App.tsx

import React, { useState, useEffect } from 'react';
import type { Product } from './types/product';
import ProductList from './components/ProductList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { getProducts } from './services/productService';

const Header: React.FC = () => (
  <header className="store-header">
    <h1>Healthy Bowl Foods</h1>
    <p>Fresh &amp; natural products</p>
  </header>
);

const App: React.FC = () => {

  const [products,  setProducts]  = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error,     setError]     = useState<string | null>(null);

  // EN: retryCount is a numeric trigger — incrementing it re-runs the useEffect
  // ES: retryCount es un disparador numérico — incrementarlo vuelve a ejecutar el useEffect
  // EN: This is the standard React pattern for manual re-fetch without linter warnings
  // ES: Este es el patrón estándar de React para re-fetch manual sin warnings del linter
  const [retryCount, setRetryCount] = useState<number>(0);

  // EN: The retry button simply increments the counter — useEffect reacts to the change
  // ES: El botón retry simplemente incrementa el contador — useEffect reacciona al cambio
  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

  useEffect(() => {

    // EN: All setState calls live INSIDE useEffect — linter is satisfied
    // ES: Todas las llamadas setState viven DENTRO de useEffect — el linter queda satisfecho
    let isMounted = true;

    // EN: 'isMounted' prevents setState from being called if component unmounts
    // ES: 'isMounted' evita que setState se llame si el componente se desmonta
    // EN: This is defensive programming — avoids memory leaks
    // ES: Esto es programación defensiva — evita memory leaks
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getProducts();

        // EN: Only update state if component is still mounted
        // ES: Solo actualizar estado si el componente sigue montado
        if (isMounted) {
          setProducts(data);
        }
      } catch (err) {
        if (isMounted) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unexpected error occurred.');
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    // EN: Cleanup function — runs when component unmounts or before next effect
    // ES: Función de limpieza — se ejecuta cuando el componente se desmonta o antes del próximo efecto
    // EN: Equivalent to IDisposable.Dispose() in C#
    // ES: Equivalente a IDisposable.Dispose() en C#
    return () => {
      isMounted = false;
    };

  }, [retryCount]);
  // EN: retryCount in the dependency array — effect re-runs every time it changes
  // ES: retryCount en el array de dependencias — el efecto se re-ejecuta cada vez que cambia
  // EN: On mount retryCount = 0, so the effect runs once automatically
  // ES: Al montar retryCount = 0, entonces el efecto se ejecuta una vez automáticamente

  if (isLoading) {
    return (
      <div>
        <Header />
        <main><LoadingSpinner /></main>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <main>
          <ErrorMessage message={error} onRetry={handleRetry} />
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <h2 className="catalog-title">Our Products</h2>
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default App;