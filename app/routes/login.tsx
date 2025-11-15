import { useState } from "react";
import type { Route } from "./+types/login"; // (Necesitarás crear este archivo)
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";
import { Input } from "~/components/atoms/input/Input";
import { Button } from "~/components/atoms/button/Button";
import { USUARIOS_DEMO } from "~/data";

// (Crea un archivo vacío en app/routes/+types/login.ts para que esto funcione)

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Iniciar Sesión - Mil Sabores" },
  ];
}

/**
 * Componente de Página: Login
 *
 * Formulario de inicio de sesión.
 * Recrea la sección '#login' de index.html.
 */
export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  // Estados para los campos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    setError(null); // Limpia errores anteriores

    try {
      const user = await login(email, password);
      
      if (user) {
        // ¡Éxito! Navegamos a la página de inicio
        navigate("/");
      } else {
        // Error de credenciales
        setError("Email o contraseña incorrectos.");
        setPassword(""); // Limpia la contraseña
      }
    } catch (err: any) {
      setError(err.message || "Ocurrió un error inesperado.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-pacifico text-center text-chocolate mb-8">
          Iniciar Sesión
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Accede a tu cuenta y disfruta de tus beneficios.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            id="login-email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id="login-password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {/* Mostramos el error si existe */}
          {error && (
            <p className="text-red-600 text-center">{error}</p>
          )}

          <Button type="submit" variant="primary" fullWidth>
            <i className="fas fa-sign-in-alt"></i>
            Iniciar Sesión
          </Button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="font-semibold text-chocolate hover:underline">
            Regístrate aquí
          </Link>
        </p>

        {/* Información de Usuarios Demo */}
        <div className="mt-10 bg-salmon/30 p-4 rounded-lg">
          <h4 className="text-lg font-pacifico text-chocolate mb-4 text-center">
            👥 Usuarios de Prueba
          </h4>
          <div className="space-y-3 text-sm">
            {USUARIOS_DEMO.map(user => (
              <div key={user.email} className="bg-white/50 p-3 rounded">
                <p><strong>{user.nombre}</strong> ({user.tipoUsuario})</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Pass:</strong> {user.password}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}