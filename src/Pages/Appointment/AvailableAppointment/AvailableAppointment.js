import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "08.00AM - 09.00AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00AM - 10.00AM",
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00AM - 11.00AM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00AM - 12.00PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00PM - 07.00PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "08.00AM - 09.00AM",
    space: 10,
  }
];

const AvailableAppointment = ({ date }) => {
  return (
    <Container>
      <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Available Appointment on {date.toDateString()}</Typography>
      <Grid container spacing={2}>
        {
            bookings.map(booking => <Booking 
                key={booking.id}
                booking={booking}
                date={date}
            ></Booking>)
        }
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
