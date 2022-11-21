import { createContext, useState } from "react";
import { act } from "react-dom/test-utils";
import Item from "../components/Home/ItemDetail/ItemDetail";

export const CartContext = createContext({
    cart: [],
    isInCart: () => { },
    addToCart: () => { },
    deleteItem: () => { },
    removeList: () => { },
    totalPrice: () => { },
    totalProducts: () => { }
}
);

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);


    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const addToCart = (obj, quantity) => {
      if(isInCart(obj.id)) {
        setCart(cart.map(product => {
            return product.id === obj.id ? { ...product, quantity: product.quantity + quantity} : product
        }))
      }else {
        setCart([...cart, {...obj, quantity}]);
      }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, prodActual) => acumulador + prodActual.quantity, 0);

    const deleteItem = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }
    const removeList = () => setCart([])

    const value = {
        cart,
        addToCart,
        isInCart,
        deleteItem,
        removeList,
        totalPrice,
        totalProducts  
    };
    return (<CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
    )
}