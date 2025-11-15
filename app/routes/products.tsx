import type { Route } from "./+types/products";
import { Row, Col, Card, Typography } from "antd";
import Button from "~/components/atoms/button/Button";
import { PRODUCTOS_DEMO } from "~/data/mocks";

const { Title, Paragraph } = Typography;

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Productos" },
        { name: "description", content: "Catálogo de pasteles" },
    ];
}

export default function ProductsPage() {
    return (
        <div style={{ maxWidth: 1200, margin: "auto" }}>
            <Title level={2} style={{ color: "#d63384" }}>
                Nuestros Productos
            </Title>

            <Row gutter={[20, 20]}>
                {PRODUCTOS_DEMO.map((p) => (
                    <Col xs={24} sm={12} md={8} key={p.id}>
                        <Card
                            hoverable
                            cover={
                                <img
                                    src={p.imagenUrl}
                                    alt={p.nombre}
                                    style={{ height: 220, objectFit: "cover" }}
                                />
                            }
                        >
                            <Card.Meta title={p.nombre} description={p.descripcion} />

                            <Paragraph strong style={{ marginTop: 10 }}>
                                ${p.precio.toLocaleString("es-CL")}
                            </Paragraph>

                            <Button type="primary" fullWidth>
                                Agregar al carrito
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
