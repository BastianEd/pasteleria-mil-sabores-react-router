import { useState } from "react";
import type { Route } from "./+types/register"; // (Necesitarás crear este archivo)
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";
import { Input } from "~/components/atoms/input/Input";
import { Button } from "~/components/atoms/button/Button";
import { validarEmail } from "~/lib/utils";

// (Crea un archivo vacío en app/routes/+types/register.ts para que esto funcione)

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Registro de Usuario - Mil Sabores" },
  ];
}

/**
 * Componente de Página: Registro
 *
 * Formulario de registro de nuevos usuarios.
 * Recrea la sección '#registro' de index.html.
 */
export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();

  // Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validaciones (como en auth.js)
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (!validarEmail(email)) {
      setError("Email debe ser @gmail.com, @duoc.cl o @profesor.duoc.cl");
      return;
    }

    try {
      const user = await register({
        nombre,
        email,
        pass: password,
        fechaNacimiento
      });
      
      if (user) {
        // ¡Éxito! Navegamos a la página de inicio
        navigate("/");
      }
    } catch (err: any) {
      setError(err.message || "Ocurrió un error inesperado.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-pacifico text-center text-chocolate mb-8">
          Registro de Usuario
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Únete a nuestra familia y disfruta de beneficios.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            id="reg-nombre" label="Nombre Completo" type="text"
            value={nombre} onChange={(e) => setNombre(e.target.value)} required
          />
          <Input
            id="reg-email" label="Email" type="email"
            value={email} onChange={(e) => setEmail(e.target.value)} required
          />
          <Input
            id="reg-fecha" label="Fecha de Nacimiento" type="date"
            value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required
          />
          <Input
            id="reg-password" label="Contraseña (mín. 6 caracteres)" type="password"
            value={password} onChange={(e) => setPassword(e.target.value)} required
          />
          <Input
            id="reg-confirm" label="Confirmar Contraseña" type="password"
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required
          />
          
          {error && (
            <p className="text-red-600 text-center">{error}</p>
          )}

          {/* Beneficios (como en index.html) */}
          <div className="bg-menta/30 p-4 rounded-lg text-marron">
            <h4 className="text-lg font-pacifico text-chocolate mb-3">🎁 Beneficios Exclusivos</h4>
            <ul className="list-none space-y-1 text-sm">
              <li><i className="fas fa-gift w-5 text-dorado"></i> Torta gratis en tu cumpleaños (estudiantes Duoc)</li>
              <li><i className="fas fa-percentage w-5 text-dorado"></i> 50% descuento (mayores de 60 años)</li>
              <li><i className="fas fa-tags w-5 text-dorado"></i> Descuentos especiales con códigos</li>
            </ul>
          </div>
          
          <Button type="submit" variant="primary" fullWidth>
            <i className="fas fa-user-plus"></i>
            Registrarse
          </Button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="font-semibold text-chocolate hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
}