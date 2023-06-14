import { makeStyles } from "@mui/styles";

export default makeStyles({
  mainBox: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "20px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    margin: "0 0.5rem"
  },
  priceBox: {
    width: "100%",
    padding: "0.5rem"
  },

  "@media(max-width:1084px)": {
    mainBox: {
      flexDirection: "column",
    }
  }
});