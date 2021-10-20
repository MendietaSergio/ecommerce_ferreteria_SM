import React from "react";
import "./Location.css";
const Location = () => {
  return (
    <>
      <div>
        <h6 className="text-center">Location</h6>
        <div>
          <ul className="list-location">
            <li className="list-location">
              <i className="fas fa-mobile-alt"></i> Telefono: 1123456789
            </li>
            <li className="list-location">
              <i className="far fa-envelope"></i> Correo: ferredelbarrio@gmail.com
            </li>
            <li className="list-location">
              <i className="fas fa-thumbtack"></i> Ubicación: Quilmes, zona sur
            </li>
          </ul>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52467.91573466545!2d-58.28173934716688!3d-34.724225043954796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e38e45f5777%3A0x6a86dac21334524f!2sQuilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1631823303123!5m2!1ses-419!2sar"
            width="100%"
            height="250"
            
            loading="lazy"
            title="Ubicación"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Location;
