import React from "react";
import "./Style.css";
import { medias } from "./platform";
import { Zoom } from "react-reveal";

function Social_display(props) {
  return (
    <>
      <Zoom>
        <div className="table">
          <div className="icon">
            {" "}
            <i className={props.icon} style={{ fontSize: "160px" }}></i>{" "}
          </div>
          <div className="counting">{props.count}</div>
          <div className="descri">{props.desc}</div>
        </div>
      </Zoom>
    </>
  );
}

export default function Social() {
  return (
    <>
      <div className="content_social">
        <div className="main_social">{medias.map(Social_display)}</div>
      </div>
    </>
  );
}

//  <i class="fa fa-facebook-square" style="font-size:36px"></i>
//  <i class="fa fa-linkedin-square" style="font-size:36px"></i>
//  <i class="fa fa-instagram" style="font-size:36px"></i>
//  <i class="fa fa-child" style="font-size:60px;color:red;"></i>
