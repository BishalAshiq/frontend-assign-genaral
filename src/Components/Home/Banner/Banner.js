import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import p1 from "../../../images/banner/p1.jpg";
import p2 from "../../../images/banner/p2.jpg";
import p3 from "../../../images/banner/p3.jpg";
import p4 from "../../../images/banner/p4.jpg";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div style={{ margin: 0 }}>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={p1} alt="First slide" />
          <Carousel.Caption>
            <h3 style={{ fontSize: 48 }}>Programming</h3>
            <p style={{ fontSize: 28 }}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
            <NavLink to="/activePageOne">
              <Button color="inherit">Create Activity</Button>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={p2} alt="Second slide" />

          <Carousel.Caption>
            <h3 style={{ fontSize: 48, color: "black" }}>Time Management</h3>
            <p style={{ fontSize: 28, color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <NavLink to="/activePageOne">
              <Button color="inherit">Create Activity</Button>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={p3} alt="Third slide" />

          <Carousel.Caption>
            <h3 style={{ fontSize: 48, color: "White" }}>Team Work</h3>
            <p style={{ fontSize: 28, color: "White" }}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <NavLink to="/activePageOne">
              <Button color="inherit">Create Activity</Button>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={p4} alt="Third slide" />

          <Carousel.Caption>
            <h3 style={{ fontSize: 48, color: "White" }}>Technical support</h3>
            <p style={{ fontSize: 28, color: "white" }}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <NavLink to="/activePageOne">
              <Button color="inherit">Create Activity</Button>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
