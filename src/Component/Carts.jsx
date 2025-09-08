import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Carts = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Trending Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Product 1 */}
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Img
            variant="top"
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-full-rim-geometric-vincent-chase-sleek-steel-vc-e13785-c1-eyeglasses_gm_5964.jpg"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <Card.Title className="fw-semibold">Stylish Eyeglasses</Card.Title>
            <Card.Text className="text-success fw-bold">₹1999</Card.Text>
            <Button variant="dark" size="sm">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>

        {/* Product 2 */}
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Img
            variant="top"
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7875_1b_28july23.jpg"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <Card.Title className="fw-semibold">Premium Sunglasses</Card.Title>
            <Card.Text className="text-success fw-bold">₹2499</Card.Text>
            <Button variant="dark" size="sm">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>

        {/* Product 3 */}
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Img
            variant="top"
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12395-c2-eyeglasses_g_4493.jpg"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <Card.Title className="fw-semibold">Blue Light Glasses</Card.Title>
            <Card.Text className="text-success fw-bold">₹1499</Card.Text>
            <Button variant="dark" size="sm">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>

        {/* Product 4 */}
        <Card className="shadow-sm border-0 rounded-3">
          <Card.Img
            variant="top"
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-black-full-rim-geometric-vincent-chase-sleek-steel-vc-e13786-c2-eyeglasses_ccg_3318.jpg"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <Card.Title className="fw-semibold">Aviator Sunglasses</Card.Title>
            <Card.Text className="text-success fw-bold">₹2999</Card.Text>
            <Button variant="dark" size="sm">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Carts;
 