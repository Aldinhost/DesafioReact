import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
        
        <Routes>
        {/* 
          IMPORTANTE:
            Route necesita 2 props para funcionar
              path = "direccion de la ruta"
              element = "componente a renderizar"
         */}
          <Route path='/' element = {<h1>Landing Page</h1>} />
          <Route path='/post/:id' element = {<h1> Articulo  </h1>} />
          <Route path='/login/' element = {<h1> Login  </h1>} />
          <Route path='/create/' element = {<h1> Crear Post  </h1>} />
          
      </Routes>

    </div>
  );
}

export default App;
