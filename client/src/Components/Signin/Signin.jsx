import React, { useState } from "react";
import "./Style.css";
import { Form } from "./Input";
import Ecell1 from "../../Assets/Ecell1.png";
import axios from "axios";
import Navlink, { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
  const navigate=useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confir: "",
  });

  const controluser = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
  //http://localhost:4000/register
  const signin_start=()=>{
    console.log(user);
    const { name, email,phone, password, confir}=user;
    if(name && email && password && password===confir){
      axios.post('http://localhost:5678/register',user).then((res)=>{
        alert(res.data.message);
        navigate('/login');
      })
      alert("correct credentials");
    }else{
      alert("Invalid")
    }
  }  
  
  return (
    <>
      <div className="sign">
        <div className="sign_cont">
          <div className="sign_head">
            {" "}
            <img src={Ecell1} width="50px" height="50px" alt="" /> Register at
            E-Cell
          </div>
          <div className="signin_form">
            {Form.map(function (props) {
              return (
                <>
                  <div className="place">
                    <input
                      type={props.type}
                      name={props.name}
                      placeholder={props.question}
                      onChange={controluser}
                      id=""
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="butt">
            <button className="btn btn-primary" onClick={signin_start}>
              Join Us
            </button>
          </div>
          <div className="log_next">
            <p>
              Already registered <a href='/login'>Login here</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
