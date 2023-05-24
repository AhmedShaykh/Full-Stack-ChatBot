import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import useStyles from "./stylesheet";
import { Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#07690c' : '#fffb0d',
    },
}));

export default function ProgressBar() {

    const classes = useStyles();

    return (
        <Box className={classes.ProgressDiv}>
            <Typography className={classes.Typo}>
                Customer ratings
            </Typography>

            <Box className={classes.ProgressBox}>
                <Typography className={classes.Typo2}>
                    Value Of Money
                </Typography>
                <Typography className={classes.Typo2}>
                    6.3
                </Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={60} />

            <Box className={classes.ProgressBox}>
                <Typography className={classes.Typo2}>
                    Easy to find
                </Typography>
                <Typography className={classes.Typo2}>
                    5.0
                </Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={50} />

            <Box className={classes.ProgressBox}>
                <Typography className={classes.Typo2}>
                    Value Of Money
                </Typography>
                <Typography className={classes.Typo2}>
                    7.1
                </Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={70} />
            <br />
        </Box>
    );
};