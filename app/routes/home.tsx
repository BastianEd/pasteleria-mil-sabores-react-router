import type { Route } from "./+types/home";
import { Row, Col, Card, Typography } from "antd";
import Button from "~/components/atoms/button/Button";
import { PRODUCTOS_DEMO } from "~/data/mocks";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Inicio - Mil Sabores Dulces" },
        { name: "description", content: "Pastelería artesanal chilena." },
    ];
}

export default function Home() {
    const destacados = PRODUCTOS_DEMO.slice(0, 3);

    return (
        <div style={{ maxWidth: 1100, margin: "auto" }}>
            <Row gutter={40} align="middle" style={{ marginTop: 20, marginBottom: 40 }}>
                <Col xs={24} md={12}>
                    <Title level={2} style={{ color: "#d63384" }}>
                        Mil Sabores Dulces
                    </Title>

                    <Paragraph>
                        Pastelería artesanal con más de 50 años de tradición. Tortas, kuchen,
                        pie de limón y más.
                    </Paragraph>

                    <Paragraph>Haz tu pedido y disfruta algo rico.</Paragraph>

                    <Button type="primary" fullWidth>
                        <Link to="/products" style={{ color: "#fff" }}>
                            Ver productos
                        </Link>
                    </Button>
                </Col>

                <Col xs={24} md={12}>
                    <div
                        style={{
                            background: "#ffe6f2",
                            height: 260,
                            borderRadius: 12,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#d63384",
                        }}
                    >
                        Imagen de tus tortas ✨
                    </div>
                </Col>
            </Row>

            <Title level={3}>Productos Destacados</Title>

            <Row gutter={[20, 20]}>
                {destacados.map((p) => (
                    <Col xs={24} sm={12} md={8} key={p.id}>
                        <Card
                            hoverable
                            cover={
                                <img
                                    src={p.imagenUrl}
                                    style={{ height: 180, objectFit: "cover" }}
                                    alt={p.nombre}
                                />
                            }
                        >
                            <Card.Meta title={p.nombre} description={p.descripcion} />
                            <Paragraph strong style={{ marginTop: 10 }}>
                                ${p.precio.toLocaleString("es-CL")}
                            </Paragraph>

                            <Button type="primary" fullWidth>
                                <Link to="/products" style={{ color: "#fff" }}>
                                    Ver más
                                </Link>
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
