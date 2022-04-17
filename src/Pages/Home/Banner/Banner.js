import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../../src/images/banner/front-view-female-teacher-holding-yellow-files-green (1).jpg"
import banner2 from '../../../../src/images/banner/front-view-male-student-dark-t-shirt-yellow-backpack-holding-files-books-smiling-light-blue-wall (1).jpg'
import banner3 from '../../../../src/images/banner/front-view-male-student-green-checkered-shirt-with-black-backpack-holding-copybooks-smiling-blue-wall (1).jpg'

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{ height: "580px" }}
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ height: "580px" }}
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "580px" }}
          className="d-block w-100 "
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;