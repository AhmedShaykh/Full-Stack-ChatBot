"use client";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./stylesheet";
import Logo from "../../assets/SVGs/logo.svg";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import Flags from "./Flags";

const Navbar = () => {

    const classes = useStyles();

    const router = useRouter();

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.wrapper}>
                <Box className={classes.logoContainer}>
                    <IconButton
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <Image src={Logo} alt="logo" />
                    </IconButton>
                </Box>
                <Box className={classes.contentContainer}>
                    <Box>
                        <Typography>USD</Typography>
                    </Box>
                    <IconButton className={classes.flagWrapper}>
                        <Flags />
                    </IconButton>
                    <Box className={classes.buttonContainer}>
                        <Button
                            className={classes.button}
                            onClick={() => router.push("/manage")}
                        >
                            Manage Booking
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;