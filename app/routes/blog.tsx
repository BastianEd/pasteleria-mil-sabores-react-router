import { useState, useMemo } from "react";
import type { Route } from "./+types/blog"; // (Necesitarás crear este archivo)
import { BLOG_ARTICULOS } from "~/data";
import { BlogCard } from "~/components/molecules/blogCard/BlogCard";

// (Crea un archivo vacío en app/routes/+types/blog.ts para que esto funcione)

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog Mil Sabores" },
    { name: "description", content: "Descubre tips, recetas y secretos de la repostería." },
  ];
}

const CATEGORIAS_BLOG = ['recetas', 'tips', 'historia', 'eventos'];

/**
 * Componente de Página: Blog
 *
 * Muestra los artículos del blog con filtros por categoría.
 */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") {
      return BLOG_ARTICULOS;
    }
    return BLOG_ARTICULOS.filter(
      (post) => post.categoria === activeCategory
    );
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-pacifico text-center text-chocolate mb-4">
        Blog Mil Sabores
      </h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        Descubre tips, recetas y secretos de la repostería
      </p>

      {/* Botones de Categoría */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full font-semibold transition-colors capitalize ${
            activeCategory === "all" 
              ? 'bg-chocolate text-white' 
              : 'bg-white text-marron hover:bg-rosa'
          }`}
        >
          Todos
        </button>
        {CATEGORIAS_BLOG.map(categoria => (
          <button
            key={categoria}
            onClick={() => setActiveCategory(categoria)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors capitalize ${
              activeCategory === categoria 
                ? 'bg-chocolate text-white' 
                : 'bg-white text-marron hover:bg-rosa'
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Grilla de Artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}