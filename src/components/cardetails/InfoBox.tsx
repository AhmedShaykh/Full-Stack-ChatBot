import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./stylesheet";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const InfoBox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.infoBox}>
      <HelpOutlineIcon sx={{ color: "#F56700" }} />
      <Typography style={{fontWeight:"bold"}}>
        Please note: <span style={{fontWeight:100}}> Your own car insurance is unlikely to cover hire cars</span>
      </Typography>
    </Box>
  );
};

export default InfoBox;
