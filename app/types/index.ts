

export interface Product {
    id: number;
    // Nombre del producto, por ejemplo "Torta Mil Hojas"
    nombre: string;
    // Descripción corta para mostrar en las cards
    descripcion: string;
    // Precio en pesos chilenos (sin formato, el formato lo ve el componente)
    precio: number;
    // Stock disponible
    stock: number;
    // Categoría para agrupar (tortas, kuchen, etc.)
    categoria?: string;
    // URL de la imagen, por ahora puede ser una ruta local o un placeholder
    imagenUrl?: string;
}

export interface User {
    id: number;
    nombre: string;
    email: string;
    rol:"user"|"admin";
}