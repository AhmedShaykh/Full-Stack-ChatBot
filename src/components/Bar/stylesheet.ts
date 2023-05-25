import { makeStyles } from "@mui/styles";

export default makeStyles({
    barContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        width: "100%",
        backgroundColor: "#1879ca",
        paddingLeft: "10rem",
        paddingRight: "10rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
    },
    typo: {
        color: "#fff",
        cusor: "pointer",
        fontSize: "14px"
    },

    "@media (max-width: 1350px)": {
        barContainer: {
            flexWrap: "wrap"
        }
    },

    "@media (max-width: 760px)": {
        barContainer: {
            flexWrap: "wrap",
            padding: "0.6rem",
        }
    },

    "@media (max-width: 550px)": {
        barContainer: {
            textAlign: "center",
            paddingLeft: "3rem",
            paddingRight: "3rem"
        }
    }
});