import React from 'react';
import { Accordion, AccordionSummary, Box, Typography } from '@mui/material';
import useStyles from "./stylesheet";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DescriptionIcon from '@mui/icons-material/Description';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Accordion1 = () => {

    const classes = useStyles();

    return (
        <Box>
            <Accordion className={classes.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.DialogTypo}>Important Info</Typography>
                </AccordionSummary>
                <Box className={classes.AccordionFlex}>
                    <Box className={classes.AccordionFlex1}>
                        <AccountBoxIcon style={{ marginRight: "0.5rem" }} />
                        <Typography style={{ fontSize: "0.9rem", fontWeight: "600", marginTop: "0.1rem" }}>
                            Driver & licence requirements
                        </Typography>
                    </Box>
                    <Box className={classes.AccordionFlex2}>
                        <Typography style={{ fontSize: "0.9rem" }}>
                            {`When you pick the car up, you'll need:`}
                        </Typography>
                    </Box>
                </Box>
                <hr />
                <Box className={classes.AccordionFlex}>
                    <Box className={classes.AccordionFlex1}>
                        <DescriptionIcon style={{ marginRight: "0.5rem" }} />
                        <Typography style={{ fontSize: "0.9rem", fontWeight: "600", marginTop: "0.1rem" }}>
                            Security deposit
                        </Typography>
                    </Box>
                    <Box className={classes.AccordionFlex2}>
                        <Typography style={{ fontSize: "0.9rem" }}>
                            At pick-up, the main driver will leave a refundable security deposit of AED 3,000.00 on their credit card. Cash and debit cards are not accepted. The counter staff will confirm how much this will be.
                        </Typography>
                    </Box>
                </Box>
                <hr />
                <Box className={classes.AccordionFlex}>
                    <Box className={classes.AccordionFlex1}>
                        <DirectionsCarFilledIcon style={{ marginRight: "0.5rem" }} />
                        <Typography style={{ fontSize: "0.9rem", fontWeight: "600", marginTop: "0.1rem" }}>
                            Damage Excess
                        </Typography>
                    </Box>
                    <Box className={classes.AccordionFlex2}>
                        <Typography style={{ fontSize: "0.9rem" }}>
                            If the cars bodywork gets damaged, the most youll pay towards repairs covered by the Collision Damage Waiver is the damage excess (AED 3,000.00).This cover is only valid if you stick to the terms of the rental agreement. It doesnt cover other parts of the car (e.g. windows, wheels, interior or undercarriage), or charges (e.g. for towing or off-road time), or anything in the car (e.g. child seats, GPS devices or personal belongings).
                        </Typography>
                    </Box>
                </Box>
                <hr />
                <Box className={classes.AccordionFlex}>
                    <Box className={classes.AccordionFlex1}>
                        <LocationOnIcon style={{ marginRight: "0.5rem" }} />
                        <Typography style={{ fontSize: "0.9rem", fontWeight: "600", marginTop: "0.1rem" }}>
                            Mileage
                        </Typography>
                    </Box>
                    <Box className={classes.AccordionFlex2}>
                        <Typography style={{ fontSize: "0.9rem" }}>
                            Your rental includes unlimited free kilometre.
                        </Typography>
                    </Box>
                </Box>
                <hr />
                <Box className={classes.MessageBox}>
                    <Typography className={classes.Message}>
                        Please see full terms below, if there are any differences between the terms and the information above then the terms below will apply.
                    </Typography>
                </Box>
            </Accordion>
        </Box>
    )
};

export default Accordion1;
