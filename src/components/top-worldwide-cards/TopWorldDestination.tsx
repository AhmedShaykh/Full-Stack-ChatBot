import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { TopWorldDestinationData } from '../../static/top-world-destination.static';
import useStyles from './stylesheet';

const TopWorldDestination = () => {

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography className={classes.mainHading}>Top Worldwide Destinations</Typography>
      </Box>
      <Box className={classes.linksWrapper}>
        {TopWorldDestinationData?.map((item, index) => {
          return (
            <Box key={index}>
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

export default TopWorldDestination;