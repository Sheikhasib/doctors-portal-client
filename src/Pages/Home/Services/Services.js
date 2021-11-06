import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, dolore est iste suscipit iure sunt labore aspernatur molestiae aperiam vitae ratione atque, ipsum natus vero porro enim quo! Fugiat, inventore?",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, dolore est iste suscipit iure sunt labore aspernatur molestiae aperiam vitae ratione atque, ipsum natus vero porro enim quo! Fugiat, inventore?",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, dolore est iste suscipit iure sunt labore aspernatur molestiae aperiam vitae ratione atque, ipsum natus vero porro enim quo! Fugiat, inventore?",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{ fontWeight: 500, m:2, color: 'info.main' }} variant="h6" component="div">
          Our Services
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 5, color: 'success.main' }} variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
