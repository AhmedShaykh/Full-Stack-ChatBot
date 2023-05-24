import { makeStyles } from "@mui/styles";

export default makeStyles({
    mainContainer: {
        height: "calc(2*calc(4px*8))",
        background: "#1879ca",
        color: "#fff",
    },
    wrapper: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "25rem",
        paddingRight: "25rem",
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    contentContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "calc(3px*8)",
    },
    flag: {
        borderRadius: "50%",
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        color: "#1879ca",
        textTransform: "none",
        background: "#fff !important",
        paddingLeft: "15px",
        paddingRight: "15px",
    },
    flagWrapper: {
        display: "block",
        padding: "0px",
    },

    "@media (max-width: 1500px)": {
        wrapper: {
            paddingLeft: "15rem",
            paddingRight: "15rem",
        },
    },

    "@media (max-width: 1400px)": {
        wrapper: {
            paddingLeft: "10rem",
            paddingRight: "10rem",
        },
    },

    "@media (max-width: 1300px)": {
        wrapper: {
            paddingLeft: "12rem",
            paddingRight: "12rem",
        },
    },

    "@media (max-width: 1000px)": {
        wrapper: {
            paddingLeft: "8rem",
            paddingRight: "8rem",
        },
    },

    "@media (max-width: 900px)": {
        wrapper: {
            paddingLeft: "4rem",
            paddingRight: "4rem",
        },
    },

    "@media (max-width: 700px)": {
        contentContainer: {
            display: "none",
        },
    },

    "@media (max-width: 500px)": {
        wrapper: {
            paddingLeft: "2rem",
            paddingRight: "2rem",
        },
    },
});