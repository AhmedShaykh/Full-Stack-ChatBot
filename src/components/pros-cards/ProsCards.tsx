"use client";
import { Box } from '@mui/material';
import { ProsStaticData } from '../../static';
import { ImageWithContent } from '../reusable-components';
import useStyles from './stylesheet';

const ProsCards = () => {

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      {ProsStaticData?.map((pro: any, index: number) => (
        <ImageWithContent image={pro.image} title={pro.title} description={pro.description} key={index} />
      ))}
    </Box>
  )
};

export default ProsCards;