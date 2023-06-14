import React from 'react';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import useStyles from './stylesheet';

const Filters = () => {

    const classes = useStyles();

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.wrapperRow}>
                <Typography className={classes.heading24}>Filter</Typography>
                <Button>
                    Clear all filters
                </Button>
            </Box>

            <Box className={classes.wrapperCol}>
                <Typography className={classes.heading24}>Location (Jinnah International Airport)</Typography>
                <Box className={classes.checboxWrapper}>
                    <Checkbox />
                    <Typography>Airport (in terminal)</Typography>
                </Box>
                <Box className={classes.checboxWrapper}>
                    <Checkbox />
                    <Typography>Airport (meet & greet)</Typography>
                </Box>
                <Box className={classes.checboxWrapper}>
                    <Checkbox />
                    <Typography>
                        All other locations
                    </Typography>
                </Box>
            </Box>

            <Box className={classes.wrapperCol}>
                <Typography className={classes.heading24}>Price per day</Typography>
                <Box className={classes.wholeWrapper}>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>US$0 - US$50</Typography>
                    </Box>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>US$50 - US$100</Typography>
                    </Box>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>US$100 - US$150</Typography>
                    </Box>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>US$150 - US$200</Typography>
                    </Box>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>US$200 +</Typography>
                    </Box>
                </Box>
            </Box>

            <Box className={classes.wrapperCol}>
                <Typography className={classes.heading24}>Car specs</Typography>
                <Box className={classes.wholeWrapper}>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>Air Conditioning</Typography>
                    </Box>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>4+ doors</Typography>
                    </Box>
                </Box>
            </Box>

            <Box className={classes.wrapperCol}>
                <Typography className={classes.heading24}>Electric cars</Typography>
                <Box className={classes.wholeWrapper}>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>Fully electric</Typography>
                    </Box>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>Hybrid</Typography>
                    </Box>
                </Box>
            </Box>

            <Box className={classes.wrapperCol}>
                <Typography className={classes.heading24}>Mileage/Kilometres</Typography>
                <Box className={classes.wholeWrapper}>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>Limited</Typography>
                    </Box>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>Unlimited</Typography>
                    </Box>
                </Box>
            </Box>

            <Box className={classes.wrapperCol}>
                <Typography className={classes.heading24}>Transmission</Typography>
                <Box className={classes.wholeWrapper}>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>Automatic</Typography>
                    </Box>
                    <Box className={classes.checboxWrapper}>
                        <Checkbox />
                        <Typography>Manual</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default Filters;