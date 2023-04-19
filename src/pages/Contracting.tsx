import React from "react";
import Toolbar from "../components/TopToolbar";
import { Box, Grid } from "@mui/material";

class Contracting extends React.Component {
  render() {
    return <Box sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <h1>Doing Business with Viridity Capital</h1>
          <p>
            We provide the best technology solutions at the most affordable rates.
          </p>

          <p>
            Get in Touch With Us Today.
          </p>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              Machine Learning
            </Grid>
            <Grid item xs={6}>
              (ML Picture)
            </Grid>
            <Grid item xs={6}>
              Computer Systems
              OS, Compilers, Distributed Systems
            </Grid>
            <Grid item xs={6}>
              (Tech picture)
            </Grid>
            <Grid item xs={6}>
              Product Engineering: Design and implementation
            </Grid>
            <Grid item xs={6}>
              (Lunar Gala)
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  }
}

export default Contracting;

