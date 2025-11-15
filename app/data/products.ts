import type { Product } from '~/types';

/**
 * Lista de productos disponibles en la pastelería.
 * Tomado de data.js y tipado con nuestra interfaz 'Product'.
 * IMPORTANTE: Las rutas de las imágenes se han actualizado de
 * './assets/img/' a '/img/' para que funcionen desde la carpeta 'public'.
 */
export const PRODUCTOS: Product[] = [
    {
        codigo: "TC001",
        nombre: "Torta Cuadrada de Chocolate",
        categoria: "Tortas Cuadradas",
        precio: 45000,
        descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas.",
        imagen: ".../../public/assets/img/TortaCuadradaDeChocolate.webp",
        destacado: true
    },
    {
        codigo: "TC002",
        nombre: "Torta Cuadrada de Frutas",
        categoria: "Tortas Cuadradas",
        precio: 50000,
        descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla.",
        imagen: "../../public/assets/img/TortaCuadradaDeFrutas.jpg"
    },
    {
        codigo: "TT001",
        nombre: "Torta Circular de Vainilla",
        categoria: "Tortas Circulares",
        precio: 40000,
        descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce.",
        imagen: "../../public/assets/img/TortaCircularDeVainilla.png",
        destacado: true
    },
    {
        codigo: "TT002",
        nombre: "Torta Circular de Manjar",
        categoria: "Tortas Circulares",
        precio: 42000,
        descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces.",
        imagen: "../../public/assets/img/TortaCircularDeManjar.png"
    },
    {
        codigo: "PI001",
        nombre: "Mousse de Chocolate",
        categoria: "Postres Individuales",
        precio: 5000,
        descripcion: "Postre individual cremoso y suave, hecho con chocolate de alta calidad.",
        imagen: "../../public/assets/img/MousseDeChocolate.jpg",
        destacado: true
    },
    {
        codigo: "PI002",
        nombre: "Tiramisú Clásico",
        categoria: "Postres Individuales",
        precio: 5500,
        descripcion: "Un postre italiano individual con capas de café, mascarpone y cacao.",
        imagen: "../../public/assets/img/TiramisuClasico.webp"
    },
    {
        codigo: "PSA001",
        nombre: "Torta Sin Azúcar de Naranja",
        categoria: "Productos Sin Azúcar",
        precio: 48000,
        descripcion: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones saludables.",
        imagen: "../../public/assets/img/TortaSinAzucarDeNaranja.jpg"
    },
    {
        codigo: "PSA002",
        nombre: "Cheesecake Sin Azúcar",
        categoria: "Productos Sin Azúcar",
        precio: 47000,
        descripcion: "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
        imagen: "../../public/assets/img/CheesecakeSinAzucar.jpg"
    },
    {
        codigo: "PT001",
        nombre: "Empanada de Manzana",
        categoria: "Pastelería Tradicional",
        precio: 3000,
        descripcion: "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
        imagen: "../../public/assets/img/EmpanadaDeManzana.jpg"
    },
    {
        codigo: "PT002",
        nombre: "Tarta de Santiago",
        categoria: "Pastelería Tradicional",
        precio: 6000,
        descripcion: "Tradicional tarta española hecha con almendras, azúcar, y huevos.",
        imagen: "../../public/assets/img/TartaDeSantiago.webp"
    },
    {
        codigo: "PG001",
        nombre: "Brownie Sin Gluten",
        categoria: "Productos Sin Gluten",
        precio: 4000,
        descripcion: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.",
        imagen: "../../public/assets/img/BrownieSinGluten.jpeg"
    },
    {
        codigo: "PG002",
        nombre: "Pan Sin Gluten",
        categoria: "Productos Sin Gluten",
        precio: 3500,
        descripcion: "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.",
        imagen: "../../public/assets/img/PanSinGluten.webp"
    },
    {
        codigo: "PV001",
        nombre: "Torta Vegana de Chocolate",
        categoria: "Productos Vegana",
        precio: 50000,
        descripcion: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal.",
        imagen: "../../public/assets/img/TortaVeganaDeChocolate.png"
    },
    {
        codigo: "PV002",
        nombre: "Galletas Veganas de Avena",
        categoria: "Productos Vegana",
        precio: 4500,
        descripcion: "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.",
        imagen: "../../public/assets/img/GalletasVeganasDeAvena.jpg"
    },
    {
        codigo: "TE001",
        nombre: "Torta Especial de Cumpleaños",
        categoria: "Tortas Especiales",
        precio: 55000,
        descripcion: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
        imagen: "../../public/assets/img/TortaEspecialDeCumpleaños.jpg",
        destacado: true
    },
    {
        codigo: "TE002",
        nombre: "Torta Especial de Boda",
        categoria: "Tortas Especiales",
        precio: 60000,
        descripcion: "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
        imagen: "../../public/assets/img/TortaEspecialDeBoda.webp"
    }
];

/**
 * Categorías disponibles de los productos (se usa para filtros o menús).
 */
export const CATEGORIAS: string[] = [
    "Tortas Cuadradas",
    "Tortas Circulares",
    "Postres Individuales",
    "Productos Sin Azúcar",
    "Pastelería Tradicional",
    "Productos Sin Gluten",
    "Productos Vegana",
    "Tortas Especiales"
];