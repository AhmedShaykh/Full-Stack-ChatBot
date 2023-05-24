import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useStyles from "./stylesheet";
import Image from "next/image";
import SampleCar from "../../assets/images/SampleCar.jpg";
import PersonIcon from "@mui/icons-material/Person";
import EuroCarLogo from "../../assets/images/europcar_logo.gif";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CarKeys from "../../assets/images/carkeys.png";
import CheckIcon from "@mui/icons-material/Check";

const CarCredentials = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.maincarcred}>
        <Box>
          <Image src={SampleCar} alt="..." />
        </Box>
        <Box className={classes.carCredRight}>
          <Box className={classes.ratingbox}>
            <Typography style={{ color: "white" }}>Top Rated</Typography>
          </Box>
          <Typography className={classes.carnameTypo}>
            Toyota Corolla
            <span
              style={{ fontSize: "14px", fontWeight: "400", marginLeft: "6px" }}
            >
              or similar medium car
            </span>
          </Typography>
          <Box className={classes.carPropWrapper}>
            <Box className={classes.iconTypoWrapper}>
              <PersonIcon />
              <Typography className={classes.fWeight300}>5 seats</Typography>
            </Box>
            <Box className={classes.iconTypoWrapper}>
              <PersonIcon />
              <Typography className={classes.fWeight300}>Manual</Typography>
            </Box>
            <Box className={classes.iconTypoWrapper}>
              <PersonIcon />
              <Typography className={classes.fWeight300}>
                1 large bag
              </Typography>
            </Box>
            <Box className={classes.iconTypoWrapper}>
              <PersonIcon />
              <Typography className={classes.fWeight300}>
                1 small bag
              </Typography>
            </Box>
            <Box className={classes.iconTypoWrapper} style={{ width: "175px" }}>
              <PersonIcon />
              <Typography className={classes.fWeight300}>
                Unlimited mileage
              </Typography>
            </Box>
          </Box>
          <Typography>Jinnah International Airport</Typography>
          <Typography style={{ fontSize: "14px", fontWeight: "400" }}>
            In terminal
          </Typography>
        </Box>
      </Box>
      <Box className={classes.carCompanyBox}>
        <Box className={classes.carCompnayContent}>
          <Image src={EuroCarLogo} alt="..." />
          <Box className={classes.ratingbox2}>
            <Typography style={{ color: "white" }}>6.2</Typography>
          </Box>
          <Box>
            <Typography>Ok</Typography>
            <Typography>2 reviews</Typography>
          </Box>
        </Box>
        <Box className={classes.carCompnayContent}>
          <ErrorOutlineIcon sx={{ color: "#1273c4" }} />
          <Typography style={{ color: "#1273c4" }}>Important Info</Typography>
        </Box>
      </Box>
      <Box className={classes.choiceContainer}>
        <Box className={classes.choicebox}>
          <Typography
            className={classes.heading}
            style={{ marginBottom: "1rem" }}
          >
            Great Choice
          </Typography>
          <Box className={classes.contentBox}>
            <Box className={classes.contentContainer}>
              <Box className={classes.tickTextContainer}>
                <CheckIcon sx={{ color: "green" }} />
                <Typography className={classes.text}>
                  Customer rating: 6.2/10
                </Typography>
              </Box>
              <Box className={classes.tickTextContainer}>
                <CheckIcon sx={{ color: "green" }} />
                <Typography className={classes.text}>
                  Most popular country here
                </Typography>
              </Box>
            </Box>
            <Box className={classes.contentContainer}>
              <Box className={classes.tickTextContainer}>
                <CheckIcon sx={{ color: "green" }} />
                <Typography className={classes.text}>
                  Rental counter in terminal
                </Typography>
              </Box>
              <Box className={classes.tickTextContainer}>
                <CheckIcon sx={{ color: "green" }} />
                <Typography className={classes.text}>
                  Most popular fuel policy
                </Typography>
              </Box>
            </Box>
            <Box className={classes.tickTextContainer}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography className={classes.text}>
                Free cancellation
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box style={{margin:"auto"}}>
          <Image src={CarKeys} alt="..." width={134} height={110} />
        </Box>
      </Box>
    </>
  );
};

export default CarCredentials;
