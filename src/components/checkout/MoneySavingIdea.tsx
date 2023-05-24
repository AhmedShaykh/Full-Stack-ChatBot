import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./stylesheet";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
const MoneySavingIdea = () => {
  const classes = useStyles();
  return (
    <Box className={classes.driverMain} style={{ gap: "15px" }}>
      <Typography className={classes.MainHeading}>
        Ready for some money-saving ideas?
      </Typography>
      <Typography className={classes.subHeadpara}>
        We can send you discounts and other car rental offers, saving you even
        more money in the future.
      </Typography>

      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="No, thanks count me out."
      />
      <Typography>
        Our{" "}
        <span>
          <Link href="#"> Privacy Statement </Link>
        </span>
        tells you how to{" "}
        <span>
          <Link href="#"> unsubscribe </Link>
        </span>
        . It also explains how we use and protect your personal information.
      </Typography>
    </Box>
  );
};

export default MoneySavingIdea;
