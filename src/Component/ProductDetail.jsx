import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/eyeglasses/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="container my-5 " style={{height:"500px"}}>
      <div className="row">
        {/* Left: Image */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        {/* Right: Info */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-success">Price: ₹{product.price}</h4>
          <Button variant="success" size="lg" className="mt-3">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
