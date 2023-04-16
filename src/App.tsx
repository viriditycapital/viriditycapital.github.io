import React from "react";
import dfcsm_cover from './assets/dfcsm_cover.png';
import designs from './assets/designs.jpg';
import logo_github from './assets/github.png';
import logo_linkedin from './assets/linkedin.png';
import logo_twitter from './assets/twitter_logo.png';

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
        <div id="main-content">
          <div id="top-toolbar">
            <div id="name">
              Viridity Capital LLC
            </div>
          </div>
          <div id="bottom-toolbar">
            <div id="logo-wrapper">
              <div className="logo-link">
                <a href="https://github.com/viriditycapital">
                  <img className="logo" src={logo_github}/>
                </a>
                <a href="https://twitter.com/viriditycapital">
                  <img className="logo" src={logo_twitter}/>
                </a>
                <a href="https://www.linkedin.com/company/66927992">
                  <img className="logo" src={logo_linkedin}/>
                </a>
              </div>
            </div>
          </div>
          <div id="banner">
            <a className="asset-link" href="https://leanpub.com/dfcsm" target="_blank">
              <img id="dfcsm-cover" src={dfcsm_cover}/>
            </a>
            <a className="asset-link" href="https://www.etsy.com/shop/viriditydesigns/" target="_blank">
              <img id="designs" src={designs}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
