import { makeStyles } from "@mui/styles";
import BackgroundImage from "../../assets/images/background.jpg";

export default makeStyles({
  mainContainer: {
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "50%"
  },
  wrapper: {
    background: "linear-gradient(#1879ca, transparent)",
    height: "inherit",
  },
  heroContainer: {
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    display: "flex",
    MsFlexDirection: "column",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "16px",
    marginLeft: "25rem",
    marginRight: "25rem",
    maxWidth: "1132px",
  },
  mainHeading: {
    fontSize: "40px",
    textAlign: "start",
    paddingBottom: "8px",
    paddingTop: "24px",
    width: "100%",
    color: "#fff",
    fontWeight: "800",
  },
  listContainer: {
    display: "flex",
    alignItems: "center",
    gap: "calc(3px*8)",
    marginTop: "16px",
  },
  listWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  },
  listTypo: {
    fontSize: "20px",
    color: "#fff",
    fontWeight: 400,
    lineHeight: "28px",
  },
  locationContainer: {
    background: "#ffb700",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px 0px #1a1a1a29",
    padding: "8px",
    marginTop: "16px",
  },
  locationWrapper: {
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  leftSideContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  locationPickerTextField: {
    width: "100% !important",
    background: "#fff",
    borderRadius: "8px",
    "& .MuiOutlinedInput-input": {
      width: "100% !important",
      border: "none",
    },
  },
  rightSideContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flex: 1,
  },
  rightSideTextField: {
    background: "#fff",
    borderRadius: "8px",
    "& .MuiOutlinedInput-input": {
      width: "80px",
      borderRadius: "4px",
      border: "none",
    },
    // change fontSize of placeholder
    "& .MuiInputLabel-outlined": {
      fontSize: "12px",
      color: "#000",
      fontWeight: 400,
    },
  },
  rightSideTextField2: {
    background: "#fff",
    borderRadius: "8px",
    "& .MuiOutlinedInput-input": {
      width: "50px",
      borderRadius: "4px",
      border: "none",
    },
    // change fontSize of placeholder
    "& .MuiInputLabel-outlined": {
      fontSize: "12px",
      color: "#000",
      fontWeight: 400,
    },
  },
  searchButton: {
    background: "green",
    color: "#fff",
    borderRadius: "8px",
    height: "100%",
    padding: "14px 12px",
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 600,
    "&:hover": {
      background: "green",
    },
  },
  bottomContainer: {
    marginTop: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0.5rem",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    backgroundColor: "#1879ca",
    borderRadius: "20px"
  },
  checkbox: {
    color: "#fff",
  },
  checkboxTypo: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    color: "#fff",
    paddingRight: "8px",
  },

  "@media (max-width: 1500px)": {
    heroContainer: {
      marginLeft: "15rem",
      marginRight: "15rem",
    },
  },

  "@media (max-width: 1400px)": {
    heroContainer: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
  },

  "@media (max-width: 1300px)": {
    heroContainer: {
      marginLeft: "12rem",
      marginRight: "12rem",
    },
    locationWrapper: {
      display: "block",
    },
    leftSideContainer: {
      marginBottom: "0.5rem",
    },
    rightSideContainer: {
      display: "grid",
      gridTemplateColumns: "auto auto",
      gridTemplateRows: "auto auto",
      gap: "10px"
    },
    rightSideTextField: {
      width: "100%"
    },
    rightSideTextField2: {
      width: "100%"
    },
    searchButton: {
      width: "100%",
      margin: "10px 0",
      fontSize: "14px",
      padding: "12px 10px",
    }
  },

  "@media (max-width: 1000px)": {
    heroContainer: {
      marginLeft: "8rem",
      marginRight: "8rem",
    },
  },

  "@media (max-width: 900px)": {
    heroContainer: {
      marginLeft: "4rem",
      marginRight: "4rem",
    },
  },

  "@media (max-width: 700px)": {
    contentContainer: {
      display: "none",
    },
    listContainer: {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    listTypo: {
      fontSize: "16px"
    },
    bottomContainer: {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    checkboxTypo: {
      fontSize: "14px"
    }
  },

  "@media (max-width: 530px)": {
    mainHeading: {
      fontSize: "30px",
      textAlign: "left",
    },
  },

  "@media (max-width: 500px)": {
    heroContainer: {
      marginLeft: "2rem",
      marginRight: "2rem",
    },
  },
});