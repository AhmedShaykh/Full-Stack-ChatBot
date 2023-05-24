import { useState } from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./stylesheet";
import Modal from "@mui/material/Modal";
import PickupModal from "./PickupModal";
import DropoffModal from "./DropoffModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "none",
  boxShadow: 24,
  overflowY: "auto" as "auto",
  maxHeight: "90%",
  borderRadius: "10px",
};

const PriceAndLocation = () => {

  const classes = useStyles();

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleOpen2 = () => setOpen(true);

  return (
    <Box className={classes.pricelocBox}>
      <Box className={classes.boxes}>
        <Typography
          className={classes.heading}
          style={{ marginBottom: "1rem" }}
        >
          Pick-up and drop-off
        </Typography>
        <Box className={classes.circleTxtWrap}>
          <Box className={classes.circular}></Box>
          <Typography className={classes.text}>Sat, 8 Apr · 10:00 </Typography>
        </Box>
        <Box className={classes.lineBox}>
          <Box className={classes.straightLine}></Box>
          <Box>
            <Typography className={classes.cardloctypo}>
              Jinnah International Airport
            </Typography>
            <Typography className={classes.instructtypo} onClick={handleOpen}>
              View pick-up instructions
            </Typography>
          </Box>
        </Box>
        <Box className={classes.circleTxtWrap2}>
          <Box className={classes.circular}></Box>
          <Box>
            <Typography
              className={classes.text}
              style={{ marginBottom: "1rem" }}
            >
              Sat, 8 Apr · 10:00
            </Typography>
            <Box>
              <Typography className={classes.cardloctypo}>
                Jinnah International Airport
              </Typography>
              <Typography
                className={classes.instructtypo}
                onClick={handleOpen2}
              >
                View drop-off instructions
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.boxes}>
        <Typography
          className={classes.heading}
          style={{ marginBottom: "1rem" }}
        >
          Car price breakdown
        </Typography>
        <Box className={classes.priceWrapper}>
          <Typography className={classes.text}>Car hire charge</Typography>
          <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
            US$34
          </Typography>
        </Box>
        <Box
          className={classes.priceWrapper}
          style={{ border: "none", padding: "0", paddingTop: "1rem" }}
        >
          <Typography className={classes.text}>Price for 1 day:</Typography>
          <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
            US$34
          </Typography>
        </Box>
      </Box>
      
      <Box className={classes.greenbox}>
        <Typography style={{ fontWeight: "bold" }}>
          This car is costing you just US$63.65 – a real bargain…
        </Typography>
        <Typography>
          At that time of year, the average medium car at Jinnah International
          Airport costs US$72.14!
        </Typography>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PickupModal />
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DropoffModal />
        </Box>
      </Modal>
    </Box>
  );
};

export default PriceAndLocation;