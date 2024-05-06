import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const clearCart = () => setItems([]);

    const removeItem = (id) => {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
    };

    const addItem = (item, count) => {
        const isExists = items.some((i) => i.id === item.id);
        
        if (isExists) {
            const updatedItems = items.map((i) => { 
                if (i.id === item.id) {
                    return {...i, count: i.count + count}; 
                } else {
                    return i;
                }
            });
            setItems(updatedItems);
        } else {
            setItems([...items, {...item, count}]);
        }
    };

    return (
        <CartContext.Provider value={{addItem, clearCart, items, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};
