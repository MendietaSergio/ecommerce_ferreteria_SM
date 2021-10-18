import React,{ createContext, useContext, useState } from "react";
//importar funcion que devuelva la fecha
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../services/getFirebase";

const CartContext = createContext()

export const CartContextUse = () =>{
    return useContext(CartContext)
}

export const  CartContextProvider = ({children}) => {
    const [cart, setCart ] = useState([])
    const [orderId, setOrderId ] = useState()
    const orders = (formData, priceTotal) =>{
        let order = {};

        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = formData;
        order.total = priceTotal;
        order.items = cart.map((cartItem) =>{
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity
            return {id, title, price}
        })
        const db = getFirestore();
        db.collection("orders")
            .add(order)
            .then(({id}) => {
                console.log("id cartContext ",id);
                setOrderId(id)
                console.log("orderId cartContext ", orderId);
            })
        
        const itemsToUpdate = db.collection("items").where(firebase.firestore.FieldPath.documentId(),"in",cart.map((i)=> i.item.id))
        const batch = db.batch();
        itemsToUpdate
            .get()
            .then((collection) =>{
                collection.docs.forEach((docSnapshot) =>{
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cart.find((item) => item.item.id === docSnapshot.id).quantity,
                    })
                })
                batch.commit().then((res => {

                }))
            })
    }
    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            const updateQty = [...cart];
            //si el item esta, suma su cantidad
            updateQty.map(element => {
                if(element.item.id === item.id){
                    element.quantity = element.quantity + quantity
                }
                return element;
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

    return(
        <CartContext.Provider value = {{cart, addItem, clear, removeItem, iconCart, orders, orderId, setOrderId }}>
            {children}
        </CartContext.Provider>
    )
}