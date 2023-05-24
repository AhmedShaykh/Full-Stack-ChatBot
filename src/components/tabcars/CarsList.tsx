import React from 'react';
import { Box, Typography } from "@mui/material";
import { tabCars } from "../../static/tabcars.static";
import Image from "next/image";
import useStyles from "./stylesheet";

const CarsList = () => {

    const classes = useStyles();

    return (
        <Box className={classes.TabContainer}>
            {tabCars.map((cars: any, index: number) => (
                <Box key={index} className={classes.Card}>
                    <Image src={cars.carImg} alt={cars.carName} />
                    <Box className={classes.Title}>
                        <Typography className={classes.CarName}>
                            {cars.carName}
                        </Typography>
                        <Typography className={classes.CarSeats}>
                            {cars.seats}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
};

export default CarsList;