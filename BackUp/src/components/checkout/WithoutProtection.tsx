import { Box, Button, Typography, TextField, MenuItem } from "@mui/material";
import React from "react";
import useStyles from "./stylesheet";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";

const WithoutProtection = () => {
  const options = [
    {
      label: "Refunds damages /  theft excess charges",
      value: "Refunds damages /  theft excess charges",
    },
    {
      label: "Refunds repair bills (excluding exterior)",
      value: "Refunds repair bills (excluding exterior)",
    },
    {
      label: "Refunds breakdown and admin fees",
      value: "Refunds breakdown and admin fees",
    },
  ];
  const classes = useStyles();
  return (
    <Box className={classes.withoutProtectionMain}>
      <Box className={classes.proHeadBox}>
        <Typography style={{ fontSize: "20px", fontWeight: 700 }}>
          Are you sure you do not want Full Protection Insurance?
        </Typography>
        <Typography style={{ fontSize: "20px", fontWeight: 700 }}>
          US$ 59.90
        </Typography>
      </Box>
      <Typography style={{ marginBottom: "1rem" }}>
        Your rental car’s basic cover has a US$324.68 excess and only covers
        theft and bodywork damage. Full Protection Insurance covers so much
        more.
      </Typography>
      <TextField fullWidth select>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Box style={{ display: "flex", gap: "10px" }}>
              <CheckIcon sx={{ color: "green" }} />
              <>{option.label}</>
            </Box>
          </MenuItem>
        ))}
      </TextField>
      <Box className={classes.proBtnBox}>
        <Box>
          <Typography>Exclusions apply</Typography>
          <Link href="#">Policy Terms</Link>
        </Box>
        <Button style={{ border: "1px solid", padding: "10px" }}>
          Add Full Protection Insurance
        </Button>
      </Box>
    </Box>
  );
};

export default WithoutProtection;
