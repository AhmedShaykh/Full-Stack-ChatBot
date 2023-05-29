"use client";
import { Box } from "@mui/material";
import LocationBar from "@/components/location-bar/LocationBar";
import MapWithCar from "@/components/Map-with-Car/MapWithCar";
import Filters from "@/components/Filters/Filters";
import Cars from "../CarCard/Cars";
import useStyles from "@/components/result/stylesheet";

const Result = () => {

    const classes = useStyles();

    return (
        <>
            <Box className={classes.pad}>
                <LocationBar />
                <MapWithCar />

                <Box className={classes.mainBox}>
                    <Filters />
                    <Cars />
                </Box>
            </Box>
        </>
    );
};

export default Result;