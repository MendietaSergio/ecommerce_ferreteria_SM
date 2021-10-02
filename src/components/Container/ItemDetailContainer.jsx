import React, {useEffect,useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

//ver que pasa con con el envio del detalle del producto!!!



const ItemDetailContainer = ( ) =>{
    const {idProduct} = useParams();
    const [loading, setLoading] = useState(true)
    const [detailProduct, setDetailProduct] = useState({})
    useEffect(() =>{
        const dbQuery = getFirestore()
        const filterProduct = () =>{
            if(idProduct){
                dbQuery.collection('items').doc(idProduct).get()//Traigo el producto desde el id.
                .then(resp =>{
                    setDetailProduct({id: resp.id, ...resp.data()})//Seteo el nuevo array.
                })
                .catch(err => console.log("ERROR => ", err))
                .finally(()=> setLoading(false))
            }
        }
        filterProduct()
    },[idProduct])
    console.log("detalle del produto: ", idProduct);
    return (
        <>
        {
    console.log("detalle del produto en return: ", idProduct)

        }
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