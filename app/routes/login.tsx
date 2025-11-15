import { Form, Input, Button, Card, Typography } from "antd";
import { useAuth } from "~/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    return (
        <Card style={{ maxWidth: 400, margin: "50px auto" }}>
            <Typography.Title level={3} style={{ color: "#d63384", textAlign: "center" }}>
                Iniciar sesión
            </Typography.Title>

            <Form
                layout="vertical"
                onFinish={async (v) => {
                    const ok = await login(v.email, v.password);
                    if (ok) navigate("/");
                }}
            >
                <Form.Item label="Correo" name="email" rules={[{ required: true }]}>
                    <Input type="email" />
                </Form.Item>

                <Form.Item label="Contraseña" name="password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit" block>
                    Entrar
                </Button>

                <div style={{ marginTop: 15, textAlign: "center" }}>
                    ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
                </div>
            </Form>
        </Card>
    );
}
