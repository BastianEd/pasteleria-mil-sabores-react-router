import type { Product, User } from "~/types";

// Lista de productos falsos para la pastelería
export const PRODUCTOS_DEMO: Product[] = [
    {
        id: 1,
        nombre: "Torta Mil Hojas",
        descripcion: "Clásica torta chilena de mil hojas con harto manjar.",
        precio: 15990,
        stock: 10,
        categoria: "Tortas",
        imagenUrl: "https://via.placeholder.com/400x300?text=Torta+Mil+Hojas",
    },
    {
        id: 2,
        nombre: "Cheesecake Frutos Rojos",
        descripcion: "Cheesecake cremoso con base de galleta y frutos rojos arriba.",
        precio: 13990,
        stock: 8,
        categoria: "Cheesecake",
        imagenUrl: "https://via.placeholder.com/400x300?text=Cheesecake+Frutos+Rojos",
    },
    {
        id: 3,
        nombre: "Brazo de Reina",
        descripcion: "Bizcocho enrollado con manjar y azúcar flor encima.",
        precio: 6990,
        stock: 15,
        categoria: "Tradicional",
        imagenUrl: "https://via.placeholder.com/400x300?text=Brazo+de+Reina",
    },
];

// Usuario demo por si queremos simular login sin API todavía
export const USUARIOS_DEMO: User[] = [
    {
        id: 1,
        nombre: "Admin Demo",
        email: "admin@mil-sabores.cl",
        rol: "admin",
    },
];
