import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./stylesheet";
import CheckIcon from "@mui/icons-material/Check";

const FreeCancellation = () => {
  const classes = useStyles();
  return (
    <Box className={classes.freeCancelMain}>
      <CheckIcon sx={{ color: "green", border: "2px solid",borderRadius:"50%" }} />
      <Typography>Free cancellation upto 48 hours before pick-up</Typography>
    </Box>
  );
};

export default FreeCancellation;
