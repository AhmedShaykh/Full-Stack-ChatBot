import { makeStyles } from "@mui/styles";

export default makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: "16px",
    marginLeft: "25rem",
    marginRight: "25rem",
    marginTop: "4rem",
    marginBottom: "2rem"
  },

  typoWrapper: {
    width: "100%"
  },

  typo: {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 800,
  },

  brandContainer: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "16px",
  },

  imgWrapper: {
    width: "80px",
    height: "40px",
    boxShadow: "0 2px 8px rgb(0 0 0 / 16%)",
    borderRadius: "4px",
  },

  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
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
    },
  },

  "@media (max-width: 1100px)": {
    locationWrapper: {
      display: "block",
    },
    leftSideContainer: {
      marginBottom: "0.5rem",
    }
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