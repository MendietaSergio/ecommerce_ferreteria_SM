import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { getFirestorage, getFirestore } from "../../services/getFirebase";
import { useForm } from "react-hook-form";
import validations from "../../validations/AddProduct";
import Swal from "sweetalert2";

//seguir con la importacion de las categorias
const AddProduct = () => {
  const [confirmOffer, setConfirmOffer] = useState(true);
  const [valueOffer, setValueOffer] = useState(true);
  const [showDiscount, setShowDiscount] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [subListCategory, setSubListCategory] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const fireStorage = getFirestorage();
  const dbQuery = getFirestore();

  useEffect(() => {
    getCategory();
    getSubCategory();
  }, []);

  const getCategory = async () => {
    await dbQuery
      .collection("category")
      .get()
      .then((resp) => {
        setListCategory(
          resp.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
      })
      .catch((error) => console.log(error));
  };

  const getSubCategory = async () => {
    await dbQuery
      .collection("subCategory")
      .get()
      .then((resp) => {
        setSubListCategory(
          resp.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
      });
  };
  const handleOnChangeCheckedOffer = (e) => {
    if (e.target.value === "1") {
      setConfirmOffer(true);
      setShowDiscount(true);
      setValueOffer(true);
      setValue("discount", 30);
    } else {
      setConfirmOffer(false);
      setValue("discount", 0);
      setShowDiscount(false);
      setValueOffer(false);
    }
  };

  //FUNCION PARA GUARDAR LA IMAGEN EN FIREBASE
  const uploadImage = async (data) => {
    try {
      const fileName = data.picture[0].name;
      const newRef = fireStorage.ref("img_products").child(fileName + ".png"); // nombre del archivo
      await newRef.put(data.picture[0]);
      let urlImagen = await newRef.getDownloadURL();
      if (urlImagen !== undefined) {
        data.picture = urlImagen;
        dbQuery.collection("items")
          .add(data)
          .then((resp) => console.log(resp));
        reset()
        console.log(data);
      }
    } catch (error) {
      alert(error);
    }
  };
  const Submit = (data) => {
    if (confirmOffer) {
      data.offer = valueOffer;
    } else {
      data.offer = valueOffer;
    }
    data.price = parseInt(data.price);
    data.discount = parseInt(data.discount);
    data.stock = parseInt(data.stock);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado!",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        uploadImage(data);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <>
      <h1 className="text-center my-5">Carga de producto</h1>
      <form onSubmit={handleSubmit(Submit)}>
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="nameProduct">Nombre del producto</label>
            <input
              type="text"
              className={
                errors.nameProduct ? "form-control is-invalid" : "form-control"
              }
              id="nameProduct"
              placeholder="Nombre del producto"
              name="nameProduct"
              {...register("nameProduct", validations.nameProduct)}
            />
            <span className="text-danger">
              {errors.nameProduct ? (
                <p className="text-danger">{errors.nameProduct.message}</p>
              ) : null}
            </span>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="form-group">
              <label htmlFor="category">Categoria</label>
              <select
                name="category"
                className={
                  errors.category ? "form-control is-invalid" : "form-control"
                }
                id="category"
                {...register("category", validations.category)}
              >
                <option value="">Seleccione una categoria</option>
                {listCategory.map((categorie) => (
                  <option key={categorie.id} value={categorie.name}>
                    {categorie.name}
                  </option>
                ))}
              </select>
              {errors.category ? (
                <p className="text-danger">{errors.category.message}</p>
              ) : null}
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="form-group">
              <label htmlFor="subCategory">Subcategoria</label>
              <select
                name="subCategory"
                className={
                  errors.subCategory
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="subCategory"
                {...register("subCategory", validations.subCategory)}
              >
                <option value="">Seleccione la subcatgoria</option>
                {subListCategory.map((subcategorie) => (
                  <option key={subcategorie.id} value={subcategorie.name}>
                    {subcategorie.name}
                  </option>
                ))}
              </select>
              {errors.subCategory ? (
                <p className="text-danger">{errors.subCategory.message}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-2 mb-3">
            <div className="form-group">
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                name="price"
                className={
                  errors.price ? "form-control is-invalid" : "form-control"
                }
                id="price"
                placeholder="Precio"
                {...register("price", validations.price)}
              />
              <span className="text-danger">
                {errors.price ? (
                  <p className="text-danger">{errors.price.message}</p>
                ) : null}
              </span>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              name="stock"
              className={
                errors.stock ? "form-control is-invalid" : "form-control"
              }
              id="stock"
              placeholder="Stock"
              {...register("stock", validations.stock)}
            />
            {errors.stock ? (
              <p className="text-danger">{errors.stock.message}</p>
            ) : null}
          </div>
          <div className="col-12 col-md-3 mb-3">
            <label htmlFor="offer">Oferta</label>
            <select
              name="offer"
              className={
                errors.offer ? "form-control is-invalid" : "form-control"
              }
              id="offer"
              {...register("offer", validations.offer)}
              onChange={(e) => handleOnChangeCheckedOffer(e)}
            >
              <option value="">Seleccione si tiene oferta</option>
              <option Value="1">Si</option>
              <option value="0">No</option>
            </select>
            {errors.offer ? (
              <p className="text-danger">{errors.offer.message}</p>
            ) : null}
          </div>
          {showDiscount ? (
            <div className="col-12 col-md-3 mb-3">
              <label htmlFor="discount">Descuento</label>
              <input
                type="number"
                className={
                  errors.discount ? "form-control is-invalid" : "form-control"
                }
                id="discount"
                name="discount"
                min="0"
                placeholder="Descuento"
                {...register("discount", validations.discount)}
              />
              {errors.discount ? (
                <p className="text-danger">{errors.discount.message}</p>
              ) : null}
            </div>
          ) : null}
        </div>
        <div class="form-group my-3">
          <label htmlFor="desciption">Descripción</label>
          <textarea
            name="description"
            class="form-control"
            id="description"
            {...register("description", validations.description)}
            rows="3"
          ></textarea>
          {errors.description ? (
            <p className="text-danger">{errors.description.message}</p>
          ) : null}
        </div>{" "}
        <div className="form-group my-3">
          <label htmlFor="picture">Subir imagen</label>
          <div>
            <input
              {...register("picture", validations.picture)}
              type="file"
              name="picture"
              accept=".png , .jpg, .jpeg"
              className="form-control-file"
              id="picture"
            />
          </div>
          {errors.picture ? (
            <p className="text-danger">{errors.picture.message}</p>
          ) : null}
        </div>
        <div className="form-group">
          <div className="form-check">
            <label htmlFor="productFeatured">Producto destacado</label>
            <input
              className={
                errors.productFeatured
                  ? "form-check-input is-invalid"
                  : "form-check-input"
              }
              type="checkbox"
              name="productFeatured"
              id="productFeatured"
              {...register("productFeatured", validations.productFeatured)}
            />
          </div>
        </div>
        <div className="form-group my-4">
          <Button
            className="btn btn-success"
            type="submit"
            text="Cargar producto"
          />
        </div>
      </form>
    </>
  );
};
export default AddProduct;
