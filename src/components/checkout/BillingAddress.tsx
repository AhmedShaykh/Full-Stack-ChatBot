import { Box, Button, Typography, TextField, MenuItem } from "@mui/material";
import React from "react";
import useStyles from "./stylesheet";
import { countries } from "../../static/driverdetail.static";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const BillingAddress = () => {
  const classes = useStyles();
  return (
    <Box className={classes.driverMain}>
      <Typography
        className={classes.MainHeading}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
        }}
      >
        Billing Address
      </Typography>

      <Box className={classes.driverFieldWrapper}>
        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>First Name</Typography>
          <TextField fullWidth />
        </Box>
        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>Last Name</Typography>
          <TextField fullWidth />
        </Box>

        {/* contact wala */}

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
          <Typography className={classes.fieldLabels}>Address</Typography>
          <TextField
            fullWidth
            placeholder="House/ apartment no and street name"
          />
        </Box>
        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>City</Typography>
          <TextField fullWidth />
        </Box>
        <Box className={classes.fieldWidth}>
          <Typography className={classes.fieldLabels}>Post Code</Typography>
          <TextField fullWidth />
        </Box>
        <Box>
          <Typography className={classes.fieldLabels}>
            Is this a business booking?
          </Typography>
          <Box>
            <FormControlLabel value="female" control={<Radio />} label="Yes" />
            <FormControlLabel value="male" control={<Radio />} label="No" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BillingAddress;
