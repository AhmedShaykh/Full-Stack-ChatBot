import { makeStyles } from "@mui/styles";

export default makeStyles({
  maincarcred: {
    gap: "15px",
    display: "flex",
    alignItems: "center",
    borderBottom: "2px solid #f5f5f5",
    paddingBottom: "1rem",
  },
  carCredRight: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  carPropWrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "275px",
    gap: "15px",
  },
  iconTypoWrapper: {
    display: "flex",
    width: "120px",
  },
  carnameTypo: {
    fontSize: "20px",
    fontWeight: "700",
  },
  ratingbox: {
    background: "#1879ca",
    width: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
    borderRadius: "3px",
  },
  fWeight300: {
    fontWeight: "300",
  },
  carCompanyBox: {
    display: "flex",
    padding: "1rem",
    borderTop: "2px solid #f5f5f5",
    justifyContent: "space-between",
  },
  carCompnayContent: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  ratingbox2: {
    width: "50px",
    height: "50px",
    display: "flex",
    background: "#1879ca",
    alignItems: "center",
    borderRadius: "3px",
    justifyContent: "center",
    cursor: "pointer",
    color: "white"
  },
  ratingbox3: {
    width: "40px",
    height: "40px",
    display: "flex",
    background: "#1879ca",
    alignItems: "center",
    borderRadius: "3px",
    justifyContent: "center",
    cursor: "pointer",
    color: "white",
    marginLeft: "0.5rem"
  },
  containerMain: {
    border: "2px solid #f5f5f5",
    borderRadius: "5px",
    padding: "15px",
  },
  freeCancelMain: {
    border: "2px solid #068323",
    display: "flex",
    gap: "20px",
    padding: "16px",
    borderRadius: "5px",
    background: "#e9ffef",
  },
  bottomContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexDirection: "row"
  },
  PopOver: {
    marginBottom: "2rem",
  },
  ProgressDiv: {
    padding: "1rem",
    width: "350px"
  },
  ProgressBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "0.5rem 0"
  },
  Typo: {
    fontSize: "1.3rem",
    fontWeight: "700"
  },
  Typo2: {
    fontSize: "1rem",
    fontWeight: "500",
  },
  DialogBox: {
    width: "600px"
  },
  DialogTypo: {
    fontSize: "1.1rem",
    fontWeight: "700"
  },
  Accordion: {
    width: "100%",
    margin: "0.5rem 0",
    padding: "0.5rem 0"
  },
  Accordion2: {
    margin: "1rem"
  },
  AccordionFlex: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 1.2rem",
    paddingBottom: "0.5rem"
  },
  AccordionFlex1: {
    width: "40%",
    display: "flex",
    justifyContent: "flex-start"
  },
  AccordionFlex2: {
    width: "60%",
  },
  MessageBox: {
    padding: "0.8rem"
  },
  Message: {
    fontSize: "0.8rem",
    fontWeight: "600"
  },
  Accordion2Box: {
    margin: "1rem"
  },
  Email: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.8rem 1rem"
  },
  EmailBox: {
    width: "100%",
  },
  TypoHead: {
    margin: "5px 0",
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "black"
  },
  TypoPara: {
    margin: "6px 0",
    fontSize: "13px",
  },
  TypoText: {
    fontSize: "14px",
    fontWeight: '700'
  },
  InputBox: {
    margin: "1rem 0",
    width: "100%"
  },
  Input: {
    width: "100%",
    padding: "0.6rem 0.4rem"
  },
  Button: {
    background: "green",
    color: "#fff",
    borderRadius: "8px",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 600,
    margin: "0.7rem 0",
    padding: "10px 0",
    width: "100%",
    "&:hover": {
      background: "green",
    }
  },
  PriceDiv: {
    display: "flex",
    justifyContent: "space-between"
  },
  Block: {
    display: "block",
    margin: "1rem"
  },
  carCompnaydiv: {
    display: "flex",
    gap: "1rem"
  },
  rating: {
    display: "flex",
    gap: "0.8rem"
  },
  ratingTypo: {
    fontSize: "16px",
    fontWeight: 600
  },

  "@media(max-width:850px)": {
    rating: {
      flexDirection: "column",
      gap: "0.2rem",
      width: "100%"
    }
  },

  "@media(max-width:700px)": {
    maincarcred: {
      flexDirection: "column",
      alignItems: "baseline"
    },
    carPropWrapper: {
      width: "auto",
      gap: "20px"
    },
    bottomContainer: {
      flexDirection: "column"
    },
    carCompanyBox: {
      flexDirection: "column",
      gap: "1rem"
    },
    Block: {
      display: "none"
    },
    ratingTypo: {
      fontSize: "13px",
      fontWeight: 600
    }
  },

  "@media(max-width:550px)": {
    ProgressDiv: {
      width: "auto"
    }
  },
});