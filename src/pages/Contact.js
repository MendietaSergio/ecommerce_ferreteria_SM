import React from "react";
import FormContact from "../components/Contact/FormContact";
import Location from "../components/Contact/Location";


const Contact = () =>{
    return (
        <>
        <div className="container-body-pages">
            <h1 className="text-center m-5">Contacto</h1>
            <div className="row">
                <div className="col-lg-6 ">
                    <Location/>
                </div>
                <div className="col-lg-6 ">
                    <FormContact/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;