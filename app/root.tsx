import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    type LinksFunction,
} from "react-router-dom";
import appStyles from "./app.css?url";
import { Header } from "./components/organisms/header/Header";
import { Footer } from "./components/organisms/footer/Footer";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStyles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Pacifico&display=swap",
    },
    {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
    },
];

export default function Root() {
    return (
        <html lang="es">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <Meta />
            <Links />
            <link rel="shortcut icon" href="https://i.ibb.co/p6Wd9mp4/Icon.png" />
        </head>
        <body>
        <AuthProvider>
            <CartProvider>
                <div className="min-h-screen flex flex-col bg-crema">
                    <Header />
                    <main className="flex-1">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </CartProvider>
        </AuthProvider>
        <ScrollRestoration />
        <Scripts />
        </body>
        </html>
    );
}
