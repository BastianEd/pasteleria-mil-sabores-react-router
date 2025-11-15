import * as React from "react";
import { Footer } from "../organisms/footer/Footer";
import { Header } from "../organisms/header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * Componente Plantilla: MainLayout
 *
 * Define la estructura visual principal de la aplicación.
 * Incluye el Header, un 'main' para el contenido de la página, y el Footer.
 * 'children' será el componente de la ruta activa (ej: home.tsx, products.tsx).
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Cabecera Fija */}
      <Header />

      {/* 2. Contenido Principal (variable) */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 3. Pie de Página */}
      <Footer />
      
      {/* Aquí podríamos un componente global de Notificaciones 
        (reemplazo de 'notification' de utils.js)
      */}
      {/* <NotificationSystem /> */}
    </div>
  );
};