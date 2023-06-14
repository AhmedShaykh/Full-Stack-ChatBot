import React from "react";
import useStyles from "./stylesheet";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRouter } from "next/router";

const HeroSection = () => {

  const classes = useStyles();

  const router = useRouter();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.wrapper}>
        <Box className={classes.heroContainer}>
          <Typography variant="h1" className={classes.mainHeading}>
            Car Hire – Search, Compare & Save
          </Typography>
          <Box className={classes.listContainer}>
            <Box className={classes.listWrap}>
              <CheckIcon style={{ fill: "#fff" }} />
              <Typography className={classes.listTypo}>
                Free cancellations on most bookings
              </Typography>
            </Box>
            <Box className={classes.listWrap}>
              <CheckIcon style={{ fill: "#fff" }} />
              <Typography className={classes.listTypo}>
                60,000+ locations
              </Typography>
            </Box>
            <Box className={classes.listWrap}>
              <CheckIcon style={{ fill: "#fff" }} />
              <Typography className={classes.listTypo}>
                Customer support in 40+ languages
              </Typography>
            </Box>
          </Box>
          <Box className={classes.locationContainer}>
            <Box className={classes.locationWrapper}>
              <Box className={classes.leftSideContainer}>
                <TextField
                  className={classes.locationPickerTextField}
                  placeholder="Pick-up Location"
                  InputProps={{
                    startAdornment: <SearchIcon style={{ marginRight: "5px" }} />,
                  }}
                />
              </Box>
              <Box className={classes.rightSideContainer}>
                <Box>
                  <TextField
                    className={classes.rightSideTextField}
                    placeholder="Pick-up Date"
                    InputProps={{
                      startAdornment: (
                        <CalendarTodayIcon style={{ fontSize: "14px", marginRight: "3px" }} />
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <TextField
                    className={classes.rightSideTextField2}
                    placeholder="Time"
                    InputProps={{
                      startAdornment: (
                        <AccessTimeIcon style={{ fontSize: "14px", marginRight: "3px" }} />
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <TextField
                    className={classes.rightSideTextField}
                    placeholder="Drop-off Date"
                    InputProps={{
                      startAdornment: (
                        <CalendarTodayIcon style={{ fontSize: "14px", marginRight: "3px" }} />
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <TextField
                    className={classes.rightSideTextField2}
                    placeholder="Time"
                    InputProps={{
                      startAdornment: (
                        <AccessTimeIcon style={{ fontSize: "14px", marginRight: "3px" }} />
                      ),
                    }}
                  />
                </Box>
              </Box>
              <Button className={classes.searchButton}
                onClick={() => {
                  router.push("/search-results");
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
          <Box className={classes.bottomContainer}>
            <Box className={classes.checkboxContainer}>
              <Checkbox className={classes.checkbox} color="default" />
              <Typography className={classes.checkboxTypo}>
                Drop car off at different location
              </Typography>
            </Box>
            <Box className={classes.checkboxContainer}>
              <Checkbox className={classes.checkbox} color="default" />
              <Typography className={classes.checkboxTypo}>
                Driver aged 30 - 65 ?
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;