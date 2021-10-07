import React, { useState, useEffect} from "react";
import "./Slider.css"
import { getFirestore } from '../../services/getFirebase'

import ItemSlider from "./ItemSlider/ItemSlider"
import { Link } from "react-router-dom";
const Slider = ({title}) =>{
    const [ products, setProducts ] = useState([])
    useEffect (() =>{
        const dbQuery = getFirestore()
        // const dbQueryFilter HACER CONDICIONAL 
        const fetProducts = async() =>{
            dbQuery.collection('items').get()//llamo a todos los datos que tiene la coleccion 'items'
                    .then( resp =>{
                        setProducts(resp.docs.map(item => ({id: item.id, ...item.data()})))
                    })
                    .catch(err => console.log("ERROR => ",err))
            }
        fetProducts()
    },[])

    return (
        <>
        <div className="row">
            <div className="container">
                <Link className="title-products-home" to="/productos"><h4 className="text-left px-2 ">{title}</h4></Link>
                <div className="col-12">
                    <section className="slider ">
                        {products.map((product) => (
                            <ItemSlider product={product} key={product.id} />
                        ))}
                    </section>
                </div>
            </div>
        </div>
        </>
    )


}

export default Slider;