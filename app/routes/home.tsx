import type { Route } from "./+types/home";
import { Button } from "~/components/atoms/button/Button";
import { ProductCard } from "~/components/molecules/productCard/ProductCard";
import { PRODUCTOS } from "~/data";

/**
 * Define los metadatos de la página (título, descripción)
 * para SEO y la pestaña del navegador.
 */
export function meta({}: Route.MetaArgs) {
    return [
        { title: "Pastelería Mil Sabores - Dulces momentos desde 1975" },
        {
            name: "description",
            content: "50 años endulzando la vida de las familias chilenas con tortas, postres y productos de repostería de la más alta calidad."
        },
        {
            name: "keywords",
            content: "pastelería, tortas, postres, Chile, repostería, cumpleaños, eventos, sin gluten, vegano"
        }
    ];
}

/**
 * Componente de Página: home
 *
 * Esta es la página de inicio que muestra:
 * - Sección hero con información de 50 años
 * - Productos destacados
 * - Información de la empresa (misión, visión, historia)
 */
export default function home() {
    // Filtramos solo los productos destacados
    const productosDestacados = PRODUCTOS.filter(p => p.destacado);

    return (
        <div>
            {/*
        ============================================
        SECCIÓN HERO
        ============================================
        Área principal con gradiente rosa-crema
      */}
            <section className="gradient-hero py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/*
              === COLUMNA DE TEXTO ===
              Título, subtítulo y características principales
            */}
                        <div className="space-y-6">
                            {/* Título principal con fuente Pacifico */}
                            <h2 className="font-pacifico text-4xl md:text-5xl lg:text-[3.5rem] text-chocolate leading-tight">
                                Celebrando 50 años de tradición
                            </h2>

                            {/* Subtítulo en cursiva */}
                            <p className="text-lg md:text-xl text-marron italic">
                                Desde 1975 endulzando la vida de las familias chilenas
                            </p>

                            {/*
                === CARACTERÍSTICAS PRINCIPALES ===
                Cajas con efecto glassmorphism
              */}
                            <div className="space-y-3">
                                {/* Feature 1: Tortas personalizadas */}
                                <div className="feature-box">
                                    <i className="fas fa-birthday-cake text-2xl text-dorado"></i>
                                    <span className="text-marron">Tortas personalizadas para toda ocasión</span>
                                </div>

                                {/* Feature 2: Opciones especiales */}
                                <div className="feature-box">
                                    <i className="fas fa-leaf text-2xl text-dorado"></i>
                                    <span className="text-marron">Opciones sin gluten y veganas disponibles</span>
                                </div>

                                {/* Feature 3: Entregas */}
                                <div className="feature-box">
                                    <i className="fas fa-truck text-2xl text-dorado"></i>
                                    <span className="text-marron">Entregas en toda la Región Metropolitana</span>
                                </div>

                                {/* Feature 4: Tradición familiar */}
                                <div className="feature-box">
                                    <i className="fas fa-heart text-2xl text-dorado"></i>
                                    <span className="text-marron">Hechos con amor y tradición familiar</span>
                                </div>
                            </div>

                            {/* Botón Call-to-Action */}
                            <Button to="/products" className="btn-primary text-lg">
                                <i className="fas fa-store"></i>
                                <span>Ver Productos</span>
                            </Button>
                        </div>

                        {/*
              === COLUMNA DE IMAGEN ===
              Logo del 50 aniversario
            */}
                        <div className="flex justify-center items-center">
                            <div className="relative">
                                <img
                                    src="/assets/img/Logo50Aniversario.png"
                                    alt="50 Años Pastelería Mil Sabores"
                                    className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-fuerte"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*
        ============================================
        SECCIÓN PRODUCTOS DESTACADOS
        ============================================
        Grid con los productos marcados como destacados
      */}
            <section className="py-16 bg-crema">
                <div className="container mx-auto px-4">
                    {/* Título de la sección */}
                    <h3 className="section-title">
                        Productos Destacados
                    </h3>

                    {/* Grid responsive de productos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {productosDestacados.map((producto) => (
                            <ProductCard key={producto.codigo} product={producto} />
                        ))}
                    </div>
                </div>
            </section>

            {/*
        ============================================
        SECCIÓN INFORMACIÓN DE LA EMPRESA
        ============================================
        Misión, Visión e Historia con gradiente menta-salmon
      */}
            <section className="gradient-info py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/*
              === TARJETA: NUESTRA MISIÓN ===
            */}
                        <div className="info-card">
                            <h4 className="font-pacifico text-2xl text-chocolate mb-4">
                                Nuestra Misión
                            </h4>
                            <p className="text-marron leading-relaxed">
                                Ofrecer una experiencia dulce y memorable a nuestros clientes,
                                proporcionando productos de repostería de alta calidad para todas las ocasiones.
                            </p>
                        </div>

                        {/*
              === TARJETA: NUESTRA VISIÓN ===
            */}
                        <div className="info-card">
                            <h4 className="font-pacifico text-2xl text-chocolate mb-4">
                                Nuestra Visión
                            </h4>
                            <p className="text-marron leading-relaxed">
                                Convertirnos en la tienda online líder de productos de repostería en Chile,
                                conocida por nuestra innovación y calidad.
                            </p>
                        </div>

                        {/*
              === TARJETA: NUESTRA HISTORIA ===
            */}
                        <div className="info-card">
                            <h4 className="font-pacifico text-2xl text-chocolate mb-4">
                                Nuestra Historia
                            </h4>
                            <p className="text-marron leading-relaxed">
                                Desde 1975, hemos mantenido la tradición familiar en la repostería,
                                incluso obteniendo un Récord Guinness en 1995.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
