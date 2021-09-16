import React, {useEffect,useState} from "react";
import getFetch from "../../mocks/products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//tengo que pasar un producto



const ItemDetailContainer = ( ) =>{

    const {idProducts} = useParams();
    const [product, setProduct] = useState([])
    const [detailProduct, setDetailProduct] = useState([])
    useEffect(() =>{
        if(idProducts){
            getFetch
            .then(respuesta => {
                setDetailProduct(respuesta.filter(detail => detail.id ==idProducts))
            })
            
            .catch(error=>console.log(error))
        }
    },[idProducts])
    return (
        <>
        {/* MOSTRAR DETALLE LISTO */}
        {/* PREGUNTAR POR QUE SE ME GUARDA EN UN OBJETO Y COMO HACER PARA QUE SE GUARDE EN UN ARRAY PARA NO USAR UN MAP */}
        {detailProduct.map(detail => (
            <div key={detail.id}>
                <ItemDetail detail={detail}/>
            </div>
        ))}
        </>
    )

}

export default ItemDetailContainer;