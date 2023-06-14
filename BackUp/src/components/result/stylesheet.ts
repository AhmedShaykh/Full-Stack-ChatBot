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
    gap: "20px"
  },
  pad: {
    padding: "50px"
  },

  "@media(max-width:1084px)": {
    mainBox: {
      flexDirection: "column",
    },
  },

  "@media(max-width:800px) and (min-width:500px)": {
    pad: {
      padding: "20px"
    },
  },
  
  "@media(max-width:499px)": {
    pad: {
      padding: "10px"
    },
  },
});