import ItemListContainer from "../components/Container/ItemListContainer";
import { Link, useParams } from "react-router-dom";

const Products = ({product} ) =>{
    const {idCategory} = useParams()
    const {idSubCategory} = useParams()
    return (
        <>
        <h1 className="text-center m-5">{product}</h1>
        <div>
            <span className="link-page">
                <Link to="/">Home<i class="fas fa-chevron-right"></i></Link>
                {idCategory ?    
                <Link to={`/productos`}>Productos<i class="fas fa-chevron-right"></i></Link>    
                : null
                }
                {idCategory && idSubCategory ?    
                <Link to={`/productos/${idCategory}`}>{idCategory}<i class="fas fa-chevron-right"></i></Link>    
                : null
                }
            </span>
        </div>
            <ItemListContainer/>
        </>
    )
}

export default Products;