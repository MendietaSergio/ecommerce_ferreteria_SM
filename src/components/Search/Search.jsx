import { Link } from "react-router-dom"

const Search = ({
    className
}) => {
    return (
        <>
        <form className={`d-flex ${className}`}>
                <div className={`input-group ${className}`}>
                    <input className={`form-control ${className}`} type="search" placeholder="Buscar..." />
                    <div className={`input-group-append ${className}`}>
                       <button className={`btn btn-secondary ${className}`} to="/search"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Search