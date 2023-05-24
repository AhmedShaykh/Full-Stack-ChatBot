"use client";
import React from 'react';
import { Box } from '@mui/material';
import TopWorldAirports from './TopWorldAirports';
import TopWorldDestination from './TopWorldDestination';
import useStyles from './stylesheet';

const TopWorldwideCards = () => {

  const classes = useStyles();

  return (
    <Box className={classes.topCardsContainer}>
      <TopWorldDestination />
      <TopWorldAirports />
    </Box>
  )
};

export default TopWorldwideCards;