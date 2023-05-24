import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import React from "react";
import useStyles from "./stylesheet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MasterCardIcon from "../../assets/SVGs/mastercard.svg";
import VisaIcon from "../../assets/SVGs/visa.svg";
import AmexIcon from "../../assets/SVGs/amex.svg";
import Image from "next/image";
const Payment = () => {
  const classes = useStyles();
  return (
    <Box className={classes.driverMain}>
      <Box className={classes.headingBox}>
        <Typography className={classes.MainHeading}>
          How would you like to pay?
        </Typography>
        <Box style={{ display: "flex", gap: "20px" }}>
          <Image src={MasterCardIcon} alt="..." />
          <Image src={VisaIcon} alt="..." />
          <Image src={AmexIcon} alt="..." />
        </Box>
      </Box>

      <Box className={classes.driverFieldWrapper}>
        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>
            Card holder Name
          </Typography>
          <TextField fullWidth />
        </Box>

        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>Card Number</Typography>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CreditCardIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box className={classes.paymentBottom}>
          <Box style={{marginTop:"4px"}}>
            <Typography className={classes.fieldLabels}>Expiry Date</Typography>
            <TextField fullWidth placeholder="MM/YY" />
          </Box>
          <Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography className={classes.fieldLabels}>CVC</Typography>

              <HelpOutlineIcon sx={{ marginBottom: "5px" }} />
            </Box>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
