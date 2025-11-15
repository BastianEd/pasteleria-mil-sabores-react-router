import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("products", "routes/products.tsx"),
    route("cart", "routes/cart.tsx"),
    route("blog", "routes/blog.tsx"),
    route("contact", "routes/contact.tsx"),
    route("login", "routes/login.tsx"),
    route("register", "routes/register.tsx"),
] satisfies RouteConfig;
