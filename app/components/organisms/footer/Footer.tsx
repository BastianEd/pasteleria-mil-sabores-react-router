import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

export default function Footer() {
    return (
        <AntFooter style={{ textAlign: "center", background: "#fafafa" }}>
            © {new Date().getFullYear()} Mil Sabores Dulces — Todos los derechos reservados.
        </AntFooter>
    );
}
