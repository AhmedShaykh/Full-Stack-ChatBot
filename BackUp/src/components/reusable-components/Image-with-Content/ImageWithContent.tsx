import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import useStyles from "./stylesheet";

const ImageWithContent = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Image width={64} height={64} src={image} alt="image" />
      </Box>
      <Box className={classes.typoWrapper}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.description}>{description}</Typography>
      </Box>
    </Box>
  );
};

export default ImageWithContent;
