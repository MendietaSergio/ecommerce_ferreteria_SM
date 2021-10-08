import React, { useState, useEffect} from "react";
import "./Slider.css"
import { getFirestore } from '../../services/getFirebase'

import ItemSlider from "./ItemSlider/ItemSlider"
import { Link } from "react-router-dom";
import Title from "../Title/Title";
const Slider = ({
    title,
    productFeatured=false,
    productOffer= false,
    productEquals=false,

}) =>{
    const [ products, setProducts ] = useState([])
    useEffect (() =>{
        const dbQuery = getFirestore()
        // const dbQueryFilter HACER CONDICIONAL 
        const fetProductsFeatured = async() =>{
            dbQuery.collection('items').where('productFeatured','==',true).get()//llamo a todos los datos que tiene la coleccion 'items'
                    .then( resp =>{
                        setProducts(resp.docs.map(item => ({id: item.id, ...item.data()})))
                    })
                    .catch(err => console.log("ERROR => ",err))
            }
        const fetProductsOffer = async() =>{
            dbQuery.collection('items').where('offer','==',true).get()//llamo a todos los datos que tiene la coleccion 'items'
                    .then( resp =>{
                        setProducts(resp.docs.map(item => ({id: item.id, ...item.data()})))
                    })
                    .catch(err => console.log("ERROR => ",err))
            }
        const fetProductsEquals = async() =>{
            dbQuery.collection('items').where('productFeatured','==',true).get()//llamo a todos los datos que tiene la coleccion 'items'
                    .then( resp =>{
                        setProducts(resp.docs.map(item => ({id: item.id, ...item.data()})))
                    })
                    .catch(err => console.log("ERROR => ",err))
            }
        if(productFeatured){
            fetProductsFeatured()
            console.log("verdadero productoss", products);
        }else if(productOffer){
            console.log("verdadero oferta",products);
            fetProductsOffer()
        } else{
            fetProductsEquals()
        }
    },[])

    return (
        <>
        <div className="row">
            <div className="container">
                <Link className="title-products-home" to="/productos"><Title className="my-3" text={title}/></Link>
                <div className="col-12">
                    <section className="slider ">
                        {products.map((product) => (
                            <ItemSlider 
                                product={product}
                                key={product.id}
                                productFeatured={productFeatured}
                                productOffer={productOffer}/>
                        ))}
                    </section>
                </div>
            </div>
        </div>
        </>
    )


}

export default Slider;