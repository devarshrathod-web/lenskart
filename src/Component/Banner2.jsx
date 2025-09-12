import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Banner2() {
  const slides = [
    {
      src: "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
      alt: "First slide",
    },
    {
      src: "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
      alt: "Second slide",
    },
    {
      src: "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
      alt: "Third slide",
    },
  ];

  return (
    <div style={{ maxHeight: "500px", overflow: "hidden" }}>
      <Carousel fade>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={slide.alt}
              style={{ objectFit: "cover", maxHeight: "500px" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner2;
