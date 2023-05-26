"use client";
import { useEffect, useState, useMemo } from "react";
import { Box } from "@mui/material";
import LocationBar from "@/components/location-bar/LocationBar";
import MapWithCar from "@/components/Map-with-Car/MapWithCar";
import Filters from "@/components/Filters/Filters";
import CarCard from "@/components/CarCard/CarCard";
import { CarService } from "@/services/cars.services";
import useStyles from "@/components/result/stylesheet";

const SearchResult = () => {

    const [cars, setCars] = useState([]);

    const classes = useStyles();

    const carService: CarService = useMemo(() => new CarService(), []);

    useEffect(() => {

        const getCars = async () => {

            const cars = await carService.getCars();

            setCars(cars);
        };

        getCars();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const carImg: any = "https://blog.olx.com.pk/wp-content/uploads/2022/02/Honda-Civic-2022-O.jpg";

    return (
        <>
            <Box
                className={classes.pad}
            >
                <LocationBar />
                <MapWithCar />
                <Box
                    className={classes.mainBox}
                >
                    <Filters />
                    <Box className={classes.wrapper}>
                        {cars.map((i: any) => (
                            <Box key={i.id}>
                                <CarCard
                                    carImg={carImg}
                                    topRated={true}
                                    price={i.specifications.price_per_day}
                                    location={"Jinnah airport"}
                                    reviews={"10"}
                                    rating={"9"}
                                    largeBags={"2"}
                                    smallBags={"3"}
                                    days={"1"}
                                    seats={"5"}
                                    CarName={i.specifications.mark}
                                    transmission={i.specifications.transmission}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default SearchResult;