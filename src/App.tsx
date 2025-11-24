import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Search, Facebook, Youtube, Twitter, Instagram, Globe, 
  ArrowLeft, Heart, Disc, Mic2, Radio, ArrowRight, ChevronRight, 
  Plus, Mail, Phone
} from 'lucide-react';
import type { LucideIcon as LucideIconType } from 'lucide-react';
import './App.css';
import logoEMW from'./assets/c11e5f44-4776-4d93-bd44-cc4b5ccb5bae.svg'
import imgProd1 from './assets/1a7953e1-19a0-4380-85e7-f6977e243ef6.png'
import imgProd2 from './assets/55de2da4-09dd-4a7d-bc1f-33dfd06f2271.png'
import imgProd3 from './assets/64bafcc5-493d-4149-ae02-1fdde1098dad.png'
import imgProd4 from './assets/7da44c53-0ed5-4118-8e91-01453464d4b7.png'
import imgProd5 from './assets/bc082269-92f8-4d39-878a-ed2ddf2763c7.png'
import imgProd6 from './assets/e6e506e7-fe71-442d-a88a-4184d5c31144.png'
import './DomeGallery.css';
import DomeGallery from './DomeGallery';
import TextType from './TextType';


// --- PLACEHOLDERS ---
const studioImg = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"; 
const vinylImg = "https://images.unsplash.com/photo-1603048588665-791ca8deb5e7?q=80&w=1000&auto=format&fit=crop";

// --- TIPOS ---

interface VinylProduct {
  id: number;
  title: string;
  img: string;
  price: string;
}
interface Product {
  id: number;
  name?: string;
  title?: string;
  price: string;
  image?: string;
  img?: string;
  description?: string;
  size: 'big' | 'normal' | 'small';
}

interface ViewProps {
  navigateTo: (view: string) => void;
  onProductSelect?: (product: Product) => void;
}

interface BentoItemProps {
  title: string;
  value: string;
  icon?: LucideIconType; 
  delay?: number;
  className?: string;
}

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

// --- DATOS ---
const products = [
  { id: 1, name: 'Victrola Clásico', price: '$1,227', image: imgProd1, description: 'El clásico moderno. Sonido cálido y diseño atemporal.' },
  { id: 2, name: 'Kedok Tocadiscos', price: '$1,659', image: imgProd2, description: 'Acabado en madera premium con altavoces estéreo integrados.' },
  { id: 3, name: 'Victrola Clásico', price: '$1,227', image: imgProd3, description: 'Edición especial en negro mate. Elegancia pura.' },
  { id: 4, name: 'Crosley', price: '$1,551', image: imgProd4, description: 'Portabilidad y estilo. El compañero perfecto de viaje.' },
  { id: 5, name: 'JORLAI', price: '$1,873', image: imgProd5, description: 'Diseño retro rosa con tecnología Bluetooth moderna.' },
  { id: 6, name: 'Crosley', price: '$1,643', image: imgProd6, description: 'La opción robusta para el coleccionista serio.' },
];

