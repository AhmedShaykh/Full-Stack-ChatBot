import { makeStyles } from "@mui/styles";

export default makeStyles({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: "16px",
    marginLeft: "10rem",
    marginRight: "10rem",
    marginTop: "4rem",
    gap: "2rem",

  },
  mainWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "16px",
    border: '1px solid #e7e7e7',
    borderRadius: '8px',
    width: "100%"
  },
  typoWrapper: {
    width: "100%",
    display: "flex",
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
    lineHeight: "24px",
  },
  inputWithButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
    height: "2rem",
    flexDirection: "row"
  },
  input: {
    // set heigh to 1rem
    "& .MuiInputBase-root": {
      height: "2rem",
      width: "100%",
    }
  },
  button: {
    padding: "6px 8px",
    color: "#fff",
    backgroundColor: "#068323",
    fontSize: "13px",
    flex: 1,
    textTransform: "capitalize",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#068323",
    }
  },

  "@media (max-width: 1220px)": {
    mainContainer: {
      marginLeft: "12rem",
      marginRight: "12rem",
      flexDirection: "column",
    },
    mainWrapper: {
      width: "80%"
    }
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
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  "@media (max-width: 768px)": {
    mainWrapper: {
      flexDirection: "column",
    }
  },

  "@media (max-width: 800px)": {
    inputWithButton: {
      flexDirection: "column",
      height: "auto"
    },
    button: {
      width: "100%",
      margin: "0.5rem"
    },
    input: {
      width: "100%",
      margin: "0.5rem"
    }
  }
});