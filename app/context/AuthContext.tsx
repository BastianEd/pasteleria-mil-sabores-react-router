import * as React from "react";
import type { User, TipoUsuario } from "~/types";
import { USUARIOS_DEMO } from "~/data/users";
import { calcularEdad, determinarTipoUsuario } from "~/lib/utils";

/**
 * Definimos la "forma" de nuestro contexto de autenticación.
 * Esto es lo que otros componentes podrán "consumir" (usar).
 */
interface AuthContextType {
  currentUser: User | null; // El usuario logueado, o null si no hay nadie
  login: (email: string, pass: string) => Promise<User | null>;
  logout: () => void;
  register: (data: Omit<User, 'tipoUsuario' | 'email'> & { email: string; pass: string }) => Promise<User | null>;
  // Lista de usuarios (para el mock, en una app real no estaría aquí)
  usuariosRegistrados: (User & { password: string })[];
}

// 1. Creamos el Contexto
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

/**
 * 2. Creamos el Proveedor (Provider)
 * Este componente envolverá nuestra aplicación y "proveerá" el estado
 * y las funciones a todos sus componentes hijos.
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Estado para guardar el usuario actual
  const [currentUser, setCurrentUser] = React.useState<User | null>(() => {
    // Intentamos cargar el usuario desde localStorage al iniciar
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem("currentUser");
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

  // Estado para la lista de usuarios (simula la base de datos)
  const [usuariosRegistrados, setUsuariosRegistrados] = React.useState(USUARIOS_DEMO);

  /**
   * Función de Login
   * Simula la lógica de auth.js procesarLogin()
   */
  const login = async (email: string, pass: string): Promise<User | null> => {
    const usuarioEncontrado = usuariosRegistrados.find(
      (u) => u.email === email && u.password === pass
    );

    if (usuarioEncontrado) {
      // Creamos el objeto User público (sin la contraseña)
      const user: User = {
        email: usuarioEncontrado.email,
        nombre: usuarioEncontrado.nombre,
        fechaNacimiento: usuarioEncontrado.fechaNacimiento,
        tipoUsuario: usuarioEncontrado.tipoUsuario,
      };

      setCurrentUser(user); // Actualizamos el estado
      localStorage.setItem("currentUser", JSON.stringify(user)); // Guardamos en localStorage
      return user;
    }
    return null; // Si no se encuentra, retornamos null
  };

  /**
   * Función de Logout
   */
  const logout = () => {
    setCurrentUser(null); // Borramos el usuario del estado
    localStorage.removeItem("currentUser"); // Borramos de localStorage
  };

  /**
   * Función de Registro
   * Simula la lógica de auth.js procesarRegistro()
   */
  const register = async (data: Omit<User, 'tipoUsuario'> & { email: string; pass: string }): Promise<User | null> => {
    // Verificamos si el email ya existe
    if (usuariosRegistrados.find(u => u.email === data.email)) {
      throw new Error("Este email ya está registrado");
    }

    // Determinamos el tipo de usuario (aseguramos el tipo)
    let tipoUsuario: TipoUsuario = determinarTipoUsuario(data.email);
    // Si es mayor de 60, se actualiza el tipo
    if (calcularEdad(data.fechaNacimiento) >= 60) {
        tipoUsuario = 'mayor';
    }

    const nuevoUsuarioDemo = {
      email: data.email,
      password: data.pass, // En una app real, hashearíamos esto
      nombre: data.nombre,
      fechaNacimiento: data.fechaNacimiento,
      tipoUsuario: tipoUsuario,
    };

    const nuevoUsuario: User = {
      email: data.email,
      nombre: data.nombre,
      fechaNacimiento: data.fechaNacimiento,
      tipoUsuario: tipoUsuario,
    };

    // Añadimos el nuevo usuario a nuestra "base de datos" simulada
    setUsuariosRegistrados(prevUsuarios => [...prevUsuarios, nuevoUsuarioDemo]);

    // Logueamos al usuario automáticamente
    setCurrentUser(nuevoUsuario);
    localStorage.setItem("currentUser", JSON.stringify(nuevoUsuario));
    return nuevoUsuario;
  };

  // 3. Definimos el valor que proveerá el contexto
  const value = { currentUser, login, logout, register, usuariosRegistrados };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * 4. Creamos un Hook personalizado (Opcional pero recomendado)
 * Esto facilita el uso del contexto en otros componentes.
 * Lo crearemos en app/hooks/useAuth.ts
 */
export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext debe ser usado dentro de un AuthProvider");
  }
  return context;
};