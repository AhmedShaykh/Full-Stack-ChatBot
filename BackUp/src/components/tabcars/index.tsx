import React from 'react';
import { Box, Typography, Tab, Tabs } from "@mui/material";
import useStyles from "./stylesheet";
import CarsList from './CarsList';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
};

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
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

const TabCars = () => {

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.mainContainer}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Economy" {...a11yProps(0)} />
                        <Tab label="SUV" {...a11yProps(1)} />
                        <Tab label="Standard" {...a11yProps(2)} />
                        <Tab label="People Carrier" {...a11yProps(3)} />
                        <Tab label="Estate" {...a11yProps(4)} />
                        <Tab label="Convertible" {...a11yProps(5)} />
                        <Tab label="Luxury" {...a11yProps(6)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <CarsList />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CarsList />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <CarsList />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <CarsList />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <CarsList />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <CarsList />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <CarsList />
                </TabPanel>
            </Box>
        </Box>
    )
};

export default TabCars;