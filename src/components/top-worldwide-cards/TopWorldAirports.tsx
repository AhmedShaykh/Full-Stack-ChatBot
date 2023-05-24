import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { TopWorldAirportsData } from '../../static/top-world-airports.static';
import useStyles from './stylesheet';

const TopWorldAirports = () => {

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography className={classes.mainHading}>Top Worldwide Airports</Typography>
      </Box>
      <Box className={classes.linksWrapper}>
        {TopWorldAirportsData?.map((item, index) => {
          return (
            <Box
              key={index}
            >
              <Link
                href={item?.link}
                className={classes.link}
              >{item?.name}</Link>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
};

export default TopWorldAirports;