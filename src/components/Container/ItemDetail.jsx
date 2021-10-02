import React from "react";
import {Link} from "react-router-dom"
import { ItemCount } from "./ItemCount";
import "./ItemDetail.css"

const ItemDetail =({detail}) =>{


    return(
        <>
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
                                <ItemCount detail={detail} />
                            </div>
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