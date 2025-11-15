import type { Route } from "./+types/home";
import { Button } from "~/components/atoms/button/Button";
import { ProductCard } from "~/components/molecules/productCard/ProductCard";
import { PRODUCTOS } from "~/data";

/**
 * Define los metadatos de la página (título, descripción)
 * para SEO y la pestaña del navegador.
 */
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pastelería Mil Sabores - Inicio" },
    { name: "description", content: "Celebrando 50 años de tradición y dulzura." },
  ];
}

/**
 * Componente de Página: Home
 *
 * Esta es la página de inicio.
 * Recrea la sección 'hero', 'featured-products' y 'company-info'
 * del index.html original.
 */
export default function Home() {
  // Obtenemos los productos destacados filtrando el array de PRODUCTOS
  const productosDestacados = PRODUCTOS.filter(p => p.destacado);

  return (
    <div>
      {/* === Sección Hero === */}
      <section className="bg-gradient-to-r from-rosa to-crema py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Columna de Texto */}
          <div className="text-center md:text-left">
            <h2 className="font-pacifico text-5xl md:text-6xl text-chocolate drop-shadow-md">
              Celebrando 50 años de tradición
            </h2>
            <p className="text-xl text-marron mt-4 mb-8 italic">
              Desde 1975 endulzando la vida de las familias chilenas
            </p>
            
            {/* Features (como en el original) */}
            <div className="space-y-3 mb-10 max-w-md mx-auto md:mx-0">
              <div className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                <i className="fas fa-birthday-cake text-dorado text-2xl w-8 text-center"></i>
                <span>Tortas personalizadas para toda ocasión</span>
              </div>
              <div className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                <i className="fas fa-leaf text-dorado text-2xl w-8 text-center"></i>
                <span>Opciones sin gluten y veganas</span>
              </div>
              <div className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                <i className="fas fa-truck text-dorado text-2xl w-8 text-center"></i>
                <span>Entregas en toda la Región Metropolitana</span>
              </div>
            </div>

            <Button to="/products" variant="primary" className="text-lg px-8 py-4">
              <i className="fas fa-store"></i>
              <span>Ver Productos</span>
            </Button>
          </div>
          
          {/* Columna de Imagen (Logo 50 años) */}
          <div className="flex justify-center items-center">
            <img 
              src="/img/Logo50Aniversario.png" 
              alt="Logo 50 Aniversario" 
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* === Sección Productos Destacados === */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-pacifico text-center text-chocolate mb-12">
            Productos Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productosDestacados.map((producto) => (
              <ProductCard key={producto.codigo} product={producto} />
            ))}
          </div>
        </div>
      </section>

      {/* === Sección Información Empresa === */}
      <section className="bg-gradient-to-r from-menta to-salmon py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/70 p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-pacifico text-chocolate mb-3">Nuestra Misión</h4>
              <p className="text-marron">Ofrecer una experiencia dulce y memorable, proporcionando productos de alta calidad para todas las ocasiones.</p>
            </div>
            <div className="bg-white/70 p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-pacifico text-chocolate mb-3">Nuestra Visión</h4>
              <p className="text-marron">Convertirnos en la tienda online líder de repostería en Chile, conocida por nuestra innovación y calidad.</p>
            </div>
            <div className="bg-white/70 p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-pacifico text-chocolate mb-3">Nuestra Historia</h4>
              <p className="text-marron">Desde 1975, mantenemos la tradición familiar, incluso obteniendo un Récord Guinness en 1995.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}