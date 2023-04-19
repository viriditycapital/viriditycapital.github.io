import React from "react";
import Toolbar from "../components/TopToolbar";
import { Box, Grid } from "@mui/material";
import lunargala from '../assets/lunargala.jpg';

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
            <Grid item xs={6} display={"flex"} alignItems={"center"}>
              Product Engineering: Design and implementation
            </Grid>
            <Grid item xs={6}>
              <a target="_blank" href="http://2021.lunargala.org/">
                <img
                  src={lunargala}
                  alt="My Image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </a>
            </Grid>
            <Grid item xs={6}>
              Machine Learning
            </Grid>
            <Grid item xs={6} display={"flex"} alignItems={"center"}>
              (ML Picture)
            </Grid>
            <Grid item xs={6} display={"flex"} alignItems={"center"}>
              Computer Systems
              OS, Compilers, Distributed Systems
            </Grid>
            <Grid item xs={6}>
              (Tech picture)
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  }
}

export default Contracting;

