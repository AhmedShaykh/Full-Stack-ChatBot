import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import useStyles from "./stylesheet";
import { relatedSearches } from "../../static/related-searches.static";
import { popularDestination } from "../../static/related-searches.static";
import { Airports } from "../../static/related-searches.static";
import { carRentalCompanies } from "../../static/related-searches.static";
import Link from "next/link";

const Faq2 = () => {

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Typography className={classes.mainHeading}>
        Additional Information
      </Typography>
      <Accordion className={classes.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Related searches</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.linksWrapper}>
            {relatedSearches?.map((item, index) => {
              return (
                <Box
                  key={index}
                // width="inherit"
                >
                  <Link href={item?.link} className={classes.link}>
                    <Typography>{item?.name}</Typography>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Popular Destinations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.linksWrapper}>
            {popularDestination?.map((item, index) => {
              return (
                <Box
                  key={index}
                // width="inherit"
                >
                  <Link href={item?.link} className={classes.link}>
                    {item?.name}
                  </Link>
                </Box>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Airports</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.linksWrapper}>
            {Airports?.map((item, index) => {
              return (
                <Box
                  key={index}
                // width="inherit"
                >
                  <Link href={item?.link} className={classes.link}>
                    {item?.name}
                  </Link>
                </Box>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Car Rental Companies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.linksWrapper}>
            {carRentalCompanies?.map((item, index) => {
              return (
                <Box
                  key={index}
                // width="inherit"
                >
                  <Link href={item?.link} className={classes.link}>
                    {item?.name}
                  </Link>
                </Box>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq2;