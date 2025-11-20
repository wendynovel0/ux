import React from 'react';
import './App.css';
import logoEMW from'./assets/c11e5f44-4776-4d93-bd44-cc4b5ccb5bae.svg'
import { Search, Facebook, Youtube, Twitter, Instagram, Globe } from 'lucide-react';import imgProd1 from './assets/1a7953e1-19a0-4380-85e7-f6977e243ef6.png'
import imgProd2 from './assets/55de2da4-09dd-4a7d-bc1f-33dfd06f2271.png'
import imgProd3 from './assets/64bafcc5-493d-4149-ae02-1fdde1098dad.png'
import imgProd4 from './assets/7da44c53-0ed5-4118-8e91-01453464d4b7.png'
import imgProd5 from './assets/bc082269-92f8-4d39-878a-ed2ddf2763c7.png'
import imgProd6 from './assets/e6e506e7-fe71-442d-a88a-4184d5c31144.png'
import hedgehogImg from './assets/Erizo Musical.svg'; 

const products = [
  { id: 1, name: 'Victrola Clásico', price: '$1,227', image: imgProd1 },
  { id: 2, name: 'Kedok Tocadiscos', price: '$1,659', image: imgProd2 },
  { id: 3, name: 'Victrola Clásico', price: '$1,227', image: imgProd3 },
  { id: 4, name: 'Crosley', price: '$1,551', image: imgProd4 },
  { id: 5, name: 'JORLAI', price: '$1,873', image: imgProd5 },
  { id: 6, name: 'Crosley', price: '$1,643', image: imgProd6 },
];

const bestSellers = [
  { id: 1, img: 'https://m.media-amazon.com/images/I/61n2vSsWpFL._UF1000,1000_QL80_.jpg', size: 'big' },
  { id: 2,  img: 'https://m.media-amazon.com/images/I/81bOMm6FSjL._UF1000,1000_QL80_.jpg', size: 'normal' },
  { id: 3,  img: 'https://elsurco.ec/wp-content/uploads/2025/04/34154-300x300.jpg.webp', size: 'normal' },
  { id: 4,  img: 'https://m.media-amazon.com/images/I/A1Q6XGXmIFL.jpg', size: 'normal' },
  { id: 5,  img: 'https://m.media-amazon.com/images/I/71PN0lh-g9L._UF1000,1000_QL80_.jpg', size: 'normal' },
  { id: 6,  img: 'https://m.media-amazon.com/images/I/610YiLKkTKL._UF1000,1000_QL80_.jpg', size: 'big' },
  { id: 7, title: 'Justin Bieber', img: 'https://m.media-amazon.com/images/I/71CXHV8DFRL._UF1000,1000_QL80_.jpg', size: 'normal' },
  { id: 8, title: 'Lady Gaga', img: 'https://m.media-amazon.com/images/I/612EEsK+nFL._UF1000,1000_QL80_.jpg', size: 'wide' },
  { id: 9, title: 'Olivia Rodrigo', img: 'https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/602465045864.jpg', size: 'tall' },
  { id: 10, title: 'Katy Perry', img: 'https://www.musiclab.mx/cdn/shop/files/81f4brSLLqL._UF1000_1000_QL80.jpg?v=1706823977', size: 'normal' },
  { id: 11, title: 'Arctic Monkeys', img: 'https://m.media-amazon.com/images/I/619sk-bZaQL._UF1000,1000_QL80_.jpg', size: 'normal' },
  { id: 12, title: 'AC/DC', img: 'https://m.media-amazon.com/images/I/71s6glEqRyL._UF1000,1000_QL80_.jpg', size: 'normal' },
  { id: 13, title: 'Lana Del Rey', img: 'https://m.media-amazon.com/images/I/71tNTXwwWFL.jpg', size: 'big' },
  { id: 14, title: 'Shaggy', img: 'https://m.media-amazon.com/images/I/71+KUlo1tdL._UF1000,1000_QL80_.jpg', size: 'wide' },
  { id: 15, title: 'Paulo Londra', img: 'https://m.media-amazon.com/images/I/61+98ZXltKL._UF1000,1000_QL80_.jpg', size: 'normal' },
  { id: 16, title: 'Lorde', img: 'https://blackroom.boutique/wp-content/uploads/2024/01/1706042283.jpeg', size: 'normal' },
  { id: 17, title: 'The Beatles', img: 'https://m.media-amazon.com/images/I/91YlTtiGi0L.jpg', size: 'normal' },
  { id: 18, title: 'Kendrick Lamar', img: 'https://m.media-amazon.com/images/I/61MWIe1BzwL._UF1000,1000_QL80_.jpg', size: 'wide' },
  { id: 19, title: 'Alex Warren', img: 'https://www.baba.es/53844-large_default/alex-warren-you-ll-be-alright-kid-2-lp-vinilo-white.jpg', size: 'normal' },
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

        {/* BEST SELLERS (NUEVO) */}
        <div className="best-sellers-section">
          <div className="section-header">
            <h2>BEST SELLERS</h2>
          </div>
          
          <div className="collage-grid">
            {bestSellers.map((item) => (
              <div key={item.id} className={`collage-item ${item.size}`}>
                <img src={item.img} />
              </div>
            ))}
          </div>
        </div>

        {/* MONTHLY DEALS (PUERCOESPÍN) */}
        <div className="monthly-deals-section">
          <img src={hedgehogImg} alt="Hedgehog DJ" className="hedgehog-img" />
          
          <div className="deals-card">
            <h3>Monthly<br />Deals</h3>
          </div>
        </div>

        {/* FOOTER FINAL */}
        <footer className="main-footer">
          <div className="footer-socials">
            <Facebook className="social-icon" />
            <Youtube className="social-icon" />
            <Twitter className="social-icon" />
            {/* TikTok Icon Placeholder (Music icon) */}
            <div className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white', borderRadius: '50%', width: '24px', height: '24px', fontSize: '12px', fontWeight: 'bold' }}>Tk</div>
            <Instagram className="social-icon" />
          </div>

          <div className="footer-links">
            <a href="#">Privacy politics</a>
            <a href="#">Terms and conditions</a>
          </div>

          <div className="footer-right">
            <div className="lang-selector">
              English <Globe size={16} />
            </div>
            <img src={logoEMW} alt="Logo" className="footer-logo" />
          </div>
        </footer>

    </div>
    
  );
};

export default App;