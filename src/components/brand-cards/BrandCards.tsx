"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { BrandStaticData } from "../../static";
import Image from "next/image";
import useStyles from './stylesheet'

const BrandCards = () => {

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.typoWrapper}>
        <Typography className={classes.typo}>Connecting you to the biggest brands in car rental</Typography>
      </Box>
      <Box className={classes.brandContainer}>
        {BrandStaticData?.map((brand: any, index: number) => {
          return (
            <Box className={classes.imgWrapper} key={index}>
              <Image className={classes.img} src={brand.image} alt={brand.name} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default BrandCards;