import type { Route } from "./+types/contact"; // (Necesitarás crear este archivo)
import { Input } from "~/components/atoms/input/Input";
import { Button } from "~/components/atoms/button/Button";
import { useState } from "react";

// (Crea un archivo vacío en app/routes/+types/contact.ts para que esto funcione)

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contacto - Mil Sabores" },
  ];
}

/**
 * Componente de Página: Contacto
 *
 * Muestra el formulario de contacto e información
 * de la tienda (dirección, teléfono, etc.).
 */
export default function ContactPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    alert(`Mensaje enviado por ${nombre} (${email}):\n\n${mensaje}`);
    // Limpiamos el formulario
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-pacifico text-center text-chocolate mb-12">
        Contáctanos
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Columna 1: Formulario de Contacto */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-pacifico text-chocolate mb-6">
            Envíanos un Mensaje
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              id="contact-nombre" label="Nombre" type="text"
              value={nombre} onChange={(e) => setNombre(e.target.value)} required
            />
            <Input
              id="contact-email" label="Email" type="email"
              value={email} onChange={(e) => setEmail(e.target.value)} required
            />
            <div>
              <label htmlFor="contact-mensaje" className="block text-sm font-semibold text-marron mb-2">
                Mensaje
              </label>
              <textarea
                id="contact-mensaje"
                rows={5}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-rosa rounded-lg bg-crema focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
              ></textarea>
            </div>
            <Button type="submit" variant="primary" fullWidth>
              <i className="fas fa-paper-plane"></i>
              Enviar Mensaje
            </Button>
          </form>
        </div>

        {/* Columna 2: Información de Contacto y FAQ */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-pacifico text-chocolate mb-6">
            Información de Contacto
          </h3>
          
          <div className="space-y-6">
            <InfoItem icon="fa-map-marker-alt" title="Dirección">
              Av. Providencia 1234, Santiago, Chile
            </InfoItem>
            <InfoItem icon="fa-phone" title="Teléfono">
              +56 2 2345 6789
            </InfoItem>
            <InfoItem icon="fa-envelope" title="Email">
              contacto@milsabores.cl
            </InfoItem>
            <InfoItem icon="fa-clock" title="Horarios">
              Lun - Vie: 8:00 - 20:00 <br />
              Sáb - Dom: 9:00 - 18:00
            </InfoItem>
          </div>

          {/* FAQ (Preguntas Frecuentes) */}
          <div className="mt-10">
            <h4 className="text-xl font-pacifico text-chocolate mb-4">
              Preguntas Frecuentes
            </h4>
            <div className="space-y-3">
              <div className="bg-crema/50 p-4 rounded-lg">
                <strong className="text-marron">¿Hacen entregas a domicilio?</strong>
                <p className="text-sm text-gray-700">Sí, realizamos entregas en toda la Región Metropolitana.</p>
              </div>
              <div className="bg-crema/50 p-4 rounded-lg">
                <strong className="text-marron">¿Con cuánta anticipación debo pedir?</strong>
                <p className="text-sm text-gray-700">Para tortas especiales, recomendamos 48 horas de anticipación.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pequeño componente helper local para la info de contacto
const InfoItem: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex gap-4">
    <i className={`fas ${icon} text-dorado text-2xl w-8 text-center mt-1`}></i>
    <div>
      <strong className="text-chocolate text-lg block">{title}</strong>
      <p className="text-marron">{children}</p>
    </div>
  </div>
);