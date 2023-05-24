"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import CarCredentials from "@/components/carbooking/CarCredentials";
import PriceAndLocation from "@/components/carbooking/PriceAndLocation";
import MainDriverDetails from "@/components/checkout/MainDriverDetails";
import BillingAddress from "@/components/checkout/BillingAddress";
import Payment from "@/components/checkout/Payment";
import MoneySavingIdea from "@/components/checkout/MoneySavingIdea";
import TermsAndConditions from "@/components/checkout/TermsAndConditions";
import FreeCancellation from "@/components/checkout/FreeCancellation";
import WithoutProtection from "@/components/checkout/WithoutProtection";
import LocationBar from "@/components/location-bar/LocationBar";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/index";
import useStyles from "@/components/c-out/stylesheet";

const CheckoutPage = () => {

    const router = useRouter();

    const { withoutProtection } = useAppSelector(
        (state: any) => state.Protection
    );

    const classes = useStyles();

    return (
        <Box>
            <Box style={{ padding: "25px" }}>
                <LocationBar />
            </Box>
            <Box
                onClick={() => {
                    router.push("/booking");
                }}
                style={{ padding: "25px" }}
            >
                <Typography style={{ color: "#1273C4" }}>Back to your deal</Typography>
            </Box>
            <Box style={{ padding: "25px", paddingTop: "0px" }}>
                <Typography style={{ fontSize: "24px", fontWeight: 700 }}>
                    Checkout
                </Typography>
            </Box>
            <Box
                className={classes.mainBox}
            >
                <Box
                    style={{
                        gap: "20px",
                    }}
                    className={classes.wrapper}
                >
                    <CarCredentials />
                    {withoutProtection && <WithoutProtection />}
                    <BillingAddress />
                    <Payment />
                    <FreeCancellation />
                    <MoneySavingIdea />
                    <TermsAndConditions />
                </Box>
                <Box className={classes.priceBox}>
                    <PriceAndLocation />
                </Box>
            </Box>
        </Box>
    );
};

export default CheckoutPage;