import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://localhost:3000/eyeglasses") // your API
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Our Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((el) => (
          <Card
            key={el.id}
            className="shadow-sm"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/products/${el.id}`)}
          >
            <Card.Img variant="top" src={el.image} alt={el.title} />
            <Card.Body className="text-center">
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.description.substring(0, 60)}...</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Product;
