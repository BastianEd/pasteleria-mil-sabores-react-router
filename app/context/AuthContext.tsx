// app/context/AuthContext.tsx
import * as React from "react";
import type { User } from "~/types";
import { USUARIOS_DEMO } from "~/data/mocks";

// Tipo de datos que voy a compartir desde el contexto
interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    register: (name: string, email: string, password: string) => Promise<boolean>;
}

// Creo el contexto. Parte como undefined para obligar a usar el hook useAuth
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

// Clave que voy a usar para guardar el usuario en el localStorage
const STORAGE_KEY = "mil-sabores-user";

// Provider que envuelve a toda la app y maneja el usuario logueado
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Estado con el usuario actual (null si no hay sesión)
    const [currentUser, setCurrentUser] = React.useState<User | null>(null);

    // Al montar el provider, intento leer el usuario desde el localStorage
    React.useEffect(() => {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            if (data) {
                const user: User = JSON.parse(data);
                setCurrentUser(user);
            }
        } catch (error) {
            console.error("Error leyendo usuario desde localStorage:", error);
            setCurrentUser(null);
        }
    }, []);

    // Función para "loguearse" (versión mock sin backend)
    const login = async (email: string, password: string): Promise<boolean> => {
        // Ojo: esta versión NO valida contra una base real, es solo para pruebas de frontend.
        // La idea es después reemplazar esto por una llamada a la API NestJS.

        // Busco si el correo coincide con uno de los usuarios demo
        const userDemo = USUARIOS_DEMO.find((u) => u.email === email);

        // Para no complicarme con contraseñas en esta etapa, acepto cualquier password
        const userToSave: User =
            userDemo ??
            ({
                // Si no está en los demos, invento un usuario simple tipo "cliente"
                id: Date.now(),
                nombre: email.split("@")[0] || "Cliente",
                email,
                rol: "user",
            } satisfies User);

        // Guardo el usuario en el localStorage y en el estado
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userToSave));
        setCurrentUser(userToSave);

        // Retorno true para que la pantalla sepa que todo salió bien
        return true;
    };

    // Función para "registrarse" (también mock)
    const register = async (
        name: string,
        email: string,
        password: string,
    ): Promise<boolean> => {
        // Acá en la versión real llamaría a POST /auth/register
        // Por ahora solo simulo que el registro fue exitoso y no guardo nada más
        console.log("Usuario registrado (mock):", { name, email, password });

        // Podría guardar directamente el usuario como logueado,
        // pero prefiero que después de registrarse vaya al login.
        return true;
    };

    // Función para cerrar sesión
    const logout = () => {
        // Elimino la info del usuario del localStorage
        localStorage.removeItem(STORAGE_KEY);
        // Limpio el estado global
        setCurrentUser(null);
    };

    // Valor que van a usar los componentes a través del hook useAuth
    const value: AuthContextType = {
        currentUser,
        login,
        logout,
        register,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook para usar el contexto de forma más cómoda
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        // Si alguien usa useAuth fuera del AuthProvider, tiro error para cachar el problema altiro
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};
