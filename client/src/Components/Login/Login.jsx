import React, { useState } from "react";
import "./Style.css";
import Ecell1 from "../../Assets/Ecell1.png";
import { Form } from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setloginuser }) {
  let navigate = useNavigate();

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const controluser = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const log_start = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:5678/login", user).then((res) => {
        alert(res.data.message);
        setloginuser(res.data.user);
        console.log(res.data.user);
        navigate("/");
      });
    } else {
      alert("please enter the necessary details");
    }
  };
  return (
    <>
      <div className="logpage">
        <div className="log">
          <div className="log_head">
            <img src={Ecell1} width="50px" height="50px" alt="" /> Login to
            E-Cell
          </div>
          <div className="signin_form">
            {Form.map(function (props) {
              return (
                <>
                  <div className="place">
                    <input
                      type={props.type}
                      placeholder={props.question}
                      name={props.name}
                      onChange={controluser}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="butt">
            <button className="btn btn-primary" onClick={log_start}>
              Login Us
            </button>
          </div>
          <div className="log_next">
            <p>
              Haven't registered yet <a href="/signin">Register here</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
