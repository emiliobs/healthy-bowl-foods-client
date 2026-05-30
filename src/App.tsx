// src/App.tsx

import React from 'react';

// EN: Importing a component works exactly like 'using' in C#
// ES: Importar un componente funciona exactamente como 'using' en C#
// EN: The path './components/ProductCard' tells React where the file is
// ES: La ruta './components/ProductCard' le dice a React dónde está el archivo
import ProductCard from './components/ProductCard';

const App: React.FC = () => {

  // EN: This is a hardcoded product object to test the component before connecting the API
  // ES: Este es un objeto de producto hardcodeado para probar el componente antes de conectar la API
  // EN: In Module 4 this data will come from your ASP.NET Core 10 API
  // ES: En el Módulo 4 estos datos vendrán de tu API de ASP.NET Core 10
  const testProduct = {
    id: 1,
    name: 'Organic Turmeric Root',
    price: 15.99,
    isAvailable: true,
  };

  return (
    <div>
      <header>
        <h1>Healthy Bowl Foods</h1>
        <p>Fresh &amp; natural products</p>
      </header>

      <main>
        <h2>Our Products</h2>

        {/* EN: Using ProductCard is like instantiating a C# class           */}
        {/* ES: Usar ProductCard es como instanciar una clase C#              */}
        {/* EN: We pass 'testProduct' as the 'product' prop                   */}
        {/* ES: Pasamos 'testProduct' como la prop 'product'                  */}
        {/* EN: product={testProduct} is how you pass data into a component   */}
        {/* ES: product={testProduct} es cómo pasas datos hacia un componente */}
        <ProductCard product={testProduct} />

      </main>
    </div>
  );
};

export default App;