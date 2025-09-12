import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  const imgStyle = {
    height: "400px",       // you can adjust height
    objectFit: "cover",    // keeps proportion without stretching
  };

  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <Carousel interval={3000} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={imgStyle}
            src="https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-breaktheframe.png"
            alt="Break the Frame"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={imgStyle}
            src="https://static5.lenskart.com/media/uploads/NEW_AT_LK-Shapes-jj-in-14july.png"
            alt="Shapes Collection"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={imgStyle}
            src="https://static5.lenskart.com/media/uploads/NEW_AT_LK-Shapes-27772-desktop-banner.png"
            alt="Shapes Banner"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={imgStyle}
            src="https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-harrypotter_20052025_rat.png"
            alt="Harry Potter Banner"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
