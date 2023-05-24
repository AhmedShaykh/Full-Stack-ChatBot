import { Box, IconButton, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./stylesheet";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const AddExtrasModal = () => {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const [count2, setCount2] = useState(0);

  const decrement2 = () => {
    setCount2(count2 - 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const [count3, setCount3] = useState(0);

  const decrement3 = () => {
    setCount3(count3 - 1);
  };

  const increment3 = () => {
    setCount3(count3 + 1);
  };

  const [count4, setCount4] = useState(0);

  const decrement4 = () => {
    setCount4(count4 - 1);
  };

  const increment4 = () => {
    setCount4(count4 + 1);
  };

  const [count5, setCount5] = useState(0);

  const decrement5 = () => {
    setCount5(count5 - 1);
  };

  const increment5 = () => {
    setCount5(count5 + 1);
  };

  return (
    <Box className={classes.ModalMainContainer}>
      <Box className={classes.ModalHeader}>
        <Box>
          <Typography className={classes.AddNewHeading}>
            Add extras <span className={classes.optionalTypo}>(optional)</span>
          </Typography>
          <Typography className={classes.ChildHeading}>
            Child seats, additional drivers and more.
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <Box className={classes.BottomContentMainContainer}>
        <Box className={classes.ButtonWithContentWrapper}>
          <Box className={classes.pricesColumnWrapper}>
            <Box>
              <Typography className={classes.addtionalTypo}>
                Additional Driver
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.priceTypo}>
                US$10.00 each per rental
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" spacing={0}>
                <Chip
                  style={{ borderRadius: "5px" }}
                  label="Pay at pick-up"
                  color="success"
                />
              </Stack>
            </Box>
            <Box>
              <Typography className={classes.priceTypo}>
                Share the driving: journeys are always better when you can take
                turns at the wheel
              </Typography>
            </Box>
          </Box>

          <Box style={{ display: "flex", paddingRight: "1rem" }}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="primary"
                onClick={decrement}
                disabled={count === 0}
                style={{
                  height: "fit-content",
                  padding: "5px 10px 5px 10px",
                }}
              >
                -
              </Button>
              <span style={{ paddingTop: "6px" }}>{count}</span>
              <Button
                variant="contained"
                color="primary"
                onClick={increment}
                style={{ height: "fit-content" }}
                disabled={count === 3}
              >
                +
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box className={classes.ButtonWithContentWrapper}>
          <Box className={classes.pricesColumnWrapper}>
            <Box>
              <Typography className={classes.addtionalTypo}>
                Baby Seat
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.priceTypo}>
                US$10.00 each per rental
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" spacing={0}>
                <Chip
                  style={{ borderRadius: "5px" }}
                  label="Pay at pick-up"
                  color="success"
                />
              </Stack>
            </Box>
            <Box>
              <Typography className={classes.priceTypo}>
                Recommended for children weighing under 20 lbs / 9kg (Birth to
                approx 1-12 months)
              </Typography>
            </Box>
          </Box>

          <Box style={{ display: "flex", paddingRight: "1rem" }}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="primary"
                onClick={decrement2}
                disabled={count2 === 0}
                style={{
                  height: "fit-content",
                  padding: "5px 10px 5px 10px",
                }}
              >
                -
              </Button>
              <span style={{ paddingTop: "6px" }}>{count2}</span>
              <Button
                variant="contained"
                color="primary"
                onClick={increment2}
                style={{ height: "fit-content" }}
                disabled={count2 === 3}
              >
                +
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box className={classes.ButtonWithContentWrapper}>
          <Box className={classes.pricesColumnWrapper}>
            <Box>
              <Typography className={classes.addtionalTypo}>
                Child Booster Seat
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.priceTypo}>
                US$10.00 each per rental
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" spacing={0}>
                <Chip
                  style={{ borderRadius: "5px" }}
                  label="Pay at pick-up"
                  color="success"
                />
              </Stack>
            </Box>
          </Box>

          <Box style={{ display: "flex", paddingRight: "1rem" }}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="primary"
                onClick={decrement3}
                disabled={count3 === 0}
                style={{
                  height: "fit-content",
                  padding: "5px 10px 5px 10px",
                }}
              >
                -
              </Button>
              <span style={{ paddingTop: "6px" }}>{count3}</span>
              <Button
                variant="contained"
                color="primary"
                onClick={increment3}
                style={{ height: "fit-content" }}
                disabled={count3 === 3}
              >
                +
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box className={classes.ButtonWithContentWrapper}>
          <Box className={classes.pricesColumnWrapper}>
            <Box>
              <Typography className={classes.addtionalTypo}>
                Child Seat
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.priceTypo}>
                US$10.00 each per rental
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" spacing={0}>
                <Chip
                  style={{ borderRadius: "5px" }}
                  label="Pay at pick-up"
                  color="success"
                />
              </Stack>
            </Box>
            <Box>
              <Typography className={classes.priceTypo}>
                Recommended for children weighing 20-40 lbs / 9-18kg (Approx 1 -
                3 years)
              </Typography>
            </Box>
          </Box>

          <Box style={{ display: "flex", paddingRight: "1rem" }}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="primary"
                onClick={decrement4}
                disabled={count4 === 0}
                style={{
                  height: "fit-content",
                  padding: "5px 10px 5px 10px",
                }}
              >
                -
              </Button>
              <span style={{ paddingTop: "6px" }}>{count4}</span>
              <Button
                variant="contained"
                color="primary"
                onClick={increment4}
                style={{ height: "fit-content" }}
                disabled={count4 === 3}
              >
                +
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box className={classes.ButtonWithContentWrapper}>
          <Box className={classes.pricesColumnWrapper}>
            <Box>
              <Typography className={classes.addtionalTypo}>
                Mobile Phone
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.priceTypo}>
                US$5.00 each per rental
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" spacing={0}>
                <Chip
                  style={{ borderRadius: "5px" }}
                  label="Pay at pick-up"
                  color="success"
                />
              </Stack>
            </Box>
          </Box>

          <Box style={{ display: "flex", paddingRight: "1rem" }}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="primary"
                onClick={decrement5}
                disabled={count5 === 0}
                style={{
                  height: "fit-content",
                  padding: "5px 10px 5px 10px",
                }}
              >
                -
              </Button>
              <span style={{ paddingTop: "6px" }}>{count5}</span>
              <Button
                variant="contained"
                color="primary"
                onClick={increment5}
                style={{ height: "fit-content" }}
                disabled={count5 === 3}
              >
                +
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography className={classes.noteTypo}>
          Please note: If you request any extras that are payable at pick-up, we
          can’t guarantee that you’ll get them, or that their prices will be the
          same as the prices you see here.
        </Typography>
      </Box>
      <Box style={{ textAlign: "end", margin: "10px 0 10px 0" }}>
        <Button className={classes.addExtraBtn}>Add extras</Button>
      </Box>
    </Box>
  );
};

export default AddExtrasModal;
