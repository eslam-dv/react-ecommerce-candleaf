import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import "./Product.css";

export const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="card-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-info">
        <h2 className="card-title poppins">{product.title}</h2>
        <p className="card-text roboto">${product.price}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};
