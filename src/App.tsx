import React from "react";
import Toolbar from "./components/TopToolbar";
import PageBanner from "./components/PageBanner";
import lunargala from "./assets/lunargala.jpg";
import { Box } from "@mui/material";

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  render() {
    return (
      <Box id="App" sx={{ flexGrow: 1, width: '100vw', flexDirection: 'column' }} m="auto" display="flex" justifyContent="center">
        <Toolbar/>
        <PageBanner pictureSrc={lunargala} link={'https://2021.lunargala.org/#/'}/>
      </Box>
    );
  }
}

export default App;
