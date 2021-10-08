import MercadoPago from "../../images/icon_mercadopago.png"


import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mt-4">
          <div className="row footer_row">
            <div className="col-sm col-md col-lg  w-100">
              <h5 className="text-center footer_title">Navegación</h5>
              <div className="d-flex flex-column text-center ">
                <a href="/" className="footer_nagevation">Inicio</a>
                <a href="/productos" className="footer_nagevation">Productos</a>
                <a href="/contacto" className="footer_nagevation">Contacto</a>
              </div>
            </div>
            <div className="col-sm col-md col-lgw-100">
              <h5 className="text-center footer_title">Medio de pago</h5>
                <div className="d-flex justify-content-center">
                <img className="img_pago" src={MercadoPago}/>
                </div>            
            </div>
            <div className="col-sm col-md col-lg  w-100">
              <h5 className="text-center footer_title">Contacto</h5>
              <p className="footer_contact">
                <i class="fas fa-map-marker-alt"></i> Quilmes, Provincia de Buenos Aires
              </p>
              <p className="footer_contactPhone">
                <i class="fas fa-mobile-alt"></i> 1111111111
              </p>
            </div>
            <hr className="horizontal-line" />
          </div>
          <div className="copyright">
            <div className="row">
              <div className="col d-flex justify-content-center w-100">
                <p className="footer-copyright">
                  Plantilla Copyright © Portafolio{" "}
                  <a
                    className="footer-a"
                    href="http://linkedin.com/in/mendietasergio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mendieta Sergio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
