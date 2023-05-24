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
    gap: "15px",
    margin: "auto"
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
    borderBottom: "2px solid #f5f5f5",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: "1px"
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
  },
  heading: {
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 700,
  },
  tickTextContainer: {
    gap: "1rem",
    display: "flex",
    alignItems: "center",
    width: "240px",
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    flexDirection: "row"
  },
  text: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: 500,
  },
  choicebox: {
    display: "flex",
    flexDirection: "column",
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  choiceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem",
    borderBottom: "2px solid #f5f5f5",
    flexDirection: "row",
    gap: "1px",
  },
  pricelocBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
  },
  boxes: {
    border: "2px solid #f5f5f5",
    padding: "1rem",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "300px",
  },
  greenbox: {
    border: "2px solid #068323",
    padding: "1rem",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "300px",
    background: "#e9ffef",
  },
  circular: {
    width: "15px",
    border: "2px solid",
    height: "15px",
    borderRadius: "50%",
  },
  circleTxtWrap: {
    gap: "20px",
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  },
  circleTxtWrap2: {
    gap: "20px",
    display: "flex",
    marginBottom: "8px",
  },
  straightLine: {
    width: "5px",
    height: "100px",
    background: "#f5f5f5",
  },
  lineBox: {
    display: "flex",
    gap: "20px",
  },
  cardloctypo: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
    marginBottom: "1rem",
  },
  instructtypo: {
    fontSize: "14px",
    fontWeight: 200,
    lineHeight: "20px",
    color: "blue",
    cursor: "pointer",
  },
  priceWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "3px solid #f5f5f5",
    paddingBottom: "1.5rem",
  },
  ModalMainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "10px",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    borderRadius: "0.3rem",
  },
  ModalHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "1rem",
    borderTopLeftRadius: "0.3rem",
    borderTopRightRadius: "0.3rem",
  },
  AddNewHeading: {
    fontWeight: "700 !important",
    fontSize: "20px !important",
    color: "#1A1A1A !important",
  },
  ContentMainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    paddingLeft: "1rem",
  },
  ImgwithTextWrapper: {
    display: "flex",
    gap: "1rem",
  },
  SuppliedTypo: {
    fontSize: "15px",
  },
  SpanTypo: {
    color: "#1A1A1A",
    fontSize: "14px",
    fontWeight: 700,
  },
  Typosection2: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  MapBtn: {
    textAlign: "center",
    padding: "13px 19px 13px 19px",
    backgroundColor: "#0D6521",
    color: "#fff",
    border: "1px solid #FFFF",
    borderRadius: "6px",
  },

  "@media(max-width:1170px) and (min-width:1145px)": {
    boxes: {
      width: "280px",
    },
    greenbox: {
      width: "280px",
    },
  },

  "@media(max-width:1144px) and (min-width:1110px)": {
    boxes: {
      width: "250px",
    },
    greenbox: {
      width: "250px",
    },
  },

  "@media(max-width:1109px) and (min-width:1085px)": {
    boxes: {
      width: "225px",
    },
    greenbox: {
      width: "225px",
    },
  },

  "@media(max-width:1084px)": {
    pricelocBox: {
      alignItems: "baseline",
    },
    boxes: {
      width: "100%"
    },
    greenbox: {
      width: "100%"
    },
  },

  "@media(max-width:800px)": {
    choiceContainer: {
      alignItems: "baseline",
      flexDirection: "column",
      gap: "1rem",
    },
  },

  "@media(max-width:700px)": {
    maincarcred: {
      flexDirection: "column",
      alignItems: "baseline"
    },
    carPropWrapper: {
      width: "auto",
      gap: "20px"
    }
  },

  "@media(max-width:620px)": {
    contentContainer: {
      flexDirection: "column",
      gap: "1rem"
    }
  },

  "@media(max-width:500px)": {
    carCompanyBox: {
      flexDirection: "column",
      gap: "1rem"
    }
  }
});