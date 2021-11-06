import React from 'react'
import { Form } from "./Input";

export default function Logdata(props) {

    const controluser = (e) => {
      const { name, value } = e.target;
      setuser({ ...user, [name]: value });
    };
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
  }
