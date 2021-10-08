import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import Item from "../Item/Item";
import { Accordion } from "react-bootstrap";
import { getFirestore } from "../../../services/getFirebase";
import "./ItemList.css"
const ItemList = ({ 
  products,
}) => {
  const [listCategory, setListCategory] = useState([])
  const [subListCategory, setSubListCategory] = useState([])
  const dbQuery = getFirestore()
  useEffect(() => {
    const getCategory = async () =>{
      await dbQuery.collection('category').get()
      .then(resp=>{
          setListCategory(resp.docs.map(item => ({id: item.id, ...item.data()})))
          console.log("lista de category=> ", listCategory);
      })
      .catch(error => console.log(error))
      }
      
    const getSubCategory = async () =>{
    await dbQuery.collection('subCategory').get()
        .then(resp=>{
            setSubListCategory(resp.docs.map(item => ({id: item.id, ...item.data()})))
            console.log("Lista de subcateogoria=> ",subListCategory);
        })
    }
    getCategory()
    getSubCategory()  
  }, [])
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
                  {listCategory.map(category => (
                    <li  key={category.id} className="list-filter">
                      <Link to={`/productos/${category.name}`} >{category.name}</Link>
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Subcategorias</Accordion.Header>
              <Accordion.Body>
                <ul >
                {subListCategory.map(subCategory => (
                    <li key={subCategory.id} className="list-filter">
                      <Link to={`/productos/${subCategory.name_category}/${subCategory.name}`} >{subCategory.name}</Link>
                      </li>
                  ))}
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
