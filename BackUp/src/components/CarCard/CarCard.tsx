import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./stylesheet";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckIcon from "@mui/icons-material/Check";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from 'next/router';
import EuroLogo from "../../assets/images/europcar_logo.gif";
import Popover from '@mui/material/Popover';
import ProgressBar from "./Progress";
import CustomizedDialogs from "./Dialog";
import EmailPopup from "./EmailPopup";

const CarCard = ({
  carImg,
  topRated,
  CarName,
  seats,
  transmission,
  largeBags,
  smallBags,
  location,
  days,
  price,
  reviews,
  rating,
}: {
  carImg: any;
  topRated: boolean;
  CarName: string;
  seats: string;
  transmission: string;
  largeBags: string;
  smallBags: string;
  location: string;
  days: string;
  price: string;
  reviews: string;
  rating: string;
}) => {

  const classes = useStyles();

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box className={classes.containerMain}>
      <Box className={classes.maincarcred}>
        <Box>
          <Image src={carImg} alt="..." width={280} height={250} />
        </Box>
        <Box className={classes.carCredRight}>
          {topRated && (
            <Box className={classes.ratingbox}>
              <Typography style={{ color: "white" }}>Top Rated</Typography>
            </Box>
          )}

          <Typography className={classes.carnameTypo}>
            {CarName}
            <span
              style={{ fontSize: "14px", fontWeight: "400", marginLeft: "6px" }}
            >
              or similar medium car
            </span>
          </Typography>
          <Box className={classes.carPropWrapper}>
            <Box className={classes.iconTypoWrapper}>
              <PersonIcon />
              <Typography className={classes.fWeight300}>
                {seats} seats
              </Typography>
            </Box>
            <Box className={classes.iconTypoWrapper}>
              <PersonIcon />
              <Typography className={classes.fWeight300}>
                {transmission}
              </Typography>
            </Box>
            <Box className={classes.iconTypoWrapper}>
              <PersonIcon />
              <Typography className={classes.fWeight300}>
                {largeBags} large bag
              </Typography>
            </Box>
            <Box className={classes.iconTypoWrapper}>
              <PersonIcon />
              <Typography className={classes.fWeight300}>
                {smallBags} small bag
              </Typography>
            </Box>
            <Box className={classes.iconTypoWrapper} style={{ width: "175px" }}>
              <PersonIcon />
              <Typography className={classes.fWeight300}>
                Unlimited mileage
              </Typography>
            </Box>
          </Box>
          <Typography>{location}</Typography>
          <Typography style={{ fontSize: "14px", fontWeight: "400" }}>
            In terminal
          </Typography>
          <Box className={classes.bottomContainer}>
            <Box className={classes.freeCancelMain}>
              <CheckIcon
                sx={{
                  color: "green",
                  border: "2px solid",
                  borderRadius: "50%",
                }}
              />
              <Typography>Price includes unlimited mileage</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "initial",
              }}
            >
              <Typography>Price for {days} days</Typography>
              <Typography style={{ fontSize: "24px", fontWeight: 700 }}>
                US$ {price}
              </Typography>
              <Box
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <CheckIcon sx={{ color: "green" }} />
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#068323",
                  }}
                >
                  Free Cancellation
                </Typography>
              </Box>

              <Button
                style={{
                  border: "1px solid green",
                  backgroundColor: "green",
                  color: "white",
                  textTransform: "none",
                }}
                onClick={() => {
                  router.push("/booking")
                }}
              >
                View Deal
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.carCompanyBox}>
        <Box className={classes.carCompnayContent}>
          <Image src={EuroLogo} alt="..." width={80} height={50} />
          <Box>
            <Typography
              className={classes.ratingbox2}
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              {rating}
            </Typography>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
              className={classes.PopOver}
            >
              <ProgressBar />
            </Popover>
          </Box>
          <Box className={classes.rating}>
            <Typography className={classes.ratingTypo}>
              Very good
            </Typography>
            <Typography className={classes.ratingTypo}>{reviews} reviews</Typography>
          </Box>
        </Box>
        <Box className={classes.Block}>
          <Box className={classes.carCompnaydiv}>
            <Box className={classes.carCompnayContent}>
              <ErrorOutlineIcon sx={{ color: "#1273c4" }} />
              <CustomizedDialogs />
            </Box>
            <Box className={classes.carCompnayContent}>
              <EmailIcon sx={{ color: "#1273c4" }} />
              <EmailPopup
                CarName={CarName}
                seats={seats}
                transmission={transmission}
                largeBags={largeBags}
                carImg={carImg}
                EuroLogo={EuroLogo}
                smallBags={smallBags}
                rating={rating}
                price={price}
                days={days}
                location={location}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarCard;