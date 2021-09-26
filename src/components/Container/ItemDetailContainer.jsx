import React, {useEffect,useState} from "react";
import getFetch from "../../mocks/products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//tengo que pasar un producto



const ItemDetailContainer = ( ) =>{
    const {idProducts} = useParams();
    const [loading, setLoading] = useState(true)
    const [detailProduct, setDetailProduct] = useState([])
    useEffect(() =>{
        if(idProducts){
            getFetch
            .then(respuesta => {
                setDetailProduct(respuesta.find(detail => detail.title ===idProducts))
                setLoading(false)
            })
            .catch(error=>console.log(error))
            .finally(()=>setLoading(false))
        }
    },[idProducts])
    return (
        <>
        {/* MOSTRAR DETALLE LISTO */}
        {/* PREGUNTAR POR QUE SE ME GUARDA EN UN OBJETO Y COMO HACER PARA QUE SE GUARDE EN UN ARRAY PARA NO USAR UN MAP */}
        {loading ?
                (<>
                <h2 className="text-center my-4">Cargando <i className="fas fa-spinner fa-pulse" /></h2>
                </>
                ):(
                    <ItemDetail detail={detailProduct}/>
                )}
        </>
    )
}

export default ItemDetailContainer;