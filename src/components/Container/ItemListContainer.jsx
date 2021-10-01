import React,{ useEffect, useState } from "react";
import ItemList from "./ItemList";
// import getFetch from "../../mocks/products";
import { getFirestore } from "../../services/getFirebase";
import { useParams } from "react-router";


const ItemListContainer = ({ mensaje}) => {
    
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const {idCategory} = useParams();
    const {idSubCategory} = useParams();
    useEffect (() =>{
        const dbQuery = getFirestore()

        dbQuery.collection('items').get()//llamo a todos los datos que tiene la coleccion 'items'
            .then( resp =>{
                setProducts(resp.docs.map(item => ({id: item.id, ...item.data()})))
            })
            .catch(err => console.log("ERROR => ",err))
            .finally(()=> setLoading(false))
        // const fetProducts = async() =>{


        //     if(idCategory){
        //        await getFetch

        //        .then(respuesta =>{
        //            setProducts(respuesta.filter(idcategory =>idcategory.category === idCategory))
        //            setLoading(false) 
        //         })
        //         .catch(error=>{
        //             console.log(error);
        //         })
        //         .finally(() =>setLoading(false))
        //             if(idSubCategory){
        //                 await getFetch
        //                 .then(respuesta =>{
        //                     setProducts(respuesta.filter(idsubcategory =>idsubcategory.subCategory === idSubCategory))
        //                     setLoading(false)  
        //                 })
        //                 .catch(error=>{
        //                     console.log(error);
        //                 })
        //                 .finally(() =>setLoading(false))
        //             }
        //     }else{
        //         await getFetch

        //        .then(respuesta =>{
        //            setProducts(respuesta)
        //            setLoading(false)  
        //         })
        //         .catch(error=>{
        //             console.log(error);
        //         })
        //         .finally(() =>setLoading(false))
        //     }
        // }
        // fetProducts()
    },[idCategory])
    
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