import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // Ruta principal (Home)
    index("routes/home.tsx"),

    // Resto de las páginas
    route("products", "routes/products.tsx"), // Página del catálogo de productos
    route("cart", "routes/cart.tsx"),         // Página del carrito de compras
    route("blog", "routes/blog.tsx"),         // Página del blog
    route("contact", "routes/contact.tsx"),   // Página de contacto
    route("login", "routes/login.tsx"),       // Página de inicio de sesión
    route("register", "routes/register.tsx"), // Página de registro
] satisfies RouteConfig;