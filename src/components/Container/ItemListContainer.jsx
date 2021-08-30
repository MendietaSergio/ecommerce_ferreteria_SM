const ItemListContainer = ({ mensaje = "Hola soy el Home" }) => {
    return (
        <>
            <div className="container">
                <h1 className="text-center my-4">{mensaje}</h1>
            </div>
        </>
    )
}

export default ItemListContainer;