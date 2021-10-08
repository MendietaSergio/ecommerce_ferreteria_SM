import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./ContainerCart.css";
import { CartContextUse } from "../../Context/CartContext";
import CartEmpty from "../../images/carritoVacio.png";
import { Link } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";
//para el uso de la fecha de compra
//importar funcion que devuelva la fecha
import firebase from "firebase"
import 'firebase/firestore'

const ContainerCart = () => {
  const { clear, removeItem, cart } = CartContextUse();
  const [ priceTotal, setPriceTotal ] = useState(0);
  const [ formData, setFormData ] = useState(initialData)
  useEffect(() => {
      let sumTotal=0
      cart.map(element => (sumTotal+=element.item.price*element.quantity))
      setPriceTotal(sumTotal)
  },[cart])

  const handleOnChange = (e) =>{
    setFormData({
      ...formData, //primero seteo lo que ya tiene
      [e.target.name]:e.target.value//se guarda el valor del nombre de cada input
     })
     
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault()
    let orden ={}

    orden.date = firebase.firestore.Timestamp.fromDate( new Date())
    orden.buyer = formData

    orden.total = priceTotal;
    orden.items = cart.map(cartItem =>{
      
      const id = cartItem.item.id;
      const title = cartItem.item.title;
      const price = cartItem.item.price* cartItem.quantity;

      return {id, title, price}
    })
    const db = getFirestore()//ejecuto la conexión
    //.add => si no esta la coleccion, crea uno con el nombre.
    db.collection('orders').add(orden)//en orders se crea una orden con los datos de la compra.
      .then(resp => console.log(resp))
      .finally(()=>setFormData(initialData))
    
    //PARA ACTUALIZAR LOS DATOS DEL PRODUCTO
    // db.collection('items').doc('FJuTpwpIMCz75wSOwopa').update({
    //   stock:10
    // })
    //   .then(()=> alert('Se modifico el stock'))

    //actualiza toods los item que estan en el lsitado de cart del CartContext
    const itemsToUpdate = db.collection('items').where(firebase.firestore.FieldPath.documentId(),'in',cart.map(i=> i.item.id))
    const batch = db.batch()

    //por cada item restar del stock la cantidad de el carrito.
    itemsToUpdate.get()//objetos del carrito
      .then(collection =>{
        collection.docs.forEach(docSnapshot =>{//recorro los productos del carrito
          batch.update(docSnapshot.ref, {//actualizo y le paso un array con la comparacion del producto y resta
            stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity
          })
        })
        batch.commit().then(res =>{
          console.log("resultado de batch: ",res);
        })
      })

  }
  return (
    <>
      <div className="col shadow my-5">
        <div className="col">
          <h4 className="text-center ">Contenido del carrito</h4>
          <hr />
        </div>
        {cart.length === 0 ? (
          <>
            <div className="py-4">
                <h1 className="text-center my-3">No hay nada por aquí...</h1>
                <img
                    className="card-img-top"
                    src={CartEmpty}
                    alt=""/>
                <h3 className="text-center my-3">Puedes ver mas <Link className="products" to="/productos">productos</Link></h3>
            </div>
          </>
        ) : (
          <>
            {cart.map((element) => (
                <div key={element.id} className="row pb-4">
                  <div className="row my-3">
                    <div className="col">
                      <img
                        className="card-img-top"
                        src={`/assets/img/Productos/${element.item.pictureUrl}`}
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column text-left">
                        <h5>{element.item.title}</h5>
                        <Link to={`/detalle/${element.item.id}`}>Detalle</Link>
                      </div>
                    </div>
                    <div className="col text-center">
                      <h5>precio</h5>
                      <span>${element.item.price},00</span>
                    </div>
                    <div className="col text-center">
                      <h5>Cantidad</h5>
                      <input className="input-cart" value={element.quantity} type="number" min="1" max="10" />
                    </div>
                    <div className="col text-center">
                      <h5>TOTAL</h5>                      
                      <span>${element.item.price*element.quantity},00</span>
                      <br />
                      <i class="far fa-trash-alt" onClick={()=>removeItem(element.item.id)}></i>
                    </div>
                  </div>
                  <hr />
                </div>
            ))}
            <div className="row">
              <div className="col">
                <h4 className="sub-amount">Subtotal: ${priceTotal}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center mx-5 mb-5">
              <Button
                to="/productos"
                  className="btn btn-primary mx-2"
                  text="Seguir Comprando"
                />
              </div>
              <div className="col d-flex justify-content-end mx-5 mb-5">
                <Button className="btn btn-danger mx-2" text="Cancelar todo" onClick={()=>clear()}/>
                <Button
                  className="btn btn-success mx-2"
                  text="Confirmar compra"
                  onClick={handleOnSubmit}
                />
              </div>
            </div>
            {/* HACERLO EN OTRO COMPONENTE */}
              <div>
                <form
                  onSubmit={handleOnSubmit}
                  onChange={handleOnChange}>
                  <input type="text" name="name" value={formData.name} />
                  <input type="text" name="tel" value={formData.tel} />
                  <input type="text" name="email" value={formData.email} />
                  <Button
                  className="btn btn-success mx-2"
                  text="Confirmar compra del form"
                  onClick={handleOnSubmit}
                />
                </form>
              </div>
          </>
        )}
      </div>
    </>
  );
};

const initialData = {
  name:'',
  tel:"",
  email: ""
}
export default ContainerCart;
