import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./stylesheet";
import CheckIcon from "@mui/icons-material/Check";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddExtrasModal from "./AddExtrasModal";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../../store/index";
import { setWithoutProtection } from "../../store/Protection/index";
import { useRouter } from "next/router";

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

const CarDetails = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opencarexcess, setOpenCarexcess] = useState(false);
  const [openWindow, setOpenWindow] = useState(false);
  const [adminOpen, SetOpenAdmin] = useState(false);
  const { withoutProtection } = useAppSelector(
    (state: any) => state.Protection
  );

  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <>
      <Box className={classes.mainContainer}>
        <Typography
          className={classes.heading}
          style={{ marginBottom: "1rem" }}
        >
          Included in the price
        </Typography>
        <Box className={classes.contentBox}>
          <Box className={classes.contentContainer}>
            <Box className={classes.tickTextContainer}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography className={classes.text}>
                Free cancellation up to 48 hours before pick-up
              </Typography>
            </Box>
            <Box className={classes.tickTextContainer}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography className={classes.text}>
                Collision Damage Waiver with US$2,340 excess
              </Typography>
            </Box>
          </Box>
          <Box className={classes.contentContainer}>
            <Box className={classes.tickTextContainer}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography className={classes.text}>
                Theft Protection with US$2,340 excess
              </Typography>
            </Box>
            <Box className={classes.tickTextContainer}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography className={classes.text}>
                Unlimited mileage
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.mainContainer}>
        <Typography
          className={classes.heading}
          style={{ marginBottom: "1rem" }}
        >
          Required at pick-up
        </Typography>
        <Typography
          style={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "20px",
            marginBottom: "1rem",
          }}
        >
          Refundable security deposit: <span>US$300</span>
        </Typography>
        <Typography className={classes.text} style={{ marginBottom: "1rem" }}>
          The main driver will need a payment card (in their own name) for this
          deposit.
        </Typography>
        <Box>
          <Button className={classes.btnStyle}>What else will I need?</Button>
        </Box>
      </Box>
      <Box className={classes.mainContainer}>
        <Typography
          className={classes.heading}
          style={{ marginBottom: "1rem" }}
        >
          Extras
        </Typography>
        <Typography className={classes.text} style={{ marginBottom: "1rem" }}>
          Child seats, additional drivers and more.
        </Typography>
        <Box>
          <Button onClick={handleOpen} className={classes.btnStyle}>
            Add extras
          </Button>
        </Box>
      </Box>
      <Box className={classes.mainContainer}>
        <Box
          className={classes.insuranceHeadingBox}
          style={{ marginBottom: "1rem" }}
        >
          <Typography className={classes.heading}>
            Insurance...{" "}
            <span
              style={{
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: 700,
                color: "green",
              }}
            >
              for peace of mind
            </span>
          </Typography>

          <Box className={classes.insuranceheadingRight}>
            <CheckIcon sx={{ color: "green" }} />
            <Typography>Free cancellation</Typography>
            <HelpOutlineIcon sx={{ color: "green" }} />
          </Box>
        </Box>
        <Typography className={classes.text} style={{ marginBottom: "0.5rem" }}>
          At the counter, the car company will block a deposit amount on your
          credit card.You could lose your whole deposit if the car is damaged or
          stolen,but as long as you have our full Protection, Rentalcover.com
          will refund you!(The cover price you see includes all applicable taxes
          and fees)
        </Typography>
        <Typography className={classes.text} style={{ marginBottom: "1rem" }}>
          T&Cs and standard exclusions apply. Please read:{" "}
          <span>
            <Link href="#">Policy document</Link>
          </span>
        </Typography>
      </Box>

      <Box className={classes.mainContainer}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  borderBottom: "2px solid #e5e5e5 !important",
                }}
              >
                <TableCell>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      lineHeight: "20px",
                    }}
                  >
                    What is covered
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      lineHeight: "20px",
                      width: "270px",
                    }}
                  >
                    No Protection
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        lineHeight: "20px",
                        color: "green",
                      }}
                    >
                      Full protection
                    </Typography>
                    <Typography className={classes.text}>
                      Total cover price:USD600
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Box
                    className={classes.tablemodalwrapper}
                    onClick={() => {
                      setOpenCarexcess(!opencarexcess);
                    }}
                  >
                    {opencarexcess === false ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowUpIcon />
                    )}
                    <Typography className={classes.tableModalHeading}>
                      The car excess
                    </Typography>
                  </Box>
                  {opencarexcess && (
                    <Typography className={classes.tableModalTypo}>
                      Your car comes with standard damage cover (CDW) with an
                      excess of US$2,340 and Theft Protection (TP) with an
                      excess of US$2,340. If the bodywork is damaged or the car
                      is stolen, the car hire company could charge you up to the
                      excess amount – but Rentalcover.com will refund you.
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  <HighlightOffIcon />
                </TableCell>
                <TableCell>
                  <CheckCircleOutlineIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box
                    className={classes.tablemodalwrapper}
                    onClick={() => {
                      setOpenWindow(!openWindow);
                    }}
                  >
                    {openWindow === false ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowUpIcon />
                    )}
                    <Typography className={classes.tableModalHeading}>
                      Windows,mirrors,wheels and tyres.
                    </Typography>
                  </Box>
                  {openWindow && (
                    <Typography className={classes.tableModalTypo}>
                      Protection products often have exclusions, but Full
                      Protection covers every exterior and mechanical part of
                      your car, from wheels and windows to engine, roof &
                      undercarriage.
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  <HighlightOffIcon />
                </TableCell>
                <TableCell>
                  <CheckCircleOutlineIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box className={classes.tablemodalwrapper}>
                    {adminOpen === false ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowUpIcon />
                    )}
                    <Typography
                      className={classes.tableModalHeading}
                      onClick={() => {
                        SetOpenAdmin(!adminOpen);
                      }}
                    >
                      Administration and breaakdown charges
                    </Typography>
                  </Box>
                  {adminOpen && (
                    <Typography className={classes.tableModalTypo}>
                      If you break down, lose your key(s) or lock yourself out,
                      Rentalcover.com will refund any call-out charges, towing
                      fees and key replacement costs.
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  <HighlightOffIcon />
                </TableCell>
                <TableCell>
                  <CheckCircleOutlineIcon sx={{ color: "green" }} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box className={classes.mainContainer}>
        <Box
          className={classes.downBtnBox}
        >
          <Button
            style={{ border: "1px solid blue" }}
            onClick={() => {
              dispatch(setWithoutProtection(!withoutProtection));
              router.push("/checkout");
            }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                style={{
                  color: "blue",
                  fontSize: "14px",
                  fontWeight: "600",
                  textTransform: "none",
                }}
              >
                Go to book
              </Typography>
              <Typography style={{ textTransform: "none" }}>
                Without full protection
              </Typography>
            </Box>
          </Button>

          <Button
            style={{ border: "1px solid green", backgroundColor: "green" }}
            onClick={() => {
              router.push("/checkout");
            }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                style={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "600",
                  textTransform: "none",
                }}
              >
                Go to book
              </Typography>
              <Typography style={{ color: "white", textTransform: "none" }}>
                With full protection
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddExtrasModal />
        </Box>
      </Modal>
    </>
  );
};

export default CarDetails;
