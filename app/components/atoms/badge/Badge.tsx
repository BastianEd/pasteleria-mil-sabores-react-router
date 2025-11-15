import type { BlogPost } from "~/types";
import { Button } from "../../atoms/button/Button";

interface BlogCardProps {
  post: BlogPost;
}

/**
 * Componente Molécula: BlogCard
 *
 * Muestra un artículo del blog en formato de tarjeta.
 * Reemplaza la función 'crearTarjetaBlog' de blog.js.
 */
export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Imagen (Emoji) y Categoría */}
      <div className="relative h-48 bg-rosa flex items-center justify-center">
        <span className="text-6xl" role="img" aria-label={post.titulo}>
          {post.imagen}
        </span>
        <div className="absolute top-2 left-2 bg-chocolate text-white text-xs font-bold px-3 py-1 rounded-full capitalize">
          {post.categoria}
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-5">
        <h3 className="font-pacifico text-2xl text-chocolate h-16">
          {post.titulo}
        </h3>
        <p className="text-gray-600 text-sm h-12 my-2 overflow-hidden">
          {post.contenido}...
        </p>
        
        {/* Metadatos del Blog */}
        <div className="text-xs text-gray-500 my-4 flex justify-between">
          <span>
            <i className="fas fa-user mr-1"></i> {post.autor}
          </span>
          <span>
            <i className="fas fa-calendar mr-1"></i> {new Date(post.fecha).toLocaleDateString('es-CL')}
          </span>
        </div>
        
        {/*
         * En el proyecto original, esto abría un modal.
         * En una app React, lo ideal sería navegar a una ruta
         * como /blog/1. Por ahora, el botón no tiene acción.
        */}
        <Button 
          variant="primary" 
          fullWidth
          onClick={() => alert(`Leyendo ${post.titulo} (modal no implementado)`)}
        >
          <i className="fas fa-book-open"></i>
          Leer más
        </Button>
      </div>
    </article>
  );
};