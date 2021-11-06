import React from "react";
import "./Style.css";
import c1 from "../../Assets/c1.png";
import c2 from "../../Assets/c2.jpg";
import c3 from "../../Assets/c3.png";
import Fade from "react-reveal"

export default function About() {
  return (
    <div className="about_main">
      <div className="container about">
        <div className="corosel photo">
           <Fade left>
           <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={c1}  className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={c2} className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={c3} className="d-block" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> 
           </Fade>
        </div>
        <div className="content">
          <Fade right>
          <h1 className="title">E CELL NIT Silchar</h1>
          <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id recusandae quos odit rem tenetur in explicabo assumenda sed, officia iusuisquam optio maxime, voluptatem iure doloremque, qui perferendis voluptates id beatae libero mollitia perspiciatis repellendus dolorum sapiente soluta aliquam! Eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium eveniet blanditiis quos aspernatur? Quia aliquam reiciendis in aliquid tempore quaerat similique laborum error, culpa perspiciatis explicabo voluptas alias veritatis.</p>
          <button type="button" className="btn btn-outline-primary">Read More</button>
          </Fade>
        </div>
      </div>
      </div>
  );
}
