import React from "react";
import Image from "next/image";
import { Box, Button, TextField, Typography } from "@mui/material";
import useStyles from "./stylesheet";
import CovidImage from "../../assets/images/thumbnail_covid.png";
import EmailSignupImage from "../../assets/images/email_signup.png";

const HomeCards = () => {

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.mainWrapper}>
        <Box>
          <Image width={112} height={126} src={CovidImage.src} alt="image" />
        </Box>
        <Box className={classes.typoWrapper}>
          <Typography className={classes.title}>{`Clean cars. Flexible bookings. Socially distant rental counters.`}</Typography>
          <Typography className={classes.description}>{`We’re working with our partners to keep you safe and in the driving seat.`}</Typography>
        </Box>
      </Box>

      <Box className={classes.mainWrapper}>
        <Box>

          <Image width={112} height={126} src={EmailSignupImage.src} alt="image" />
        </Box>
        <Box className={classes.typoWrapper}>
          <Typography className={classes.title}>{`Subscribe for exclusive offers and deals!`}</Typography>
          <Box className={classes.inputWithButton}>
            <TextField className={classes.input} placeholder="Email Address" />
            <Button
              className={classes.button}
            >
              Sign Up Me!
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCards;