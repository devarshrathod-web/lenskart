import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Our Products</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto",  // horizontal scroll if overflow
          paddingBottom: "10px",
        }}
      >
        {/* Card 1 */}
        <Card style={{ minWidth: "250px" }} className="shadow-sm border-0 text-center">
          <Card.Img
            variant="top"
            src="https://static1.lenskart.com/media/desktop/img/Sep21/image179.png"
            alt="Eyeglass 1"
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold fs-6">Eyeglass 1</Card.Title>
            <Card.Text style={{ fontSize: "0.85rem" }}>
              Trendy eyeglass for modern look
            </Card.Text>
            <Button size="sm" variant="dark">
              View Details
            </Button>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card style={{ minWidth: "250px" }} className="shadow-sm border-0 text-center">
          <Card.Img
            variant="top"
            src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
            alt="Eyeglass 2"
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold fs-6">Eyeglass 2</Card.Title>
            <Card.Text style={{ fontSize: "0.85rem" }}>
              Stylish eyeglass for comfort
            </Card.Text>
            <Button size="sm" variant="dark">
              View Details
            </Button>
          </Card.Body>
        </Card>

        {/* Card 3 */}
        <Card style={{ minWidth: "250px" }} className="shadow-sm border-0 text-center">
          <Card.Img
            variant="top"
            src="https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg"
            alt="Eyeglass 3"
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold fs-6">Eyeglass 3</Card.Title>
            <Card.Text style={{ fontSize: "0.85rem" }}>
              Perfect pair for office & casual
            </Card.Text>
            <Button size="sm" variant="dark">
              View Details
            </Button>
          </Card.Body>
        </Card>

        {/* Card 4 */}
        <Card style={{ minWidth: "250px" }} className="shadow-sm border-0 text-center">
          <Card.Img
            variant="top"
            src="https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg"
            alt="Eyeglass 4"
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold fs-6">Eyeglass 4</Card.Title>
            <Card.Text style={{ fontSize: "0.85rem" }}>
              Lightweight & durable frame
            </Card.Text>
            <Button size="sm" variant="dark">
              View Details
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Product;
