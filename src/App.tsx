import React from "react";
import Toolbar from "./components/TopToolbar";
import { Box, Grid, Typography } from "@mui/material";

/**
 * This is the highest level of the web app.
 */
class App extends React.Component {
  render() {
    return (
      <Box id="App" sx={{ flexGrow: 1, width: '100vw', height: '100vh', flexDirection: 'column' }} m="auto" display="flex" justifyContent="center">
        <Toolbar />
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Box bgcolor="rgba(3, 172, 19, 0.3)" p={3}>
                <Typography variant="h2" align="center">
                  Transforming today for a better tomorrow.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box bgcolor="rgba(2, 138, 15, 0.3)" p={3}>
                <Typography variant="h2" align="center">
                  Innovative tech for a brighter future.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box bgcolor="rgba(70, 109, 29, 0.3)" p={3}>
                <Typography variant="h2" align="center">
                  Embrace the future with us.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default App;
