import { makeStyles } from "@mui/styles";

export default makeStyles({
    mainContainer: {
        margin: "2rem 10rem",
    },
    CarContainer: {
        overflow: "auto",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
            width: "6px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
            borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#aaa",
            borderRadius: "10px",
        }
    },
    TabContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0"
    },
    Card: {
        border: "1px solid grey",
        padding: "0.6rem",
        borderRadius: "5px"
    },
    Title: {
        margin: "1rem 0"
    },
    CarName: {
        fontSize: "1.3rem",
        fontWeight: "600",
        margin: "0.5rem"
    },
    CarSeats: {
        fontSize: "1rem",
        margin: "0.5rem"
    },

    "@media (max-width: 1220px)": {
        mainContainer: {
            margin: "2rem 5rem",
        }
    },

    "@media (max-width: 1000px)": {
        mainContainer: {
            margin: "2rem 3rem",
        },
    },
});