// src/App.tsx

// EN: React must be imported to use JSX syntax in every component file
// ES: React debe importarse para usar sintaxis JSX en cada archivo de componente
import React from 'react';

// EN: React.FC is the TypeScript type for a Functional Component — always use it
// ES: React.FC es el tipo TypeScript para un Componente Funcional — úsalo siempre
const App: React.FC = () => {

  // EN: JSX looks like HTML but it is JavaScript under the hood
  // ES: JSX parece HTML pero es JavaScript por debajo
  // EN: A component must always return ONE single root element
  // ES: Un componente siempre debe retornar UN solo elemento raíz
  return (
    <div>

      <header>
        {/* EN: In JSX we use className instead of class — class is reserved in JavaScript */}
        {/* ES: En JSX usamos className en vez de class — class es reservada en JavaScript */}
        <h1>Healthy Bowl Foods</h1>
        <p>Fresh &amp; natural products</p>
      </header>

      <main>
        <h2>Welcome to our marketplace</h2>
        {/* EN: This placeholder will be replaced by real components in Module 2 */}
        {/* ES: Este placeholder será reemplazado por componentes reales en el Módulo 2 */}
        <p>Products will load here from ASP.NET Core 10 API...</p>
      </main>

    </div>
  );
};

// EN: export default makes this component available for other files to import
// ES: export default hace que este componente esté disponible para que otros archivos lo importen
export default App;