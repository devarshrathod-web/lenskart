import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Carts = () => {
  const products = [
    {
      title: "Stylish Eyeglasses",
      price: "₹1999",
      img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-full-rim-geometric-vincent-chase-sleek-steel-vc-e13785-c1-eyeglasses_gm_5964.jpg",
    },
    {
      title: "Premium Sunglasses",
      price: "₹2499",
      img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7875_1b_28july23.jpg",
    },
    {
      title: "Blue Light Glasses",
      price: "₹1499",
      img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12395-c2-eyeglasses_g_4493.jpg",
    },
    {
      title: "Aviator Sunglasses",
      price: "₹2999",
      img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-black-full-rim-geometric-vincent-chase-sleek-steel-vc-e13786-c2-eyeglasses_ccg_3318.jpg",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Trending Products</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          padding: "10px 0",
        }}
      >
        {products.map((product, index) => (
          <Card
            key={index}
            className="shadow-sm border-0 rounded-3"
            style={{ minWidth: "220px", flex: "0 0 auto" }}
          >
            <Card.Img
              variant="top"
              src={product.img}
              style={{ height: "180px", objectFit: "cover" }}
            />
            <Card.Body className="text-center">
              <Card.Title className="fw-semibold">{product.title}</Card.Title>
              <Card.Text className="text-success fw-bold">{product.price}</Card.Text>
              <Button variant="dark" size="sm">
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Carts;
