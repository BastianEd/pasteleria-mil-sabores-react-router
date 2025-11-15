import { useState, useMemo } from "react";
import type { Route } from "./+types/products"; // (Necesitarás crear este archivo)
import { PRODUCTOS, CATEGORIAS } from "~/data";
import { ProductCard } from "~/components/molecules/productCard/ProductCard";
import { Input } from "~/components/atoms/input/Input";

// (Crea un archivo vacío en app/routes/+types/products.ts para que esto funcione)

/**
 * Define los metadatos de la página.
 */
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nuestros Productos - Mil Sabores" },
    { name: "description", content: "Explora nuestro catálogo de tortas, postres y más." },
  ];
}

/**
 * Componente de Página: Productos
 *
 * Muestra el catálogo completo de productos con filtros
 * por categoría y búsqueda por nombre.
 */
export default function ProductsPage() {
  // Estado para guardar el término de búsqueda del usuario
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para guardar la categoría seleccionada
  const [activeCategory, setActiveCategory] = useState("all");

  /**
   * Filtramos los productos usando useMemo.
   * useMemo "memoriza" el resultado del cálculo. Solo se
   * volverá a ejecutar si 'searchTerm' o 'activeCategory' cambian.
   * Esto es mucho más eficiente que filtrar en cada render.
   */
  const filteredProducts = useMemo(() => {
    let products = PRODUCTOS;

    // 1. Filtrar por categoría
    if (activeCategory !== "all") {
      products = products.filter(p => p.categoria === activeCategory);
    }

    // 2. Filtrar por término de búsqueda
    if (searchTerm.trim() !== "") {
      const lowerSearch = searchTerm.toLowerCase();
      products = products.filter(p => 
        p.nombre.toLowerCase().includes(lowerSearch) ||
        p.descripcion.toLowerCase().includes(lowerSearch)
      );
    }

    return products;
  }, [searchTerm, activeCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-pacifico text-center text-chocolate mb-8">
        Nuestros Productos
      </h2>

      {/* Controles de Filtro y Búsqueda */}
      <div className="mb-8 p-4 bg-white/50 rounded-lg shadow">
        <Input
          id="search"
          label="Buscar producto..."
          placeholder="Ej: Torta de chocolate"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Botones de Categoría */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {/* Botón "Todos" */}
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${
            activeCategory === "all" 
              ? 'bg-chocolate text-white' 
              : 'bg-white text-marron hover:bg-rosa'
          }`}
        >
          Todos
        </button>
        {/* Resto de categorías */}
        {CATEGORIAS.map(categoria => (
          <button
            key={categoria}
            onClick={() => setActiveCategory(categoria)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              activeCategory === categoria 
                ? 'bg-chocolate text-white' 
                : 'bg-white text-marron hover:bg-rosa'
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Grilla de Productos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.codigo} product={product} />
          ))}
        </div>
      ) : (
        // Mensaje si no se encuentran productos
        <div className="text-center py-16">
          <i className="fas fa-search text-6xl text-gray-400 mb-4"></i>
          <h3 className="text-2xl font-pacifico text-chocolate">
            No se encontraron productos
          </h3>
          <p className="text-gray-600">
            Intenta ajustar tu búsqueda o filtros.
          </p>
        </div>
      )}
    </div>
  );
}