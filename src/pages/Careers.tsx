import React from "react";
import Toolbar from "../components/TopToolbar";

class Careers extends React.Component {
  render() {
    return <div className="page">
      <Toolbar/>
      <div className="main-content">
        <h1>Open Positions</h1>
        <p>
          At Viridity Capital LLC, we imagine, invent, and deliver new ways to
          better serve our employees, our clients, and the world. We invite you
          to be a part of our team and help shape the future.
        </p>
      </div>
    </div>
  }
}

export default Careers;
