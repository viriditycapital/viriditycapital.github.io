import React from "react";

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  render() {
    return (
      <div id="App">
        <div id="background">
          <div id="stripe-wrapper">
            <div className="stripe" id="left"></div>
            <div className="stripe" id="mid"></div>
            <div className="stripe" id="right"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
