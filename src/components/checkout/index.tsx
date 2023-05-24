import React from "react";
import { Box } from "@mui/material";
import MainDriverDetails from "./MainDriverDetails";
import BillingAddress from "./BillingAddress";
import Payment from "./Payment";
import MoneySavingIdea from "./MoneySavingIdea";
import TermsAndConditions from "./TermsAndConditions";
import useStyles from "./stylesheet";

const Checkout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <MainDriverDetails />
      <BillingAddress />
      <Payment />
      <MoneySavingIdea />
      <TermsAndConditions />
    </Box>
  );
};

export default Checkout;
