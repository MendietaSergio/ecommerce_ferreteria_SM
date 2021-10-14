import React from "react";
import Slider from "../../Slider/Slider";
import { ItemCount } from "../ItemCount/ItemCount";
const Detail = ({
    detail
}) =>{
    return(
        <>
            <div className="col-lg-6 mb-4">
                    <div className="main-product-image">
                        <img className="main-product-image" src={detail.picture} alt={detail.title}/>
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
            <div>
                <Slider title="Silimales" productEqual={detail} to={`/productos/${detail.category}`}/>
            </div>
        </>
    )
}

export default Detail;