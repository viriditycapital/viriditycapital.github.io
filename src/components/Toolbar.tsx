import React from "react";
import logo_viridity from "../assets/viridity_icon.png";

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
        <a className="link">
          Contracting                    
        </a>
        <a className="link">
          Investors
        </a>
        <a className="link">
          Careers
        </a>
        <a className="link">
          About Us                    
        </a>
      </div>
    </div>;
  }
}

export default Toolbar;