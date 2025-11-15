/**
 * Define la estructura interna de los usuarios demo, incluyendo la contraseña
 * SÓLO para fines de simulación de login.
 * En una app real, esto estaría en una base de datos hasheado.
 */
interface DemoUser {
  email: string;
  password: string; // <-- Solo para el mock
  nombre: string;
  fechaNacimiento: string;
  tipoUsuario: 'mayor' | 'estudiante_duoc' | 'regular';
}

/**
 * Usuarios de demostración (para pruebas de login o perfiles en la aplicación)
 * Tomado de data.js.
 */
export const USUARIOS_DEMO: DemoUser[] = [
    {
        email: "mayor@gmail.com",
        password: "password123",
        nombre: "Michael Rodríguez",
        fechaNacimiento: "1960-05-15",
        tipoUsuario: "mayor"
    },
    {
        email: "estudiante@duoc.cl",
        password: "password123",
        nombre: "Diego Muñoz",
        fechaNacimiento: "2002-08-22", // Ajusta esta fecha si quieres probar el cumpleaños
        tipoUsuario: "estudiante_duoc"
    },
    {
        email: "usuario@gmail.com",
        password: "password123",
        nombre: "Carmen Jiménez",
        fechaNacimiento: "1990-12-10",
        tipoUsuario: "regular"
    }
];