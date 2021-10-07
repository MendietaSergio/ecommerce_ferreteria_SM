import React from "react";
import { Link } from "react-router-dom";
// import "./Item.css"

const ItemSlider = ({product}) =>{
   
    return(
        <>
        <div className="col-md-4">
            <div key={product.id} className="card mx-2" >
                <Link className="card-footer-detail" to={`/detalle/${product.id}`}>
                    <img className="card-img-top" src={`/assets/img/Productos/${product.pictureUrl}`} alt={product.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                    </div>        
                </Link>                
           </div>
        </div>
        </>
    )
}

export default ItemSlider;