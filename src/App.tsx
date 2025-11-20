import React from 'react';
import './App.css';
import logoEMW from'./assets/c11e5f44-4776-4d93-bd44-cc4b5ccb5bae.svg'
import { Search } from 'lucide-react'; // Asegúrate de instalar: npm install lucide-react
import imgProd1 from './assets/1a7953e1-19a0-4380-85e7-f6977e243ef6.png'
import imgProd2 from './assets/55de2da4-09dd-4a7d-bc1f-33dfd06f2271.png'
import imgProd3 from './assets/64bafcc5-493d-4149-ae02-1fdde1098dad.png'
import imgProd4 from './assets/7da44c53-0ed5-4118-8e91-01453464d4b7.png'
import imgProd5 from './assets/bc082269-92f8-4d39-878a-ed2ddf2763c7.png'
import imgProd6 from './assets/e6e506e7-fe71-442d-a88a-4184d5c31144.png'

const products = [
  { id: 1, name: 'Victrola Clásico', price: '$1,227', image: imgProd1 },
  { id: 2, name: 'Kedok Tocadiscos', price: '$1,659', image: imgProd2 },
  { id: 3, name: 'Victrola Clásico', price: '$1,227', image: imgProd3 },
  { id: 4, name: 'Crosley', price: '$1,551', image: imgProd4 },
  { id: 5, name: 'JORLAI', price: '$1,873', image: imgProd5 },
  { id: 6, name: 'Crosley', price: '$1,643', image: imgProd6 },
];

const App = () => {
  return (
    <div className="app-wraper">
    <div className="container">
      
      {/* Capa de franjas diagonales (Overlay) */}
      <div className="stripes-container">
        <div className="stripe teal"></div>
        <div className="stripe red"></div>
        <div className="stripe yellow"></div>
        <div className="stripe tan"></div>
      </div>

      {/* Lado Izquierdo (Contenido) */}
      <div className="left-side">
        <header>
          <img src={logoEMW} alt="EMW Logo" className="logo" />
          <nav>
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">Catalogue</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </nav>
        </header>

        <div className="hero-content">
          <h1>
            Lorem Ipsum<br />
            Maximus Lorem
          </h1>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* Lado Derecho (Visual) */}
      <div className="right-side">
        <div className="top-right-icons">
          <Search className="search-icon" />
        </div>

        {/* Disco de vinilo (Dibujado con CSS para evitar imágenes externas) */}
        <div className="vinyl-record"></div>

        <div className="vertical-text">
          All Type of Music
        </div>
      </div>

      {/* Barra inferior marrón */}
      <div className="footer-bar"></div>

    </div>

    {/* --- SECCIÓN NEW ARRIVALS --- */}
        <div className="new-arrivals-section">
          <div className="section-header">
            <h2>New Arrivals</h2>
            <div className="section-underline"></div>
          </div>

          <div className="products-grid">
            {products.map((prod) => (
              <div key={prod.id} className="product-card">
                {/* Caja con efecto Vidrio */}
                <div className="glass-card">
                  <img src={prod.image} alt={prod.name} />
                </div>
                
                {/* Información debajo */}
                <div className="card-info">
                  <div className="card-text">
                    <h3>{prod.name}</h3>
                    <span className="price">{prod.price}</span>
                  </div>
                  <button className="btn-see">SEE</button>
                </div>
              </div>
            ))}
          </div>
        </div>

    </div>
    
  );
};

export default App;