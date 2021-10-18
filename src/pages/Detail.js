import React, {useState} from "react";
import ItemDetailContainer from "../components/Container/ItemDetailContainer/ItemDetailContainer";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(()=> setLoading(false), 3000 )
  return (
    <>
      {loading ? (
        <div className="detail-loading">
          <h2 className="text-center my-4">
            Cargando <i className="fas fa-spinner fa-pulse" />
          </h2>
        </div>
      ) : (
        <div className="container-body-detail">
          <ItemDetailContainer />
        </div>
      )}
    </>
  );
};
export default Detail;
