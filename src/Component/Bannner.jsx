import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Bannner() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-breaktheframe.png"
            alt="First slide"
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static5.lenskart.com/media/uploads/NEW_AT_LK-Shapes-jj-in-14july.png"
            alt="Second slide"
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static5.lenskart.com/media/uploads/NEW_AT_LK-Shapes-27772-desktop-banner.png"
            alt="Third slide"
          />
         
        </Carousel.Item>
      
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-harrypotter_20052025_rat.png"
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Bannner
