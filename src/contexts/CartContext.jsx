import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [stockCheck, setStockCheck] = useState(true);
    

    const onAdd = (itemAdd, quantity) => {

        const exists = cartItems.some((i) => i.id === itemAdd.id)

        if (exists) {

            const updateItems = cartItems.map((i) => {
                if (i.id === itemAdd.id) {
                    
                    if (i.quantity + quantity <= i.stock) {
                        
                        return {
                            ...i,
                            quantity: i.quantity + quantity,
                        };
                    } else {
                        setStockCheck(false)
                        return i;
                    }
                } else {
                    return i;
                }
            });
            setCartItems(updateItems);
        } else {
            setCartItems((prev) => {
                return [...prev, { ...itemAdd, quantity }];
            });
        }

    };

    const onRemove = (id) => {
        const filterCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(filterCartItems);
    }

    const clear = () => setCartItems([]);

    return <CartContext.Provider value={{ cartItems, clear, onAdd, onRemove, stockCheck, setStockCheck }}>{children}</CartContext.Provider>
};