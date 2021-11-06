import React from "react";
import './Style.css';

export default function Footer() {
  return (
    <div className="foot_main">
      <div className="footi">
        <div className="copy">
            <p><i className="fa fa-copyright"></i>Developed by <b>Hannan</b>.</p>
            <p>All rights reserved</p>
        </div>
        <div className="wp">
            <p>For issues related to website. Contact</p>
            <p><i className="fa fa-whatsapp"></i>+91 8751869389 </p>
        </div>
      </div>
    </div>
  );
}
