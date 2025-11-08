import * as React from "react";
import type { User } from "~/types";

// (Aquí irían los USUARIOS_DEMO de data.js, o mejor, el servicio api.ts)
// Por simplicidad, lo manejamos aquí por ahora.

interface AuthContextType {
    currentUser: User | null;
    login: (email: string, pass: string) => Promise<boolean>;
    logout: () => void;
    // TODO: Implementar registro
    // register: (...) => Promise<boolean>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                          children,
                                                                      }) => {
    // El estado del usuario logueado
    const [currentUser, setCurrentUser] = React.useState<User | null>(null);

    // Cuando conectes tu API NestJS, reemplazarás esta función
    const login = async (email: string, pass: string): Promise<boolean> => {
        // Lógica mock (reemplaza auth.js)
        // const usuarioDemo = USUARIOS_DEMO.find(u => u.email === email && u.password === pass);

        // Simulación de API (cuando tengas NestJS, llamarás a axios aquí)
        if (email === "estudiante@duoc.cl" && pass === "password123") {
            const user: User = {
                email: "estudiante@duoc.cl",
                nombre: "Diego Muñoz",
                fechaNacimiento: "2002-08-22",
                tipoUsuario: "estudiante_duoc",
            };
            setCurrentUser(user);
            // Guardar en localStorage para persistir
            localStorage.setItem("currentUser", JSON.stringify(user));
            return true;
        }
        return false;
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
    };

    // Efecto para cargar el usuario desde localStorage al iniciar
    React.useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    const value = { currentUser, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
};