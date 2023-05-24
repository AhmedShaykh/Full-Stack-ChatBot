import { makeStyles } from "@mui/styles";

export default makeStyles({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "2rem",
    marginLeft: "25rem",
    marginRight: "25rem",
    marginTop: "3rem",
    gap: "2rem",
  },

  "@media (max-width: 1500px)": {
    mainContainer: {
      marginLeft: "15rem",
      marginRight: "15rem",
    },
  },

  "@media (max-width: 1400px)": {
    mainContainer: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
  },

  "@media (max-width: 1300px)": {
    mainContainer: {
      marginLeft: "12rem",
      marginRight: "12rem",
      flexDirection: "column",
    },
  },

  "@media (max-width: 1100px)": {
    locationWrapper: {
      display: "block",
    },
    leftSideContainer: {
      marginBottom: "0.5rem",
    },
  },

  "@media (max-width: 1000px)": {
    mainContainer: {
      marginLeft: "8rem",
      marginRight: "8rem",
    },
  },

  "@media (max-width: 900px)": {
    mainContainer: {
      marginLeft: "4rem",
      marginRight: "4rem",
    },
  },

  "@media (max-width: 500px)": {
    mainContainer: {
      marginLeft: "2rem",
      marginRight: "2rem",
    },
  },
});