import type { Route } from "./+types/register";
import { Form, Input, Button, Card, Typography } from "antd";
import { NavLink, useNavigate, Link } from "react-router-dom";

import { useAuth } from "~/context/AuthContext";

const { Title } = Typography;

export function meta({}: Route.MetaArgs) {
    return [{ title: "Registro" }];
}

export default function RegisterPage() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const onFinish = async (values: any) => {
        const ok = await register(values.name, values.email, values.password);
        if (ok) navigate("/login");
    };

    return (
        <Card style={{ maxWidth: 400, margin: "40px auto" }}>
            <Title level={3} style={{ textAlign: "center", color: "#d63384" }}>
                Crear Cuenta
            </Title>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Nombre" name="name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Correo" name="email" rules={[{ required: true }]}>
                    <Input type="email" />
                </Form.Item>

                <Form.Item label="Contraseña" name="password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item label="Confirmar contraseña" name="confirm">
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit" block>
                    Registrarse
                </Button>

                <div style={{ marginTop: 15, textAlign: "center" }}>
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/login" style={{ color: "#d63384" }}>
                        Inicia sesión
                    </Link>
                </div>
            </Form>
        </Card>
    );
}
