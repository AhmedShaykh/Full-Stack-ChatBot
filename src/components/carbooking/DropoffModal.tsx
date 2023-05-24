import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./stylesheet";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import EuropCar from "../../assets/images/europcar_logo.gif";

const DropoffModal = () => {
  const classes = useStyles();
  const [showMap, setShowMap] = useState(false);

  const handleShowMapClick = () => {
    setShowMap(true);
  };

  return (
    <Box className={classes.ModalMainContainer}>
      <Box className={classes.ModalHeader}>
        <Box>
          <Typography className={classes.AddNewHeading}>
            Drop-off instructions
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.ContentMainContainer}>
        <Box className={classes.ImgwithTextWrapper}>
          <Box>
            <Image width={50} src={EuropCar} alt="img" />
          </Box>
          <Box>
            <Typography className={classes.SuppliedTypo}>
              Supplied by <span className={classes.SpanTypo}>Europcar</span>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.Typosection2}>
          <Box>
            <Typography className={classes.SpanTypo}>
              Drop-off location
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.SuppliedTypo}>
              Airport Road, Karachi, Pakistan, 75200
            </Typography>
          </Box>
        </Box>
        <Box className={classes.Typosection2}>
          <Box>
            <Typography className={classes.SpanTypo}>Opening hours</Typography>
          </Box>
          <Box>
            <Typography className={classes.SuppliedTypo}>
              Mon - Sun 08:00 - 18:00
            </Typography>
          </Box>
        </Box>
        {showMap && (
          <Box>
            <iframe
              title="Google Map"
              width={500}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7204.771584341821!2d67.1707482!3d24.8967884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM4JzIzLjciTiA2N8KwMTInNTYuMyJF!5e0!3m2!1sen!2s!4v1649479585636!5m2!1sen!2s"
              // allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        )}
        <Box>
          <button className={classes.MapBtn} onClick={handleShowMapClick}>
            Show on Map
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default DropoffModal;
