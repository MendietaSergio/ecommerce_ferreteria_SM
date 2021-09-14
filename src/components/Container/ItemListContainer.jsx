import React,{ useEffect, useState } from "react";
import ItemList from "./ItemList";
import getFetch from "../../mocks/products";


const ItemListContainer = ({ mensaje}) => {
    
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect (() =>{
        const fetProducts = async() =>{
           await getFetch
            .then(res =>{
                setProducts(res)
                setLoading(false)
                console.log(res);    
            })
            .catch(error=>{
                console.log(error);
            })
            .finally(() =>setLoading(false))
        }
        fetProducts()
    },[])
    
    return (
        <>
            <div className="container">
                <h1 className="text-center my-4">{mensaje}</h1>

                { loading ?
                (<>
                <h2 className="text-center my-4">Cargando <i className="fas fa-spinner fa-pulse" /></h2>
                
                </>)
                :<ItemList products={products} />   }
                
            </div>
        </>
    )
}

export default ItemListContainer;