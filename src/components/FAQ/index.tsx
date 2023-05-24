"use client";
import { Box } from "@mui/material";
import useStyles from "./stylesheet";
import Faq from "./Faq";
import Faq2 from "./Faq2";

const FAQMain = () => {

  const classes = useStyles();

  return (
    <Box className={classes.faqContainer}>
      <Faq />
      <Faq2 />
    </Box>
  );
};

export default FAQMain;