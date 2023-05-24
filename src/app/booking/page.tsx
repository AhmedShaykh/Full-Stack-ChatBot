"use client";
import { Box, Typography } from "@mui/material";
import CarDetails from "@/components/cardetails/CarDetails";
import CarCredentials from "@/components/carbooking/CarCredentials";
import PriceAndLocation from "@/components/carbooking/PriceAndLocation";
import FreeCancellation from "@/components/checkout/FreeCancellation";
import InfoBox from "@/components/cardetails/InfoBox";
import { useRouter } from "next/navigation";
import useStyles from "@/components/booking/stylesheet";

const Booking = () => {

    const router = useRouter();

    const classes = useStyles();

    return (
        <Box>
            <Box
                className={classes.mainBox}
            >
                <Box
                    className={classes.wrapper}
                >
                    <Box style={{ marginBottom: "1rem" }}>
                        <FreeCancellation />
                    </Box>
                    <Box
                        onClick={() => {
                            router.push("/search-results");
                        }}
                    >
                        <Typography style={{ color: "#1273C4", cursor: "pointer" }}>
                            Back search results
                        </Typography>
                    </Box>

                    <CarCredentials />

                    <CarDetails />

                    <InfoBox />
                </Box>
                <Box>
                    <PriceAndLocation />
                </Box>
            </Box>
        </Box>
    );
};

export default Booking;