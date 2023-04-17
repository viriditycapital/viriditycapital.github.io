import React from "react";
import Toolbar from "../components/TopToolbar";

class Careers extends React.Component {
  render() {
    return <div className="page">
      <Toolbar />
      <div className="main-content">
        <p>
          At Viridity Capital LLC, we are a tech consulting and contracting firm
          specializing in government contracts. With a diverse and passionate
          team of experts in consulting, analytics, digital solutions,
          engineering, and cyber, we bring bold thinking and a desire to be the
          best in our work. We are dedicated to empowering people to change the
          world, and we do this by providing innovative solutions that drive
          positive change.
        </p>

        <p>
          In addition to our core services, we also provide cutting-edge machine
          learning solutions to help our clients stay ahead of the curve. We
          believe in celebrating and valuing diversity in all its forms, and we
          take pride in our multicultural community of problem solvers. As
          corporate and individual citizens, we strive to make our communities
          better places for all.
        </p>

        <p>
          We are located in Washington DC and New York City.
        </p>
      </div>
    </div>
  }
}

export default Careers;
