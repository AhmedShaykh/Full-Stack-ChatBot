import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../../src/components/Navbar/Navbar";
import CarCredentials from "../../src/components/carbooking/CarCredentials";
import PriceAndLocation from "../../src/components/carbooking/PriceAndLocation";
import MainDriverDetails from "../../src/components/checkout/MainDriverDetails";
import BillingAddress from "../../src/components/checkout/BillingAddress";
import Payment from "../../src/components/checkout/Payment";
import MoneySavingIdea from "../../src/components/checkout/MoneySavingIdea";
import TermsAndConditions from "../../src/components/checkout/TermsAndConditions";
import FreeCancellation from "../../src/components/checkout/FreeCancellation";
import WithoutProtection from "../../src/components/checkout/WithoutProtection";
import LocationBar from "../../src/components/location-bar/LocationBar";
import { useRouter } from "next/router";
import { useAppSelector } from "../../src/store/index";
import useStyles from "../../src/components/c-out/stylesheet";

const CheckoutPage = () => {

  const router = useRouter();

  const { withoutProtection } = useAppSelector(
    (state: any) => state.Protection
  );

  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <Box style={{ padding: "25px" }}>
        <LocationBar />
      </Box>
      <Box
        onClick={() => {
          router.push("/booking");
        }}
        style={{ padding: "25px" }}
      >
        <Typography style={{ color: "#1273C4" }}>Back to your deal</Typography>
      </Box>
      <Box style={{ padding: "25px", paddingTop: "0px" }}>
        <Typography style={{ fontSize: "24px", fontWeight: 700 }}>
          Checkout
        </Typography>
      </Box>
      <Box
        className={classes.mainBox}
      >
        <Box
          style={{
            gap: "20px",
          }}
          className={classes.wrapper}
        >
          <CarCredentials />
          {withoutProtection && <WithoutProtection />}
          <BillingAddress />
          <Payment />
          <FreeCancellation />
          <MoneySavingIdea />
          <TermsAndConditions />
        </Box>
        <Box className={classes.priceBox}>
          <PriceAndLocation />
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
