import type { BlogPost } from '~/types';

/**
 * Blog de la página (secciones de artículos con tips, recetas e historia)
 * Tomado de data.js y tipado con nuestra interfaz 'BlogPost'.
 */
export const BLOG_ARTICULOS: BlogPost[] = [
    {
        id: 1,
        titulo: "Historia de la Repostería Chilena",
        categoria: "historia",
        contenido: "Descubre cómo ha evolucionado la repostería en Chile desde sus orígenes hasta nuestros días.",
        fecha: "2024-01-15",
        autor: "Chef Patricia Morales",
        imagen: "📚"
    },
    {
        id: 2,
        titulo: "Secretos para el Bizcocho Perfecto",
        categoria: "tips",
        contenido: "Aprende las técnicas profesionales para lograr un bizcocho esponjoso y delicioso cada vez.",
        fecha: "2024-01-20",
        autor: "Maestro Carlos Vega",
        imagen: "🎂"
    },
    {
        id: 3,
        titulo: "Receta Tradicional: Torta de Manjar",
        categoria: "recetas",
        contenido: "La receta familiar que hemos perfeccionado durante 50 años de tradición.",
        fecha: "2024-02-01",
        autor: "Abuela Rosa Sabores",
        imagen: "📝"
    },
    {
        id: 4,
        titulo: "Celebrando 50 Años de Dulzura",
        categoria: "eventos",
        contenido: "Un recorrido por los momentos más dulces de nuestra historia empresarial.",
        fecha: "2024-02-14",
        autor: "Familia Mil Sabores",
        imagen: "🎉"
    },
    {
        id: 5,
        titulo: "Técnicas de Decoración con Crema",
        categoria: "tips",
        contenido: "Conviértete en un experto decorando tortas con técnicas profesionales.",
        fecha: "2024-02-20",
        autor: "Chef Andrea Silva",
        imagen: "🌟"
    },
    {
        id: 6,
        titulo: "Brownies Sin Gluten: La Receta Perfecta",
        categoria: "recetas",
        contenido: "Disfruta de deliciosos brownies sin comprometer el sabor ni la textura.",
        fecha: "2024-03-01",
        autor: "Nutricionista María López",
        imagen: "🍫"
    }
];