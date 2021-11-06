import React from "react";
import "./Style.css";
import { Fade } from "react-reveal";
import { Zoom } from "react-reveal";

export default function We_do() {
  return (
    <>
      <div className="main">
        <div className="motive">
          <Fade left>
            <div className="mission">
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                quod odio aliquid, in aliquam dolor. Nihil nisi placeat magni
                rem quos recusandae vitae quia. Omnis facilis ipsam quasi nulla
                non!
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="vision">
              <h1>Our Vision</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                quod odio aliquid, in aliquam dolor. Nihil nisi placeat magni
                rem quos recusandae vitae quia. Omnis facilis ipsam quasi nulla
                non!
              </p>
            </div>
          </Fade>
        </div>
        <Zoom>
          <div className="wedo">
            <h1>What We Do?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus alias soluta excepturi molestias assumenda laborum
              voluptate saepe maxime sed magnam aspernatur voluptates aut
              aliquid cum culpa facere, quos optio. Impedit. Nulla dolores
              dolorem id neque repudiandae quo quasi, officiis hic corporis
              laudantium. Sit omnis repellendus odit neque corrupti fuga
              asperiores quia voluptas eos animi suscipit nisi consectetur,
              veniam, necessitatibus eligendi.
            </p>
          </div>
        </Zoom>
        <button type="button" className="btn btn-outline-primary">
          Read More
        </button>
      </div>
    </>
  );
}
