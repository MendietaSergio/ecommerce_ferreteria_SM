import React,{ useEffect, useState } from "react";
import ItemList from "./ItemList";
import getFetch from "../../mocks/products";



const ItemListContainer = ({ mensaje}) => {
    
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect (() =>{
        getFetch
        .then(res =>{
            setProducts(res)
            setLoading(false)
        console.log(res);

        })
    },[])
    
    return (
        <>
            <div className="container">
                <h1 className="text-center my-4">{mensaje}</h1>

                { loading ? 
                <h2 className="text-center my-4">Cargando...</h2>
                :<ItemList products={products} />   }
                
            </div>
        </>
    )
}

export default ItemListContainer;