import * as React from "react";
import type { Product } from "~/types";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    add: (product: Product) => void;
    remove: (id: number) => void;
    clear: () => void;
}

const CartContext = React.createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = React.useState<CartItem[]>([]);

    const add = (product: Product) => {
        setCart((prev) => {
            const exist = prev.find((p) => p.id === product.id);
            if (exist) {
                return prev.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const remove = (id: number) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    const clear = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, add, remove, clear }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const c = React.useContext(CartContext);
    if (!c) throw new Error("useCart must be used inside CartProvider");
    return c;
};
