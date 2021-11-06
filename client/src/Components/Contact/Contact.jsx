import React from "react";
import "./Style.css";
import Ecell1 from "../../Assets/Ecell1.png";

export default function Contact() {
  return (
    <>
      <div className="c_main">
        <div className="c_ico">
          <div className="c_ecell">
            <img src={Ecell1} width="200px" height="200px" alt="" />
          </div>
          <div className="c_cont">
            <h2>Contact Us</h2>
            <p>+91 8751869389</p>
            <p>ecellnitsilchar@gmail.com</p>
          </div>
          <div className="c_social">
            <p>We are social</p>
            <div className="soc_ico">
              <i
                className="fa fa-facebook-official"
                style={{ color: "blue" }}
              ></i>
              <i className="fa fa-instagram" style={{ color: "pink" }}></i>
              <i
                className="fa fa-linkedin-square"
                style={{ color: "blue" }}
              ></i>
              <i className="fa fa-twitter" style={{ color: "blue" }}></i>
              <i className="fa fa-youtube-play" style={{ color: "red" }}></i>
            </div>
          </div>
        </div>
        <div className="c_mess">
          <div className="for_mess">
            <div className="send_contac">
              <div className="input_mes">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name=""
                  id=""
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name=""
                  id=""
                />
                <input
                  type="subject"
                  placeholder="Enter Your Subject"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="send_message">
              <input type="text" name="" placeholder="Your Message" id="" />
            </div>
          </div>
          <div className="send">
            <button className="btn btn-primary">
              {" "}
              <i className="fa fa-telegram" style={{ fontSize: "24px" }}></i>
              Send Message{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
