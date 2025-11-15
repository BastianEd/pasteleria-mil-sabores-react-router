import "antd/dist/reset.css"; // ESTILOS ANTD (OBLIGATORIO)
import type { Route } from "./+types/root";
import { Outlet, ScrollRestoration } from "react-router";
import stylesheet from "./app.css?url";

import { ConfigProvider } from "antd";
import Header from "~/components/organisms/header/Header";
import Footer from "~/components/organisms/footer/Footer";
import { AuthProvider } from "~/context/AuthContext";

export function links() {
    return [{ rel: "stylesheet", href: stylesheet }];
}

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mil Sabores Dulces" },
        { name: "description", content: "Pastelería artesanal" },
    ];
}

export default function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#d63384",
                    borderRadius: 8,
                    fontSize: 15,
                },
            }}
        >
            <AuthProvider>
                <div className="layout">
                    <Header />
                    <main className="content">
                        <Outlet />
                    </main>
                    <Footer />
                    <ScrollRestoration />
                </div>
            </AuthProvider>
        </ConfigProvider>
    );
}
