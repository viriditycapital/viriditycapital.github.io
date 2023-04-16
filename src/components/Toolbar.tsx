import React from "react";
import logo_viridity from "../assets/viridity_icon.png";
import { Link } from "react-router-dom";

class Toolbar extends React.Component {
  render() {
    return <div className="toolbar">
      <div className="company-name">
        <span>
          Viridty Capital LLC
        </span>
        <div className="logo-wrapper">
          <img className="logo" src={logo_viridity}/>
        </div>
      </div>

      <div className="toolbar-links">
        <Link className="link" to="/contracting">
          Contracting                    
        </Link>
        <Link className="link" to="/investors">
          Investors
        </Link>
        <Link className="link" to="/careers">
          Careers
        </Link>
        <Link className="link" to="/about">
          About Us                    
        </Link>
      </div>
    </div>;
  }
}

export default Toolbar;