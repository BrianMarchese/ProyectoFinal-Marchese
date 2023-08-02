import { createContext, useState } from "react";

export const CarContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) =>{

        if(!isIncart(item.id)){
            setCart([...cart, {...item, quantity}])
        }else{
            setCart(cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity:prod.quantity + quantity}
                }else{
                    return prod
                }
            }))
        }

    }

    const removeItem = (itemId) =>{
        const CartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(CartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isIncart = () =>{
        setCart([])
    }

    const precioTotal = () => {
        return  cart.reduce(
        (acc, item) => acc + item.precio * item.quantity,
        0
    );
    }

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <CarContext.Provider value={{cart, precioTotal, totalQuantity, addItem, removeItem, clearCart}}>
            {children}
        </CarContext.Provider>
    );
};