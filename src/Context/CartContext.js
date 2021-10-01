import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartContextUse = () =>{
    return useContext(CartContext)
}

export const  CartContextProvider = ({children}) => {
    const [cart, setCart ] = useState([])

    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            const updateQty = [...cart];
            //si el item esta, suma su cantidad
            updateQty.map(element => {
                if(element.item.id === item.id){
                    element.quantity = element.quantity + quantity
                }
            })
            setCart(updateQty)
        } else {
            setCart([...cart, {item, quantity}])
        }
    }
    //SI ESTA EN EL CARRITO, SUMO SU CANTIDAD
    const isInCart = (id) => cart.find(element => element.item.id === id)
    //BORRAR DE LA LISTA DEL CARRITO
    const clear = () => setCart([])
    //EN BASE A SU ID NO LO GUARDO EN LA LISTA, REMUEVO EL QUE ES IGUAL AL ID
    const removeItem = (id) =>{
        const cartFilter = cart.filter(element => element.item.id !== id)
        setCart(cartFilter)
    }
    const iconCart =() =>{
        return cart.reduce((acum, valor)=> acum + valor.quantity,0)
    }
    console.log("carrito: ",cart);
    return(
        <CartContext.Provider value = {{cart, addItem, clear, removeItem, iconCart}}>
            {children}
        </CartContext.Provider>
    )
}