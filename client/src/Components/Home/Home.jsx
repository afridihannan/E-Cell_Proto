import React from "react";
import Ecell1 from "../../Assets/Ecell1.png";
import "./Style.css";
import { Zoom } from "react-reveal";

export default function Home() {
  return (
    <div className="home">
      <div className="head1">
        <h1 className="head">Welcome to</h1>
      </div>
      <Zoom>
        {" "}
        <img
          className="cenImg"
          src={Ecell1}
          height="550vh"
          width="550vw"
          alt=""
        />{" "}
      </Zoom>
      <h2 className="foot">Powering Entreprenuership</h2>
      <img className="downarrow" src="../../Assets/down_arrow.svg" alt="" />
    </div>
  );
}
