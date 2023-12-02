import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const clear = () => setCartItems([]);

    const onAdd = (itemAdd) => 
        setCartItems((prev) => {
            return [...prev, itemAdd];
        });

        console.log(cartItems);

    return <CartContext.Provider value={{ cartItems, clear, onAdd }}>{children}</CartContext.Provider>
};