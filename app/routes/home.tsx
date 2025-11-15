import type { Route } from "./+types/home";
import { Button } from "~/components/atoms/button/Button";
import { ProductCard } from "~/components/molecules/productCard/ProductCard";
import { PRODUCTOS } from "~/data";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Pastelería Mil Sabores - Inicio" },
        { name: "description", content: "Celebrando 50 años de tradición y dulzura." },
    ];
}

export default function Home() {
    const productosDestacados = PRODUCTOS.filter(p => p.destacado);

    return (
        <div>
            {/* === Sección Hero === */}
            <section className="hero-section">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Columna de Texto */}
                        <div>
                            <h2 className="hero-title mb-4">
                                Celebrando 50 años de tradición
                            </h2>
                            <p className="text-xl italic mb-8" style={{color: 'var(--color-marron-oscuro)'}}>
                                Desde 1975 endulzando la vida de las familias chilenas
                            </p>

                            {/* Features */}
                            <div className="space-y-3 mb-10">
                                <div className="feature-card">
                                    <i className="fas fa-birthday-cake"></i>
                                    <span>Tortas personalizadas para toda ocasión</span>
                                </div>
                                <div className="feature-card">
                                    <i className="fas fa-leaf"></i>
                                    <span>Opciones sin gluten y veganas disponibles</span>
                                </div>
                                <div className="feature-card">
                                    <i className="fas fa-truck"></i>
                                    <span>Entregas en toda la Región Metropolitana</span>
                                </div>
                                <div className="feature-card">
                                    <i className="fas fa-heart"></i>
                                    <span>Hechos con amor y tradición familiar</span>
                                </div>
                            </div>

                            <Button
                                to="/products"
                                className="btn-chocolate text-lg"
                            >
                                <i className="fas fa-store"></i>
                                <span>Ver Productos</span>
                            </Button>
                        </div>

                        {/* Columna de Imagen */}
                        <div className="flex justify-center items-center">
                            <img
                                src="../../public/assets/img/Logo50Aniversario.png"
                                alt="Logo 50 Aniversario"
                                className="w-full max-w-md rounded-3xl shadow-sweet-lg"
                                style={{maxWidth: '500px'}}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* === Productos Destacados === */}
            <section className="py-16">
                <div className="container">
                    <h3 className="section-title">
                        Productos Destacados
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {productosDestacados.map((producto) => (
                            <ProductCard key={producto.codigo} product={producto} />
                        ))}
                    </div>
                </div>
            </section>

            {/* === Información Empresa === */}
            <section className="bg-gradient-info py-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="info-card">
                            <h4>Nuestra Misión</h4>
                            <p style={{color: 'var(--color-marron-oscuro)'}}>
                                Ofrecer una experiencia dulce y memorable, proporcionando productos de alta calidad para todas las ocasiones.
                            </p>
                        </div>
                        <div className="info-card">
                            <h4>Nuestra Visión</h4>
                            <p style={{color: 'var(--color-marron-oscuro)'}}>
                                Convertirnos en la tienda online líder de repostería en Chile, conocida por nuestra innovación y calidad.
                            </p>
                        </div>
                        <div className="info-card">
                            <h4>Nuestra Historia</h4>
                            <p style={{color: 'var(--color-marron-oscuro)'}}>
                                Desde 1975, mantenemos la tradición familiar, incluso obteniendo un Récord Guinness en 1995.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
