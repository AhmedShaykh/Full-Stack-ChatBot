"use client";
import { useEffect, useState, useMemo } from "react";
import CarCard from "@/components/CarCard/CarCard";
import { Box } from "@mui/material";
import { CarService } from "@/services/cars.services";
// import axios from "axios";
// import useSWR from "swr";
import useStyles from "@/components/result/stylesheet";

const Cars = () => {

    // const url = 'https://car-rentals.herokuapp.com/api/get-vehicles/63d2344d383aec4d08acea79';

    // const fetcher = (url: any) => fetch(url).then((res) => res.json());

    // const { data, error } = useSWR(url, fetcher);

    const [cars, setCars] = useState([]);

    const classes = useStyles();

    // useEffect(() => {
    //     // Code to execute when the component mounts or when the dependencies change

    //     if (error) {
    //         console.log('Loading failed...');
    //         // Handle error state
    //     }

    //     if (!data) {
    //         console.log('Loading...');
    //         // Handle loading state
    //     } else {
    //         setCars(data);
    //     }

    //     // Additional actions using the retrieved data

    //     // Cleanup function (if necessary)
    //     // return () => {
    //     //     // Clean up any resources that were used
    //     // };

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [data]);

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
        </>
    )
};

export default Cars;