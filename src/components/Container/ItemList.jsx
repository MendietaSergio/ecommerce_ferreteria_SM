import Item from "./Item";
import { Accordion } from "react-bootstrap";
const ItemList = ({ products }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <h4 className="text-center">Filtros</h4>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Categorias</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>opciones</li>
                  <li>opciones</li>
                  <li>opciones</li>
                  <li>opciones</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-md-9">
          <div className="row">
              {/* SEGUIR DESDE ACA MODIFICANDO EL DIV */}
              {products.map((product) => (
                <Item product={product} key={product.id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
