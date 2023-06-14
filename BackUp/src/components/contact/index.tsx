import React from 'react';
import useStyles from "./stylesheet";
import { Box, Button, TextField, Typography } from "@mui/material";
import Booking from "../../assets/images/manage.png";
import Image from 'next/image';

const Contact = () => {

    const classes = useStyles();

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.LeftContainer}>
                <Image
                    src={Booking}
                    alt="Booking"
                    className={classes.Image}
                />
            </Box>

            <Box className={classes.RightContainer}>
                <Box className={classes.Container}>
                    <Typography className={classes.TypoHead}>
                        Manage my booking
                    </Typography>
                    <Typography className={classes.TypoPara}>
                        Just fill in your details to confirm a quote – or to view, change or cancel a booking.
                    </Typography>
                    <Box className={classes.InputBox}>
                        <Typography className={classes.Typo}>
                            Email
                        </Typography>
                        <TextField className={classes.Input} />
                    </Box>
                    <Box className={classes.InputBox}>
                        <Typography className={classes.Typo}>
                            Booking reference number
                        </Typography>
                        <TextField className={classes.Input} />
                    </Box>
                    <Button className={classes.Button}>
                        Find my Booking
                    </Button>
                </Box>
            </Box>
        </Box>
    )
};

export default Contact;