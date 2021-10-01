import { Link } from "react-router-dom"

const Search = ({
    className =""
}) => {
    return (
        <>
        <form className={`d-flex ${className}`}>
                <div className={`input-group ${className}`}>
                    <input className={`form-control search-lg ${className}`} type="search" placeholder="Buscar..." />
                    <div className={`input-group-append ${className}`}>
                       <Link to="/search"><button className={`btn btn-secondary ${className}`} ><i className="fas fa-search"></i></button></Link>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Search