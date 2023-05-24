import { makeStyles } from "@mui/styles";

export default makeStyles({
    mainContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        width: "33%",
    },
    typoWrapper: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "0.5rem",
    },
    title: {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: 600,
        width: "100%",
    },
    description: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
    },
    "@media (max-width: 1300px)": {
        mainContainer: {
          width: "100%",
        },
        description: {
            width: "100%",
        }
      },

})