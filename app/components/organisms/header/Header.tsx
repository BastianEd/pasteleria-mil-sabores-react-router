import { Layout, Menu } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "~/context/AuthContext";
import Button from "~/components/atoms/button/Button";

const { Header: AntHeader } = Layout;

export default function Header() {
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();
    const isLoggedIn = !!currentUser;

    return (
        <AntHeader
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                borderBottom: "1px solid #eee",
            }}
        >
            <Link
                to="/"
                style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "#d63384",
                }}
            >
                Mil Sabores Dulces
            </Link>

            <Menu
                mode="horizontal"
                style={{ flex: 1, marginLeft: 40, border: "none" }}
                items={[
                    { key: "home", label: <NavLink to="/">Inicio</NavLink> },
                    { key: "products", label: <NavLink to="/products">Productos</NavLink> },
                    { key: "cart", label: <NavLink to="/cart">Carrito</NavLink> },
                    { key: "contact", label: <NavLink to="/contact">Contacto</NavLink> },
                ]}
            />

            {isLoggedIn ? (
                <div style={{ display: "flex", gap: 10 }}>
                    <span>Hola, {currentUser.nombre}</span>
                    <Button onClick={() => logout()}>Salir</Button>
                </div>
            ) : (
                <div style={{ display: "flex", gap: 10 }}>
                    <Button onClick={() => navigate("/login")}>Iniciar sesión</Button>
                    <Button type="primary" onClick={() => navigate("/register")}>
                        Registrarse
                    </Button>
                </div>
            )}
        </AntHeader>
    );
}
