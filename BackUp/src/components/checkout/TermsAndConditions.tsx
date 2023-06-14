import React from "react";
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./stylesheet";
import Link from "next/link";

const TermsAndConditions = () => {

  const classes = useStyles();

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        gap: "15px",
      }}
    >
      <Box className={classes.driverMain} style={{ gap: "15px" }}>
        <Typography className={classes.MainHeading}>
          Terms and conditions
        </Typography>
        <Typography>
          By clicking ‘Book now’, you are confirming that you have read,
          understood and accepted our{" "}
          <span>
            <Link href="#">Terms of service </Link>
          </span>
          ,
          <span>
            <Link href="#">Policy Terms </Link>
          </span>
          and
          <span>
            <Link href="#"> the Europcar rental terms</Link>
          </span>
          .
        </Typography>
      </Box>
      <Button
        style={{
          border: "1px solid green",
          backgroundColor: "green",
          color: "white",
          margin: "1rem"
        }}
      >
        Book now
      </Button>
    </Box>
  );
};

export default TermsAndConditions;