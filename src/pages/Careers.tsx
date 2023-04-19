import React from "react";
import Toolbar from "../components/TopToolbar";
import { Box, Grid } from "@mui/material";

class Careers extends React.Component {
  render() {
    return <Box sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <h1>Open Positions</h1>
          <p>
            At Viridity Capital LLC, we imagine, invent, and deliver new ways to
            better serve our employees, our clients, and the world. We invite you
            to be a part of our team and help shape the future.
          </p>
          <p>
            We are hiring for the following positions:
            <ul>
              <li>Software Engineer</li>
              <li>Product Designer</li>
            </ul>
            We are looking for people that are always pushing the status quo and
            looking for better ways to do things. We want you to be
            self-sufficient, and able to find creative solutions to hard
            problems. Most of all, we want you to believe in our vision.
          </p>
        </Grid>
      </Grid>
    </Box>
  }
}

export default Careers;
