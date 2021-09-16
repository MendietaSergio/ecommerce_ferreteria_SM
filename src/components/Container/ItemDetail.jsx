import React, { useState } from "react";
import {Link} from "react-router-dom"
import Button from "../Button/Button"
import "./ItemDetail.css"

const ItemDetail =({detail}) =>{


    const [countCart,setCountCart] = useState(1);
    const [amount, setAmount] = useState(detail.price)

    const SumCart =() =>{
        setCountCart(countCart+1)
        setAmount(amount+detail.price)
    }
    const SubtrationCart =() =>{
        if(countCart!=1){
            setCountCart(countCart-1)
            setAmount(amount-detail.price)
                {console.log(amount)}
        }
    }
    return(
        <>
        {console.log(amount)}
            <h5 className="text-center mt-5 mb-5">{detail.title}</h5>
            <span className="link-page">
                <Link to="/">Home<i class="fas fa-chevron-right"></i></Link>
                <Link to="/productos">Productos<i class="fas fa-chevron-right"></i></Link>
                <Link to={`/productos/${detail.category}`}>{detail.category}<i class="fas fa-chevron-right"></i></Link>
                <Link to={`/productos/${detail.category}/${detail.subCategory}`}>{detail.subCategory}</Link>
                </span>
            <div key={detail.id} className="row  mt-2" >
                <div className="col-lg-6 mb-4">
                    <div className="main-product-image">
                        <img className="main-product-image" src={`/assets/img/productos/${detail.pictureUrl}`} alt={detail.title}/>
                    </div>
                </div>
                <div className="col-lg-6 p-5 ">
                    <div className="detail-title">
                    <p >Precio ${detail.price},00 por unid.</p>
                    </div>
                    <div className="detail-title">
                        <div className="row">
                            <div className="cart d-flex justift-content-center ">
                                <span className="cart">Carrito:</span>
                                <div className="btn btn-primary">
                                    <span onClick={()=>SubtrationCart()}>-</span>
                                </div>
                                <div className="btn">
                                    <span>{countCart}</span>
                                </div>
                                <div className="btn btn-primary">
                                    <span onClick={()=>SumCart()}>+</span>
                                </div>
                            </div>
                            {countCart>1 ? (<span className="mt-3">Precio ${amount},00 por {countCart} unid.</span>) :null}
                        </div>
                    </div>
                    <div className="detail-title">
                    <p>Categoría: {detail.category}</p>
                    </div>
                    <div className="detail-title">
                    <p>Subcategoría: {detail.subCategory}</p>
                    </div>
                    <div className="detail-title">
                    <p>Descripción: {detail.description}</p>
                    </div>
                </div>
           </div>
        </>
    )
} 
export default ItemDetail;