import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel autoPlay={true} interval={2000} controls={false} indicators={false}>
      <Carousel.Item>
        <img height={400} className="d-block w-100" src="./img/1.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img height={400} className="d-block w-100" src="./img/4.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img height={400} className="d-block w-100" src="./img/3.jpg" alt="" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider