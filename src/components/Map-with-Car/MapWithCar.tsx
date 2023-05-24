import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import useStyles from "./stylesheet";

const MapWithCar = () => {

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.mapContainer}>
        <Image src={"https://cdn2.rcstatic.com/images/map/background.png"} alt="map" width={100} height={100} />
      </Box>

      <Box className={classes.wrapper}>
        <Typography className={classes.mainHeading}>Jinnah International Airport: 2 cars available</Typography>
        <Box className={classes.CarBox}>
          <Box className={classes.carImgWrapper}>
            <Image
              src={
                "https://cdn2.rcstatic.com/images/car_images/web/fiat/500_lrg.jpg"
              }
              alt=""
              width={100}
              height={60}
            />
            <Box className={classes.CarWrapper}>
              <Typography sx={{
                fontSize: "14px",
                fontWeight: "bold",
              }}>
                Small
              </Typography>
              <Typography sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1879ca"
              }}>
                Popular
              </Typography>
            </Box>
          </Box>
          <Box className={classes.carImgWrapper}>
            <Image
              src={
                "https://cdn2.rcstatic.com/images/car_images/web/ford/fiesta_lrg.jpg"
              }
              alt=""
              width={100}
              height={60}
            />
            <Box className={classes.CarWrapper}>
              <Typography sx={{
                fontSize: "14px",
                fontWeight: "bold",
              }}>
                Medium
              </Typography>
              <Typography sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1879ca"
              }}>
                Popular
              </Typography>
            </Box>
          </Box>
          <Box className={classes.carImgWrapper}>
            <Image
              src={
                "https://cdn2.rcstatic.com/images/car_images/web/vauxhall/insignia_lrg.jpg"
              }
              alt=""
              width={100}
              height={60}
            />
            <Box className={classes.CarWrapper}>
              <Typography sx={{
                fontSize: "14px",
                fontWeight: "bold",
              }}>
                Large
              </Typography>
              <Typography sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1879ca"
              }}>
                Popular
              </Typography>
            </Box>
          </Box>
          <Box className={classes.carImgWrapper}>
            <Image
              src={
                "https://cdn2.rcstatic.com/images/car_images/web/mercedes/e_class_lrg.jpg"
              }
              alt=""
              width={100}
              height={60}
            />
            <Box className={classes.CarWrapper}>
              <Typography sx={{
                fontSize: "14px",
                fontWeight: "bold",
              }}>
                Premium
              </Typography>
              <Typography sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1879ca"
              }}>
                Popular
              </Typography>
            </Box>
          </Box>
          <Box className={classes.carImgWrapper}>
            <Image
              src={
                "https://cdn2.rcstatic.com/images/car_images/web/citroen/c4_grand_picasso_lrg.jpg"
              }
              alt=""
              width={100}
              height={60}
            />
            <Box className={classes.CarWrapper}>
              <Typography sx={{
                fontSize: "14px",
                fontWeight: "bold",
              }}>
                People Carrires
              </Typography>
              <Typography sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1879ca"
              }}>
                Popular
              </Typography>
            </Box>
          </Box>
          <Box className={classes.carImgWrapper}>
            <Image
              src={
                "https://cdn2.rcstatic.com/images/car_images/web/bmw/x1_lrg.jpg"
              }
              alt=""
              width={100}
              height={60}
            />
            <Box className={classes.CarWrapper}>
              <Typography sx={{
                fontSize: "14px",
                fontWeight: "bold",
              }}>
                SUV's
              </Typography>
              <Typography sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1879ca"
              }}>
                Popular
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MapWithCar;