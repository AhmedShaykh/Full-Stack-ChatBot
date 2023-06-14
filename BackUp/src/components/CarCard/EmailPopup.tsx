import { FC, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import useStyles from "./stylesheet";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {

    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

type Props = {
    CarName: string;
    seats: string;
    transmission: string;
    largeBags: string;
    carImg: string;
    EuroLogo: any;
    smallBags: string;
    rating: string;
    price: string;
    days: string;
    location: string;
};

const EmailPopup: FC<Props> = ({
    CarName,
    seats,
    transmission,
    largeBags,
    carImg,
    EuroLogo,
    smallBags,
    rating,
    price,
    days,
    location
}) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    return (
        <Box>
            <Typography
                style={{ color: "#1273c4", cursor: "pointer" }}
                onClick={handleClickOpen}
            >
                Email quote
            </Typography>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <Box className={classes.DialogBox}>
                    <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                    >
                        <Typography className={classes.Typo}>
                            Email quote
                        </Typography>
                    </BootstrapDialogTitle>
                </Box>
                <Box className={classes.Email}>
                    <Box className={classes.EmailBox}>
                        <Typography className={classes.TypoHead}>
                            {CarName}
                            <span
                                style={{ fontSize: "14px", fontWeight: "400", marginLeft: "6px" }}
                            >
                                or similar medium car
                            </span>
                        </Typography>
                        <Box style={{ display: "flex" }}>
                            <AccountBoxIcon style={{ marginRight: "5px" }} />
                            <Typography className={classes.TypoPara} style={{ marginTop: "4px" }}>
                                {seats} Seats
                            </Typography>
                        </Box>
                        <Box style={{ display: "flex" }}>
                            <DeviceHubIcon style={{ marginRight: "5px" }} />
                            <Typography className={classes.TypoPara} style={{ marginTop: "4px" }}>
                                {transmission}
                            </Typography>
                        </Box>
                        <Box style={{ display: "flex" }}>
                            <BusinessCenterIcon style={{ marginRight: "5px" }} />
                            <Typography className={classes.TypoPara} style={{ marginTop: "4px" }}>
                                {largeBags} Large Bags
                            </Typography>
                        </Box>
                        <Box style={{ display: "flex" }}>
                            <BusinessCenterIcon style={{ marginRight: "5px" }} />
                            <Typography className={classes.TypoPara} style={{ marginTop: "4px" }}>
                                {smallBags} Small Bags
                            </Typography>
                        </Box>
                        <Box style={{ margin: "0.5rem" }}>
                            <Image src={carImg} alt="..." width={220} height={170} />
                            <Box style={{ display: "flex", margin: "0.5rem 0" }}>
                                <LocationOnIcon style={{ marginRight: "5px" }} />
                                <Typography>
                                    {location}
                                    <br />
                                    <span
                                        style={{ fontSize: "14px" }}
                                    >
                                        In Terminal
                                    </span>
                                </Typography>
                            </Box>
                        </Box>
                        <Box style={{ display: "flex", margin: "1rem 0" }}>
                            <Image src={EuroLogo} alt="..." width={75} height={40} />
                            <Typography className={classes.ratingbox3}>
                                {rating}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.EmailBox}>
                        <Typography className={classes.TypoHead}>
                            {`Main driver's details`}
                        </Typography>
                        <Typography className={classes.TypoPara}>
                            As they appear on driving licence
                        </Typography>
                        <Box className={classes.InputBox}>
                            <Typography className={classes.TypoText}>
                                Email Address
                            </Typography>
                            <input type="email" className={classes.Input} />
                        </Box>
                        <Box className={classes.InputBox}>
                            <Typography className={classes.TypoText}>
                                First name
                            </Typography>
                            <input type="text" className={classes.Input} />
                        </Box>
                        <Box className={classes.InputBox}>
                            <Typography className={classes.TypoText}>
                                Last name
                            </Typography>
                            <input type="text" className={classes.Input} />
                        </Box>
                        <Box className={classes.InputBox}>
                            <Typography className={classes.TypoText}>
                                Contact number
                            </Typography>
                            <input type="number" className={classes.Input} />
                        </Box>
                        <Box className={classes.PriceDiv}>
                            <Typography style={{ fontSize: "16px", fontWeight: 700 }}>
                                Price for {days} days
                            </Typography>
                            <Typography style={{ fontSize: "16px", fontWeight: 700 }}>
                                US${price}
                            </Typography>
                        </Box>
                        <Button className={classes.Button}>
                            Find my Booking
                        </Button>
                    </Box>
                </Box>
            </BootstrapDialog >
        </Box >
    );
};

export default EmailPopup;
