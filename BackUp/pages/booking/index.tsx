import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../../src/components/Navbar/Navbar";
import CarDetails from "../../src/components/cardetails/CarDetails";
import CarCredentials from "../../src/components/carbooking/CarCredentials";
import PriceAndLocation from "../../src/components/carbooking/PriceAndLocation";
import FreeCancellation from "../../src/components/checkout/FreeCancellation";
import InfoBox from "../../src/components/cardetails/InfoBox";
import { useRouter } from "next/router";
import useStyles from "../../src/components/booking/stylesheet";

const Booking = () => {

  const router = useRouter();

  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <Box
        className={classes.mainBox}
      >
        <Box
          className={classes.wrapper}
        >
          <Box style={{ marginBottom: "1rem" }}>
            <FreeCancellation />
          </Box>
          <Box
            onClick={() => {
              router.push("/search-results");
            }}
          >
            <Typography style={{ color: "#1273C4", cursor: "pointer" }}>
              Back search results
            </Typography>
          </Box>
          <CarCredentials />
          <CarDetails />
          <InfoBox />
        </Box>
        <Box>
          <PriceAndLocation />
        </Box>
      </Box>
    </Box>
  );
};
export default Booking;