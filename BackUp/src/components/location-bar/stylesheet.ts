import { makeStyles } from "@mui/styles";

export default makeStyles({
  mainContainer: {
    border: "2px solid #ffb700",
    borderRadius: "8px",
    width: "100%",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "1rem",
    gap: "1rem",
    flexDirection: "row",
  },
  wrapper: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    gap: "1rem",
    alignItems: "center",
  },
  typoWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  typoWrapper2: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  heading1: {
    fontSize: "16px",
    fontWeight: 700,
  },
  heading2: {
    fontSize: "14px",
  },
  btn: {
    backgroundColor: "#068323",
    borderRadius: "8px",
    color: "#fff",
    "&:hover": {
      background: "green",
    }
  },
  Block: {
    display: "block"
  },

  "@media(max-width:680px)": {
    typoWrapper2: {
      display: "none"
    },
    Block: {
      display: "none"
    }
  },
});