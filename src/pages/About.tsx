import React from "react";
import Toolbar from "../components/TopToolbar";
import { Box, Grid } from "@mui/material";

class Careers extends React.Component {
  render() {
    return <Box sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <h1>About Us</h1>
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
        </Grid>
      </Grid>
    </Box>
  }
}

export default Careers;
