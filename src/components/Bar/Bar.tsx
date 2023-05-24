"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./stylesheet";

const Bar = () => {

    const classes = useStyles();

    return (
        <Box className={classes.barContainer}>
            <Typography className={classes.typo}>Privacy Statement</Typography>
            <Typography className={classes.typo}>Cookies</Typography>
            <Typography className={classes.typo}>Terms of service</Typography>
            <Typography className={classes.typo}>Help</Typography>
            <Typography className={classes.typo}>Modern Slavery Statement</Typography>
            <Typography className={classes.typo}>Supply Partner Enquiry and Marketplace</Typography>
            <Typography className={classes.typo}>Affiliate Programme</Typography>
            <Typography className={classes.typo}>Careers</Typography>
        </Box>
    );
};

export default Bar;