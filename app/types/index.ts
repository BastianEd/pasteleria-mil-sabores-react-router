/**
 * Define la estructura de un Usuario.
 * Basado en USUARIOS_DEMO de data.js.
 */
export type TipoUsuario = 'mayor' | 'estudiante_duoc' | 'regular';
export interface User {
  email: string;
  nombre: string;
  fechaNacimiento: string;
  tipoUsuario: TipoUsuario;
  // Nota: Omitimos el password aquí por seguridad,
  // aunque para este mock de login lo necesitaremos en el archivo de datos.
}

/**
 * Define la estructura de un Producto.
 * Basado en PRODUCTOS de data.js.
 */
export interface Product {
  codigo: string;
  nombre: string;
  categoria: string;
  precio: number;
  descripcion: string;
  imagen: string;
  destacado?: boolean; // '?' significa que es opcional
}

/**
 * Define un ítem dentro del carrito.
 * Es un Producto, pero con una propiedad 'cantidad'.
 */
export interface CartItem extends Product {
  cantidad: number;
}

/**
 * Define la estructura de un artículo del Blog.
 * Basado en BLOG_ARTICULOS de data.js.
 */
export interface BlogPost {
  id: number;
  titulo: string;
  categoria: 'historia' | 'tips' | 'recetas' | 'eventos';
  contenido: string;
  fecha: string;
  autor: string;
  imagen: string; // El emoji 📚, 🎂, etc.
}