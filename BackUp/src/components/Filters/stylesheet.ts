import { makeStyles } from "@mui/styles";

export default makeStyles({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "30%",
        height: "100%",
        border: "1px solid #e7e7e7",
        padding: "0.5rem 0",
        borderRadius: "8px",
        marginBottom: "0.7rem"
    },
    wrapperRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px solid #e7e7e7",
        marginBottom: "1rem",
    },
    heading24: {
        fontSize: "16px",
        fontWeight: 700,
        margin: "1rem"
    },
    wrapperCol: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        borderBottom: "1px solid #e7e7e7",
        marginBottom: "1rem",
    },
    wholeWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
    },
    checboxWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        gap: "0.5rem",
    },

    "@media(max-width:1084px)": {
        mainContainer: {
            width: "100%",
        },
    },
});