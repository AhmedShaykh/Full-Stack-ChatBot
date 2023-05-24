import { Box, Button, Typography, TextField, MenuItem } from "@mui/material";
import React from "react";
import useStyles from "./stylesheet";
import { titles, countries } from "../../static/driverdetail.static";
import Link from "next/link";

const MainDriverDetails = () => {
  const classes = useStyles();
  return (
    <Box className={classes.driverMain}>
      <Box className={classes.headingBox}>
        <Typography className={classes.MainHeading}>
          Main driver s details
        </Typography>
        <Typography className={classes.subHeadpara}>
          As they appear on driving licence
        </Typography>
      </Box>

      <Box className={classes.driverFieldWrapper}>
        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>Email Address</Typography>
          <TextField
            helperText="So we can send the confirmation email and voucher"
            fullWidth
          />
        </Box>
        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>Title</Typography>
          <TextField fullWidth select>
            {titles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>First Name</Typography>
          <TextField fullWidth />
        </Box>
        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>Last Name</Typography>
          <TextField fullWidth />
        </Box>
        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>
            Country of residence
          </Typography>
          <TextField fullWidth select>
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>
            Flight No (optional)
          </Typography>
          <TextField
            helperText="Just in case the flight is delayed"
            fullWidth
          />
        </Box>

        <Typography>
          Our{" "}
          <span>
            <Link href="#"> Privacy Statement </Link>{" "}
          </span>{" "}
          explains how we use and protect your personal information.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainDriverDetails;