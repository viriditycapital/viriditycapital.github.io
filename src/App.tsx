import React from "react";
import Toolbar from "./components/Toolbar";
import PageBanner from "./components/PageBanner";
import lunargala from "./assets/lunargala.jpg";

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  render() {
    return (
      <div id="App">
        <div id="main-content">
          <Toolbar/>
          <PageBanner pictureSrc={lunargala} link={'https://2021.lunargala.org/#/'}/>
        </div>
      </div>
    );
  }
}

export default App;
