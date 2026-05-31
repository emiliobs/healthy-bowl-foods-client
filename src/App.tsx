// src/App.tsx

import React, { useState, useEffect } from 'react';

// EN: useState manages the component's data, useEffect manages side effects
// ES: useState maneja los datos del componente, useEffect maneja los efectos secundarios

import type { Product } from './types/product';
import ProductList from './components/ProductList';
import { getProducts } from './services/productService';

const App: React.FC = () => {

  // EN: Three state variables — this is the standard pattern for any async data fetch
  // ES: Tres variables de estado — este es el patrón estándar para cualquier carga async
  //
  // EN: 1. The data itself — starts empty
  // ES: 1. Los datos en sí — empieza vacío
  const [products, setProducts] = useState<Product[]>([]);

  // EN: 2. Loading flag — starts true because we fetch immediately on mount
  // ES: 2. Flag de carga — empieza en true porque cargamos inmediatamente al montar
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // EN: 3. Error message — starts null meaning no error
  // ES: 3. Mensaje de error — empieza en null significando sin error
  const [error, setError] = useState<string | null>(null);

  // EN: useEffect with empty [] runs ONCE when the component mounts
  // ES: useEffect con [] vacío se ejecuta UNA VEZ cuando el componente se monta
  // EN: This is equivalent to code inside a constructor in C#
  // ES: Esto es equivalente al código dentro de un constructor en C#
  useEffect(() => {

    // EN: We define the async function INSIDE useEffect
    // ES: Definimos la función async DENTRO de useEffect
    // EN: useEffect itself cannot be async — this is a React rule
    // ES: useEffect en sí no puede ser async — esta es una regla de React
    const fetchProducts = async () => {

      // EN: Reset error state before each attempt
      // ES: Resetear el estado de error antes de cada intento
      setError(null);

      try {
        // EN: await the Promise — identical to await in C#
        // ES: await a la Promise — idéntico al await en C#
        // EN: getProducts() will become a real fetch() call in Module 7
        // ES: getProducts() se convertirá en una llamada fetch() real en el Módulo 7
        const data = await getProducts();

        // EN: Update state with the fetched data — triggers a re-render
        // ES: Actualizar estado con los datos obtenidos — dispara un re-render
        setProducts(data);

      } catch (err) {

        // EN: Defensive programming — same pattern as catch in C#
        // ES: Programación defensiva — mismo patrón que catch en C#
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred.');
        }

      } finally {

        // EN: Always stop the loading indicator — success or failure
        // ES: Siempre detener el indicador de carga — éxito o falla
        // EN: Identical to finally{} in C# — runs no matter what
        // ES: Idéntico a finally{} en C# — se ejecuta sin importar qué
        setIsLoading(false);
      }
    };

    // EN: Call the function immediately — this triggers the data fetch on mount
    // ES: Llamar la función inmediatamente — esto dispara la carga al montar
    fetchProducts();

  }, []); // EN: Empty array = run once on mount. NEVER omit this array here.
          // ES: Array vacío = ejecutar una vez al montar. NUNCA omitas este array aquí.

  // EN: RENDER LOGIC — three possible UI states, evaluated in order
  // ES: LÓGICA DE RENDER — tres posibles estados de UI, evaluados en orden

  // EN: State 1 — Still loading — show a spinner message
  // ES: Estado 1 — Aún cargando — mostrar mensaje de spinner
  if (isLoading) {
    return (
      <div>
        <header>
          <h1>Healthy Bowl Foods</h1>
          <p>Fresh &amp; natural products</p>
        </header>
        <main>
          <div className="loading-state">
            <p>⏳ Loading products from the API...</p>
          </div>
        </main>
      </div>
    );
  }

  // EN: State 2 — Error occurred — show error with retry button
  // ES: Estado 2 — Ocurrió un error — mostrar error con botón de reintento
  if (error) {
    return (
      <div>
        <header>
          <h1>Healthy Bowl Foods</h1>
          <p>Fresh &amp; natural products</p>
        </header>
        <main>
          <div className="error-state">
            <p>❌ {error}</p>
            {/* EN: Reloading the page retriggers useEffect — simple but effective */}
            {/* ES: Recargar la página vuelve a disparar useEffect — simple pero efectivo */}
            <button onClick={() => window.location.reload()}>
              🔄 Retry
            </button>
          </div>
        </main>
      </div>
    );
  }

  // EN: State 3 — Data loaded successfully — show the product list
  // ES: Estado 3 — Datos cargados exitosamente — mostrar la lista de productos
  return (
    <div>
      <header>
        <h1>Healthy Bowl Foods</h1>
        <p>Fresh &amp; natural products</p>
      </header>
      <main>
        <h2>Our Products</h2>
        {/* EN: ProductList receives the fetched products — same component, real data now */}
        {/* ES: ProductList recibe los productos cargados — mismo componente, datos reales ahora */}
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default App;