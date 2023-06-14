import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import useStyles from './stylesheet';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LocationBar = () => {

    const classes = useStyles();

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.wrapper}>
                <Box className={classes.typoWrapper}>
                    <Typography className={classes.heading1}>Jinnah International Airport</Typography>
                    <Typography className={classes.heading2}>Thu, 30 Mar 2023, 10:00</Typography>
                </Box>

                <Box className={classes.Block}>
                    <ArrowForwardIosIcon />
                </Box>

                <Box className={classes.typoWrapper2}>
                    <Typography className={classes.heading1}>Jinnah International Airport</Typography>
                    <Typography className={classes.heading2}>Thu, 30 Mar 2023, 10:00</Typography>
                </Box>
            </Box>

            <Box>
                <Button className={classes.btn}>EDit</Button>
            </Box>
        </Box>
    )
};

export default LocationBar;