const bestSellers: VinylProduct[] = [
    { id: 1, title: 'Ray Charles', img: 'https://m.media-amazon.com/images/I/61n2vSsWpFL._UF1000,1000_QL80_.jpg', price: '$850' },
    { id: 2, title: 'Hozier', img: 'https://m.media-amazon.com/images/I/81bOMm6FSjL._UF1000,1000_QL80_.jpg', price: '$720' },
    { id: 3, title: 'The Weeknd', img: 'https://blackroom.boutique/wp-content/uploads/2025/05/the-weeknd-after-hours.webp', price: '$900' },
    { id: 4, title: 'Folklore', img: 'https://m.media-amazon.com/images/I/A1Q6XGXmIFL.jpg', price: '$880' },
    { id: 5, title: 'Tyler', img: 'https://m.media-amazon.com/images/I/71PN0lh-g9L._UF1000,1000_QL80_.jpg', price: '$750' },
    { id: 9, title: 'Olivia Rodrigo', img: 'https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/602438106417.jpg', price: '$780' },
    { id: 6, title: 'Elvis Presley', img: 'https://m.media-amazon.com/images/I/610YiLKkTKL._UF1000,1000_QL80_.jpg', price: '$950' },
    { id: 13, title: 'Lana Del Rey', img: 'https://m.media-amazon.com/images/I/71tNTXwwWFL.jpg', price: '$950' },
    { id: 11, title: 'Arctic Monkeys', img: 'https://m.media-amazon.com/images/I/619sk-bZaQL._UF1000,1000_QL80_.jpg', price: '$810' },
    { id: 14, title: 'Shaggy', img: 'https://m.media-amazon.com/images/I/71+KUlo1tdL._UF1000,1000_QL80_.jpg', price: '$600' },
    { id: 19, title: 'Alex Warren', img: 'https://www.baba.es/53844-large_default/alex-warren-you-ll-be-alright-kid-2-lp-vinilo-white.jpg', price: '$680' },
    { id: 18, title: 'Kendrick Lamar', img: 'https://m.media-amazon.com/images/I/61MWIe1BzwL._UF1000,1000_QL80_.jpg', price: '$890' },
    { id: 17, title: 'Michael Jackson', img: 'https://m.media-amazon.com/images/I/91YlTtiGi0L.jpg', price: '$1200' },
    { id: 12, title: 'AC/DC', img: 'https://m.media-amazon.com/images/I/71s6glEqRyL._UF1000,1000_QL80_.jpg', price: '$890' },
    { id: 7, title: 'Justin Bieber', img: 'https://m.media-amazon.com/images/I/71CXHV8DFRL._UF1000,1000_QL80_.jpg', price: '$700' },
    { id: 16, title: 'Lorde', img: 'https://blackroom.boutique/wp-content/uploads/2024/01/1706042283.jpeg', price: '$770' },
  ];

  
  const galleryImages = bestSellers.map((disc) => ({
    src: disc.img,
    alt: `${disc.title} - ${disc.price}` // Usamos el alt para guardar info extra
  }));

const catFilters = ["All", "Rock", "Pop", "Jazz", "Indie", "Audio", "Accessories", "Sale"];

