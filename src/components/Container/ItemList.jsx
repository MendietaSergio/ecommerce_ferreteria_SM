import Item from "./Item";



const ItemList =({products} ) =>{
    return(
        <>
        <div className="row">
            {products.map(product => 
            <Item product={product} key={product.id}/>
        )}
        </div>
        </>
    )

}

export default ItemList;