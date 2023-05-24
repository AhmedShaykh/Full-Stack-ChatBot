/* eslint-disable react/no-unescaped-entities */
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import useStyles from "./stylesheet";

const Faq = () => {

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Typography className={classes.mainHeading}>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What do i need to rent a car?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To book your car, all you need is a credit or debit card. When you
            pick the car up, youll need: Your voucher / eVoucher, to show that
            you have paid for the car. The main drivers credit / debit card,
            with enough available funds for the cars deposit. Each drivers full,
            valid driving licence, which they have held for at least 12 months
            (often 24). Your passport and any other ID the car hire company
            needs to see.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How old do i have to be to rent a car?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For most car rental companies, the age requirement is between 21 and
            70 years old. If you're under 25 or over 70, you might have to pay
            an additional fee.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can i book a rental car for someone else?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, as long as they meet these requirements. Just fill in their
            details while you're making the reservation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do i find the cheapest car rental deal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We work with all the major international car hire brands (and lots
            of smaller local companies) to bring you a huge choice of cars at
            the very best prices. That's how we can find you cheap car hire
            deals at over 60,000 locations worldwide. To compare prices and find
            your ideal car at an unbeatable price, just use our search form.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            What should i look for when i am choosing a car?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Space: You'll enjoy your rental far more if you choose a car with
            plenty of room for your passengers and luggage. Fuel policy: Not
            planning on driving much? A Like for like fuel policy can save you a
            lot of money. Location: You can't beat an 'on-airport' pick-up for
            convenience, but an 'off-airport' pick-up with a shuttle bus can be
            much cheaper.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Are all fees included in the rental price?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The vast majority of our rentals include Theft Protection, Collision
            Damage Waiver (CDW), local taxes, airport surcharges and any road
            fees. You'll pay for any ‘extras' when you pick your car up, along
            with any young driver, additional driver or one-way fees – but we'll
            explain any additional costs before you book your car (and taking
            your own child seats or GPS can be an easy way to reduce your
            costs). For more details on what's included, just check the Ts&Cs of
            any car you're looking at.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;