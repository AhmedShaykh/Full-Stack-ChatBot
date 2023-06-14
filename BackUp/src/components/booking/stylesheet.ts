import { makeStyles } from "@mui/styles";
export default makeStyles({
  mainBox: {
    padding: "25px",
    display: "flex",
    gap: "30px",
    width: "100%",
    flexDirection: "row",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "-webkit-fill-available",
  },
  "@media(max-width:1084px)": {
    mainBox: {
      flexDirection: "column",
    },
  },
});
