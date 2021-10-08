import React from "react";
import imgPort from "../images/portada.png"
import Slider from "../components/Slider/Slider"
import Button from "../components/Button/Button"
const Home = () =>{
    return (
        <>
        <div className="mt-3 mb-3 " >
          <img src={imgPort} title="Portada" alt="Portada" width="100%"/>
        </div>
        <div>
          <Slider title="Destacados" productFeatured={true} to="/productos"/>
          <div className="d-flex justify-content-center my-5" >
            <Button to="/productos" text="Ver más"/>  
          </div>
        </div>
        <div className="mt-3 mb-3 " >
          <h3 className="text-center">Aprovechas nuestros productos con las mejores ofertas del día</h3>
        </div>
        <div>
          <Slider title="Ofertas" productOffer={true} />
          <div className="d-flex justify-content-center my-5">
          </div>
        </div>
        </>
    )

}

export default Home;