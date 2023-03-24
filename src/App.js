import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <main className="App">
        <Routes>
        {/* 
          IMPORTANTE:
            Route necesita 2 props para funcionar
              path = "direccion de la ruta"
              element = "componente a renderizar"
         */}
          <Route path='/' element = {<LandingPage />} />
          <Route path='/post/:id' element = {<h1> Articulo  </h1>} />
          <Route path='/login/' element = {<h1> Login  </h1>} />
          <Route path='/create/' element = {<h1> Crear Post  </h1>} />
          
      </Routes>
    </main>
  );
}

export default App;