const faqData = [
  { q: "¿Cuáles son los tiempos de envío?", a: "Los pedidos nacionales tardan entre 3 y 5 días hábiles. Para envíos internacionales, el tiempo estimado es de 7 a 14 días dependiendo de la aduana local." },
  { q: "¿Realizan envíos internacionales?", a: "Sí, enviamos a todo el mundo. Los costos de envío se calculan automáticamente al finalizar la compra según tu ubicación." },
  { q: "¿Cuál es la política de devoluciones?", a: "Aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el vinilo o equipo esté sellado y en su empaque original." },
  { q: "¿Los equipos de audio tienen garantía?", a: "Absolutamente. Todos nuestros tocadiscos y amplificadores cuentan con una garantía de fábrica de 1 año por defectos de fabricación." },
  { q: "¿Compran vinilos usados?", a: "Sí, compramos colecciones en buen estado. Puedes visitar nuestra tienda física o enviarnos una lista con fotos para una valoración preliminar." },
  { q: "¿Cómo protegen los vinilos para el envío?", a: "Utilizamos cajas de cartón reforzado específicas para vinilos (mailers) con esquinas protegidas y plástico de burbujas para garantizar que lleguen en perfecto estado." },
  { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos todas las tarjetas de crédito/débito principales (Visa, Mastercard, Amex), PayPal y transferencias bancarias directas." },
  { q: "¿Puedo rastrear mi pedido?", a: "Por supuesto. Una vez despachado tu pedido, recibirás un correo electrónico con el número de guía y el enlace de seguimiento." },
  { q: "¿Ofrecen servicio de preventa?", a: "Sí, para lanzamientos exclusivos y ediciones limitadas habilitamos preventas. Asegúrate de suscribirte a nuestro newsletter para enterarte primero." },
  { q: "¿Tienen tarjetas de regalo?", a: "Sí, ofrecemos tarjetas de regalo digitales desde $25 hasta $500. Son perfectas para regalar música sin miedo a equivocarte." },
];

// --- COMPONENTES AUXILIARES ---

const BentoItem = ({ title, value, icon: Icon, delay = 0, className = "" }: BentoItemProps) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative p-8 border border-[#333] hover:border-[#e3a643] transition-colors duration-500 group bg-[#1a1a1a]/50 backdrop-blur-sm flex flex-col justify-between h-64 ${className}`}
    >
      <div className="flex justify-between items-start">
        <span className="text-sm text-gray-400 font-poppins tracking-wider uppercase">{title}</span>
        {Icon && <Icon className="text-[#e3a643] opacity-50 group-hover:opacity-100 transition-opacity" size={20} />}
      </div>
      <div>
        <h3 className="text-6xl md:text-7xl font-oswald font-bold text-white group-hover:text-[#e3a643] transition-colors duration-300">
          {value}
        </h3>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <div className="w-8 h-8 rounded-full border border-[#e3a643] flex items-center justify-center">
           <ArrowRight size={14} className="text-[#e3a643]" />
         </div>
      </div>
    </motion.div>
  );

  const RevealText = ({ text, className = "", delay = 0 }: RevealTextProps) => {
    const words = text.split(" ");
    return (
      <motion.div className={`inline-block overflow-hidden ${className}`} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-2"
            variants={{
              hidden: { y: "100%" },
              visible: { y: 0, transition: { duration: 0.5, delay: delay + i * 0.05, ease: [0.33, 1, 0.68, 1] } }
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

const Navbar = ({ navigateTo, active }: { navigateTo: (v: string) => void, active: string }) => (
  <header className="flex items-center mb-10 w-full z-50">
    <img src={logoEMW} alt="EMW" className="w-20 h-20 object-contain mr-12 cursor-pointer" onClick={() => navigateTo('home')} />
    <nav>
      <ul className="flex gap-8 list-none">
        {['Home', 'Catalogue', 'About', 'FAQ'].map((item) => (
          <li key={item}>
            <button 
              onClick={() => navigateTo(item.toLowerCase())}
              className={`text-2xl uppercase font-oswald font-medium tracking-wider transition-colors hover:text-[#e3a643] ${active === item.toLowerCase() ? 'text-[#e3a643]' : 'text-white'}`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="w-full bg-[#e3a643] py-8 px-12 flex justify-between items-center mt-auto">
    <div className="flex gap-4">
      <Facebook className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition-transform" />
      <Youtube className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition-transform" />
      <Twitter className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition-transform" />
      <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white cursor-pointer">Tk</div>
      <Instagram className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition-transform" />
    </div>
    <div className="flex gap-6">
      <a href="#" className="text-white font-poppins text-sm hover:underline">Privacy politics</a>
      <a href="#" className="text-white font-poppins text-sm hover:underline">Terms and conditions</a>
    </div>
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2 text-white font-poppins text-sm cursor-pointer">
        English <Globe size={16} />
      </div>
      <img src={logoEMW} alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
    </div>
  </footer>
);

// --- VISTAS PRINCIPALES ---

const HomeView = ({ navigateTo, onProductSelect }: ViewProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col w-full mx-auto overflow-hidden bg-[#161616]">
    
    {/* HERO SECTION SPLIT */}
    <div className="relative h-screen w-full flex overflow-hidden">
      {/* FRANJAS DIAGONALES */}
      <div className="absolute top-0 left-[40%] h-full flex transform -skew-x-[20deg] z-20 pointer-events-none">
        <div className="h-full w-[90px] bg-[#365f6b]"></div>
        <div className="h-full w-[90px] bg-[#521519]"></div>
        <div className="h-full w-[90px] bg-[#e3a643]"></div>
        <div className="h-full w-[90px] bg-[#c4a366]"></div>
      </div>

      {/* IZQUIERDA OSCURA */}
      <div className="w-1/2 bg-[#161616] text-white p-12 flex flex-col relative z-10">
        <Navbar navigateTo={navigateTo} active="home" />
        <div className="mt-1">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-[clamp(5rem,15vw,6rem)] leading-[0.85] font-oswald font-bold uppercase tracking-tighter">
              <span className="block stroke-text transition-all duration-500 cursor-default">Electric</span>
              <span className="block text-[#e3a643]">Media Wax.</span>
            </h1>
          </motion.div>
          <div className="w-60 h-1 bg-[#bfa065] mb-8 mt-10"></div>
          <div className="mt-12 max-w-md border-l-2 border-[#e3a643] pl-6">
            <RevealText text="At Electric Media Wax, we celebrate authentic sound. We're a shop dedicated to vinyl records, audio equipment, and special editions..." className="text-xl font-light text-gray-300" />
          </div>
        </div>
      </div>

      {/* DERECHA CLARA */}
      <div className="w-1/2 bg-[#fae8b6] relative flex flex-col justify-between">
        <div className="p-12 flex justify-end">
          <Search className="text-[#333] w-8 h-8 cursor-pointer" />
        </div>
        
        {/* VINILO CENTRAL (CSS Personalizado en estilo global) */}
        <div className="vinyl-record"></div>

        <TextType
          text={["ALL TYPE OF MUSIC", "VINYL RECORDS", "AUDIO GEAR"]} // Puedes poner solo uno o varios para rotar
          className="absolute right-[160px] top-[40%] transform -translate-y-[40%] rotate-180 writing-vertical-rl text-[2.5rem] font-m-plus uppercase tracking-wide text-black z-0"
          typingSpeed={100}
          deletingSpeed={50}
          pauseDuration={2000}
          cursorCharacter="|" // En texto vertical, el guion bajo suele verse mejor que la barra |
          loop={true}
        />

        {/* Barra inferior decorativa */}
        
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-[#bfa065] z-30"></div>
    </div>

    {/* NEW ARRIVALS */}
    <div className="w-full bg-[#161616] py-24 px-[10%] flex flex-col items-center relative z-30">
      <div className="text-center mb-20">
        <h2 className="font-m-plus text-[3.5rem] text-[#e3a643] uppercase tracking-[3px] mb-2 font-normal">New Arrivals</h2>
        <div className="w-full h-[3px] bg-[#e3a643] max-w-[300px] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
        {products.map((prod) => (
          <div 
            key={prod.id} 
            className="group relative bg-[#1a1a1a] rounded-xl p-6 h-[250px] flex flex-col justify-end shadow-2xl transition-transform duration-300 hover:-translate-y-2 z-10 hover:z-20 overflow-visible cursor-pointer"
            onClick={() => onProductSelect && onProductSelect(prod as Product)}
          >
             {/* Imagen que "sobresale" */}
             <img 
               src={prod.image} 
               alt={prod.name} 
               className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 z-30"
             />
             
             <div className="relative z-10 flex justify-between items-end mt-auto pt-8 border-t border-[#333]">
               <div>
                 <h3 className="font-poppins text-gray-200 text-lg mb-1">{prod.name}</h3>
                 <span className="font-oswald text-[#e3a643] text-2xl font-medium">{prod.price}</span>
               </div>
               <button className="bg-[#e3a643] text-[#111] px-6 py-2 rounded-lg font-oswald font-bold hover:bg-white transition-colors">
                 SEE
               </button>
             </div>
          </div>
        ))}
      </div>
    </div>

    {/* BEST SELLERS */}
    <div className="w-full bg-[#e3a643] flex flex-col items-center">
      <div className="text-center mb-12 border-b-4 border-white pb-2 inline-block">
        <h2 className="font-m-plus text-5xl text-white uppercase font-normal"><br></br>Best Sellers</h2>
      </div>
      
      {/* Grid de 6 columnas para permitir escalas de 1, 2 y 3 unidades */}
      {/* Contenedor de la Galería */}
      <div className="relative w-full h-screen">
        <DomeGallery 
          images={galleryImages}
          // Props personalizadas
          overlayBlurColor="#E8A646"
          grayscale={false}
          segments={50}    // MÁS DENSO: Aumenta de 35 a 50 (o 60) para tener muchos azulejos pequeños.
          fit={1}       // MÁS ZOOM: Acerca la esfera a la cámara (valor entre 0.1 y 1).
          minRadius={900}  // RADIO MÍNIMO GIGANTE: Asegura que nunca se vea pequeña.
          maxRadius={2000}
          openedImageWidth="400px"
          openedImageHeight="400px"
          imageBorderRadius="4px" // Cuadrados tipo portada de disco
          openedImageBorderRadius="8px"
        />
      </div>
    </div>

    {/* MONTHLY DEALS
    <div className="w-full bg-[#161616] py-24 px-[10%] flex justify-center items-center flex-wrap gap-12">
      <img src={hedgehogImg} alt="Hedgehog" className="w-[350px] object-contain" />
      <div className="bg-[#e3a643] border-[3px] border-[#1a1a1a] rounded-3xl p-10 text-center relative shadow-[10px_10px_0px_#521519,20px_20px_0px_#365f6b]">
        <h3 className="font-m-plus text-[2.5rem] uppercase text-[#1a1a1a] font-medium leading-tight">
          20% off the <br/>entire store
        </h3>
      </div>
    </div> */}

    <Footer />
  </motion.div>
);

const CatalogueView = ({ navigateTo, onProductSelect }: ViewProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-[#161616] text-white font-poppins flex flex-col w-full mx-auto">
    
    <div className="w-1/2 bg-[#161616] text-white p-12 flex flex-col relative z-10">
        <Navbar navigateTo={navigateTo} active="catalogue" />
    </div>

    {/* HERO CATALOGUE */}
    <div className="flex flex-wrap justify-between items-center px-[5%] py-12 gap-10 w-full">
        <div className="flex-1 min-w-[300px]">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-[clamp(5rem,15vw,12rem)] leading-[0.85] font-oswald font-bold uppercase tracking-tighter">
              <span className="block stroke-text transition-all duration-500 cursor-default">Discover</span>
              <span className="block text-[#e3a643]">Vinyls.</span>
            </h1>
          </motion.div>
          <div className="mt-12 max-w-md border-l-2 border-[#e3a643] pl-6">
            <RevealText text="Explore our curated collection of the best analog sounds." className="text-xl font-light text-gray-300" />
          </div><br></br>
            <div className="flex gap-2 bg-[#222] p-1 rounded-full max-w-md border border-[#333]">
                <input type="text" placeholder="Search..." className="bg-transparent border-none text-white px-5 py-2 flex-1 outline-none font-poppins" />
                <button className="bg-[#e3a643] text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-colors">Search</button>
            </div>
        </div>
        
        <div className="relative">
            <div className="w-[300px] h-[400px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#333] shadow-2xl relative group">
                <img src={bestSellers[0].img} alt="Hero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <span className="text-sm font-bold block">Featured</span>
                    <div className="flex justify-between mt-1 text-[#e3a643] text-sm">EMW Exclusive</div>
                </div>
            </div>
        </div>
    </div>

    {/* FILTERS */}
    <div className="flex gap-4 overflow-x-auto px-[5%] py-5 no-scrollbar mb-10 w-full">
        {catFilters.map((cat, i) => (
            <button key={i} className={`bg-transparent border border-[#444] text-[#ccc] px-6 py-2 rounded-full whitespace-nowrap transition-all hover:bg-white hover:text-black hover:border-white font-poppins text-sm ${i === 0 ? 'bg-white text-black border-white' : ''}`}>
                {cat}
            </button>
        ))}
    </div>

    {/* SECCION FEATURED */}
    <div className="px-[5%] mb-12 w-full">
        <div className="flex justify-between items-end mb-8">
            <h2 className="font-m-plus text-3xl">Featured</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {bestSellers.slice(0, 4).map((item) => (
                <div key={item.id} className="bg-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer border border-[#333] hover:border-[#e3a643] transition-all hover:-translate-y-1 group" onClick={() => onProductSelect && onProductSelect(item as Product)}>
                    <div className="h-64 bg-[#222] overflow-hidden">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                    </div>
                    <div className="p-5">
                        <h3 className="font-poppins text-lg mb-1">{item.title}</h3>
                        <div className="pt-3 border-t border-[#333] flex justify-between text-[#e3a643]">
                            <span>{item.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/* SECCION TOP LIST */}
    <div className="px-[5%] mb-20 w-full">
        <h2 className="font-m-plus text-3xl mb-8">Top Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.slice(4, 10).map((item, idx) => (
                <div key={item.id} className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-xl cursor-pointer border border-transparent hover:border-[#444] hover:bg-[#222] transition-colors" onClick={() => onProductSelect && onProductSelect(item as Product)}>
                    <span className="font-bold text-[#666] w-6">{idx + 1}</span>
                    <div className="w-16 h-16 rounded-lg overflow-hidden relative">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="font-poppins font-medium">{item.title}</h4>
                        <span className="text-xs text-[#888]">Price: <span className="text-[#e3a643]">{item.price}</span></span>
                    </div>
                </div>
            ))}
        </div>
    </div>

    <Footer />
  </motion.div>
);

const ProductDetailView = ({ product, onBack }: { product: Product; onBack: () => void }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="min-h-screen bg-[#161616] text-white pt-32 px-[10%] pb-20 flex flex-col w-full mx-auto">
    <button onClick={onBack} className="flex items-center gap-2 text-[#aaa] mb-8 transition-colors font-poppins w-fit">
        <ArrowLeft size={20}/> Volver
    </button>
    
    <div className="flex flex-wrap gap-12 items-center min-h-[70vh]">
        {/* IMAGEN GRANDE */}
        <div className="flex-1 min-w-[300px] flex justify-center">
            <div className="w-full max-w-[500px] aspect-square bg-[#1a1a1a] rounded-3xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#e3a643]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src={product.image || product.img} alt={product.name} className="max-w-[80%] max-h-[80%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500" />
            </div>
        </div>

        {/* INFO */}
        <div className="flex-1 min-w-[300px]">
            <div className="flex justify-between items-start mb-4">
                <span className="bg-[#333] text-[#ccc] px-4 py-1 rounded-full text-xs uppercase tracking-wider">Audio Gear</span>
                <button className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#e3a643] hover:border-[#e3a643] hover:text-black transition-all">
                    <Heart size={20}/>
                </button>
            </div>
            
            <h1 className="font-m-plus text-5xl md:text-6xl mb-4 leading-tight">{product.name || product.title}</h1>
            
            <div className="flex items-baseline gap-4 mb-8">
                <span className="font-oswald text-4xl text-[#e3a643]">{product.price}</span>
                <span className="text-sm text-gray-500 line-through">$2,000</span>
            </div>
            
            <p className="font-poppins text-gray-400 leading-relaxed mb-10 text-lg">
                {product.description || "Este producto es una edición exclusiva seleccionada por nuestros expertos en audio. Calidad garantizada y sonido de alta fidelidad."}
            </p>
            
            <div className="flex gap-4">
                <button className="flex-1 bg-[#e3a643] text-black py-4 rounded-xl font-oswald font-bold text-xl hover:bg-white transition-colors">
                    COMPRAR AHORA
                </button>
                <button className="flex-1 border-2 border-[#444] text-white py-4 rounded-xl font-oswald font-bold text-xl hover:border-white transition-colors">
                    AÑADIR AL CARRO
                </button>
            </div>
        </div>
    </div>
  </motion.div>
);

// --- ABOUT VIEW ---
const AboutView = ({ navigateTo }: ViewProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const BrandMarquee = () => {
    const brands = ["SONY", "MARSHALL", "FENDER", "TECHNICS", "PIONEER", "ROLAND", "KORG", "YAMAHA"];
    return (
      <div className="overflow-hidden py-12 border-y border-[#333] bg-[#111]">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span key={i} className="text-4xl md:text-6xl font-oswald text-[#333] font-bold mx-12 uppercase hover:text-[#e3a643] transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#161616] text-white overflow-x-hidden font-poppins flex flex-col w-full mx-auto">
      <div className="w-1/2 bg-[#161616] text-white p-12 flex flex-col relative z-10">
        <Navbar navigateTo={navigateTo} active="about" />
      </div>

      <header className="relative pt-10 pb-20 px-6 md:px-12 min-h-[80vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-[clamp(5rem,15vw,12rem)] leading-[0.85] font-oswald font-bold uppercase tracking-tighter">
              <span className="block stroke-text transition-all duration-500 cursor-default">About</span>
              <span className="block text-[#e3a643]">Us.</span>
            </h1>
          </motion.div>
          <div className="mt-12 max-w-md border-l-2 border-[#e3a643] pl-6">
            <RevealText text="We craft sound experiences for the analog soul in a digital world." className="text-xl font-light text-gray-300" />
          </div>
        </div>

        <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
          <motion.div 
            className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out rounded-xl"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0 0)' }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          >
            <img src={studioImg} alt="Studio" className="object-cover w-full h-[600px]" />
          </motion.div>
          <motion.div style={{ y }} className="absolute -left-12 top-1/4 bg-[#e3a643] text-black p-4 w-32 h-32 flex items-center justify-center rounded-full hidden md:flex flex-col gap-1 z-20 shadow-lg">
            <span className="font-bold font-oswald text-3xl">35+</span>
            <span className="text-xs uppercase font-bold tracking-tighter text-center leading-none">Years of<br/>Excellence</span>
          </motion.div>
        </div>
      </header>

      <section className="px-4 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mx-auto">
          <BentoItem title="Years Experience" value="37" icon={Disc} delay={0.1} />
          <div className="lg:col-span-2 row-span-2 relative bg-[#e3a643] text-[#161616] p-12 flex flex-col justify-center overflow-hidden group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <motion.div className="relative z-10" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
               <h3 className="text-lg font-bold uppercase tracking-widest mb-4 border-b-2 border-black inline-block pb-1">Our Philosophy</h3>
               <p className="text-3xl md:text-5xl font-oswald font-bold leading-none mb-6">ANALOG SOUND,<br/>FUTURE VISION.</p>
               <button className="mt-8 px-8 py-3 border-2 border-black font-bold hover:bg-black hover:text-[#e3a643] transition-all flex items-center gap-2 group-hover:gap-4">READ OUR STORY <ChevronRight size={18}/></button>
             </motion.div>
             <motion.img src={vinylImg} className="absolute right-[-50px] bottom-[-50px] w-64 h-64 object-cover rounded-full opacity-20 group-hover:rotate-45 transition-transform duration-700" alt="Vinyl"/>
          </div>
          <BentoItem title="Studio Locations" value="03" icon={Radio} delay={0.3} />
          <BentoItem title="Team Members" value="80+" icon={Mic2} delay={0.2} />
          <BentoItem title="Industry Awards" value="260+" icon={Globe} delay={0.4} className="bg-[#222]" />
        </div>
      </section>

      <section className="pb-24">
        <BrandMarquee />
      </section>

      <Footer />
    </div>
  );
};

// --- FAQ VIEW (DISEÑO BRUTALISTA DE 1700PX) ---
const FAQItem = ({ question, answer, isOpen, onClick, index }: FAQItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-[#333]"
    >
      <button 
        onClick={onClick} 
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className={`font-oswald text-2xl md:text-3xl uppercase transition-colors duration-300 ${isOpen ? 'text-[#e3a643]' : 'text-white group-hover:text-[#e3a643]'}`}>
          <span className="text-sm md:text-base text-gray-500 mr-4 md:mr-8 align-middle font-mono">0{index + 1}.</span>
          {question}
        </span>
        <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#e3a643] bg-[#e3a643] text-black rotate-45' : 'border-gray-600 text-gray-400 group-hover:border-[#e3a643] group-hover:text-[#e3a643]'}`}>
          <Plus size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-0 md:pl-[4.5rem] max-w-3xl">
              <p className="font-poppins text-gray-400 text-lg leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQView = ({ navigateTo }: ViewProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // El primero abierto por defecto

  return (
    <div className="min-h-screen bg-[#161616] text-white overflow-x-hidden font-poppins flex flex-col w-full">
      <div className="w-1/2 bg-[#161616] text-white p-12 flex flex-col relative z-10">
        <Navbar navigateTo={navigateTo} active="faq" />
      </div>

      <div className="px-6 md:px-12 pb-24 w-full">
        
        {/* Header Gigante tipo "Editorial" */}
        <header className="pt-10 pb-20 border-b border-[#333] mb-12">
           <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-[clamp(5rem,15vw,12rem)] leading-[0.85] font-oswald font-bold uppercase tracking-tighter">
              <span className="block text-[#e3a643] font-mono text-sm mb-2 tracking-widest">CUSTOMER SUPPORT</span>
              <span className="block stroke-text transition-all duration-500 cursor-default">Help</span>
              <span className="block text-[#e3a643]">Center.</span>
            </h1>
          </motion.div>
        </header>

        {/* Layout Grid: Izquierda Contacto / Derecha Lista FAQ */}
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sidebar Sticky */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <p className="text-xl text-gray-300 font-poppins font-light mb-8 max-w-xs">
              Can't find what you're looking for? We are here to help.
            </p>
            <div className="space-y-6">
               <div className="border border-[#333] p-6 rounded-xl hover:border-[#e3a643] transition-colors group cursor-pointer bg-[#1a1a1a]">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="text-gray-400 text-xs uppercase tracking-widest">Email Support</h3>
                   <Mail className="text-[#e3a643]" size={16} />
                 </div>
                 <p className="text-xl font-oswald group-hover:text-[#e3a643] transition-colors">hello@emw.audio</p>
               </div>
               <div className="border border-[#333] p-6 rounded-xl hover:border-[#e3a643] transition-colors group cursor-pointer bg-[#1a1a1a]">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="text-gray-400 text-xs uppercase tracking-widest">Phone Support</h3>
                   <Phone className="text-[#e3a643]" size={16} />
                 </div>
                 <p className="text-xl font-oswald group-hover:text-[#e3a643] transition-colors">+1 (555) 019-2834</p>
               </div>
            </div>
          </div>

          {/* Lista de Preguntas Accordion */}
          <div className="lg:w-2/3">
            <div className="border-t border-[#333]">
              {faqData.map((item, index) => (
                <FAQItem 
                  key={index}
                  index={index}
                  question={item.q}
                  answer={item.a}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

// --- APP PRINCIPAL ---
const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => { window.scrollTo(0,0); }, [currentView]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const renderContent = () => {
    if (currentView === 'product-detail' && selectedProduct) 
      return <ProductDetailView product={selectedProduct} onBack={() => setCurrentView('catalogue')} />;
    
    switch(currentView) {
      case 'home': return <HomeView navigateTo={setCurrentView} onProductSelect={handleProductSelect} />;
      case 'catalogue': return <CatalogueView navigateTo={setCurrentView} onProductSelect={handleProductSelect} />;
      case 'about': return <AboutView navigateTo={setCurrentView} />;
      case 'faq': return <FAQView navigateTo={setCurrentView} />;
      default: return <HomeView navigateTo={setCurrentView} onProductSelect={handleProductSelect} />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@100..700&display=swap');

        /* ESTILOS ESPECÍFICOS QUE TAILWIND NO CUBRE BIEN */
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-m-plus { font-family: 'M PLUS Code Latin', monospace; }

        .stroke-text {
          -webkit-text-stroke: 2px rgba(255,255,255,0.2);
          color: transparent;
        }
        
        /* VINILO CON GRADIENTE COMPLEJO */
        .vinyl-record {
          position: absolute;
          top: 50%;
          left: -30px;
          transform: translateY(-60%);
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle at center, #d4b675 0%, #d4b675 25%, #111 26%, #111 27%, #222 28%, #111 30%, #222 32%, #111 34%, #222 36%, #111 38%, #222 40%, #111 45%, #000 100%);
          box-shadow: 10px 10px 30px rgba(0,0,0,0.3);
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vinyl-record::after {
          content: '';
          width: 15px;
          height: 15px;
          background-color: #f5f5f5;
          border-radius: 50%;
          border: 1px solid #aaa;
        }
        
        .writing-vertical-rl {
           writing-mode: vertical-rl;
        }

        /* Ocultar barra scroll horizontal en filtros */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="w-full min-h-screen bg-[#161616] flex justify-center">
        {/* Aquí está el wrapper principal que centra todo el contenido en 1700px */}
        <div className="max-w-[1900px] w-screen min-h-screen overflow-x-hidden">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default App;