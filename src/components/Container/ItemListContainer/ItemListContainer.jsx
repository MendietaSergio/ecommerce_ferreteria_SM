import React,{ useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getFirestore } from '../../../services/getFirebase'
import { useParams } from "react-router";


const ItemListContainer = ({ mensaje}) => {
    
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const {idCategory} = useParams();
    const {idSubCategory} = useParams();
    useEffect (() =>{
        const dbQuery = getFirestore()
        // const dbQueryFilter HACER CONDICIONAL 
        const fetProducts = async() =>{
            if(idCategory){
                //aca hago algo con el parametro de idCategory
                await dbQuery.collection('items').where('category', "==",idCategory).get()//llamo a todos los datos que tiene la coleccion 'items'
                    .then( resp =>{
                        setProducts(resp.docs.map(item => ({id: item.id, ...item.data()})))
                    })
                    .catch(err => console.log("ERROR => ",err))
                    .finally(()=> setLoading(false))
                if(idSubCategory){
                        //aca hago lo mismo pero con idSubCategory
                        await dbQuery.collection('items').where('subCategory', "==",idSubCategory).get()//llamo a todos los datos que tiene la coleccion 'items'
                        .then( resp =>{
                            setProducts(resp.docs.map(item => ({id: item.id, ...item.data()})))
                        })
                        .catch(err => console.log("ERROR => ",err))
                        .finally(()=> setLoading(false))    
                    }
            }else{ 
                await dbQuery.collection('items').get()//llamo a todos los datos que tiene la coleccion 'items'
                    .then( resp =>{
                        setProducts(resp.docs.map(item => ({id: item.id, ...item.data()})))
                    })
                    .catch(err => console.log("ERROR => ",err))
                    .finally(()=> setLoading(false))
            }
        }
        fetProducts()
    },[idCategory, idSubCategory])
    
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