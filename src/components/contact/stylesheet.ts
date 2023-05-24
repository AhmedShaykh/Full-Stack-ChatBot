import { makeStyles } from "@mui/styles";

export default makeStyles({
    mainContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "2rem 10rem",
    },
    LeftContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "1rem auto"
    },
    Image: {
        width: "90%",
        height: "90%"
    },
    RightContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "1rem auto"
    },
    Container: {
        padding: "1.4rem 1rem",
        border: "1px solid grey",
        borderRadius: "5px"
    },
    TypoHead: {
        margin: "10px 0",
        fontSize: "1.4rem",
        fontWeight: "700",
        color: "black"

    },
    TypoPara: {
        margin: "6px 0",
        fontSize: "0.9rem",
    },
    InputBox: {
        margin: "1.4rem 0",
        width: "100%"
    },
    Typo: {
        fontWeight: "700",
        fontSize: "0.9rem",
        margin: "0.5rem 0",
    },
    Input: {
        width: "100%",
    },
    Button: {
        background: "green",
        color: "#fff",
        borderRadius: "8px",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 600,
        margin: "1rem 0",
        padding: "12px 0",
        width: "100%",
        "&:hover": {
            background: "green",
        }
    },

    "@media (max-width: 1300px)": {
        mainContainer: {
            flexDirection: "column",
        }
    },

    "@media (max-width: 1040px)": {
        Image: {
            width: "100%",
            heigth: "100%"
        },
        mainContainer: {
            margin: "2rem 3rem"
        }
    },

    "@media (max-width: 425px)": {
        mainContainer: {
            margin: "2rem 1rem"
        },
        Button: {
            fontSize: "12px"
        }
    }
});