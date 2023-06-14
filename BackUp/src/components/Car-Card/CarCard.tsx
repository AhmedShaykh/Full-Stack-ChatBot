import { Box, Button } from "@mui/material";
import React from "react";
import useStyles from "./stylesheet";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CarCard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.tabsWrapper}>
        <Typography>Sort by</Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Recommended" {...a11yProps(0)} />
          <Tab label="Price (lowest first)" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Box className={classes.carsWrapper}>
        <Box className={classes.carCard}>
          <Box className={classes.imageWrapper}>
            <Image
              src={
                "https://cdn2.rcstatic.com/images/car_images/new_images/toyota/corolla_hatch_lrg.jpg"
              }
              width={30}
              height={100}
              alt="car"
            />
          </Box>

          <Box className={classes.contentWrapper}>
            <Box className={classes.viewWrapper}>
              <Box className={classes.chipWrapper}>
                <Box className={classes.chip}>
                  <Typography>Top Pick</Typography>
                </Box>
                <Box className={classes.chip}>
                  <Typography>Top Pick</Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                    <Typography>OK</Typography>
                    <Typography>2 reviews</Typography>
                </Box>
                <Box>
                    6.2
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography>Toyota Corolla</Typography>
              <Typography>or similar medium car</Typography>
            </Box>

            <Box>
              <Box></Box>
              <Box></Box>
            </Box>

            <Box>
              <Box></Box>
              <Button></Button>
            </Box>

            <Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarCard;
