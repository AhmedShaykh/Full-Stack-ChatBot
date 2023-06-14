import { makeStyles } from "@mui/styles";

export default makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    // borderTop: "2px solid #f5f5f5",
    borderBottom: "2px solid #f5f5f5",
    // paddingTop: '2rem',
    padding: "2rem",
    // marginTop: "2rem",
  },
  tickTextContainer: {
    gap: "1rem",
    display: "flex",
    alignItems: "center",
    width: "322px",
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    flexDirection: "row",
  },
  text: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: 500,
  },
  contentBox: { display: "flex", gap: "15px",flexDirection:"column" },
  heading: {
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 700,
  },
  btnStyle: {
    color: "blue",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "none",
  },
  insuranceHeadingBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  insuranceheadingRight: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  tablemodalwrapper: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    width: "270px",
    cursor: "pointer",
  },
  tableModalHeading: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
    color: "blue",
  },
  tableModalTypo: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
  },
  ModalMainContainer: {
    display: "flex",
    flexDirection: "column",
    // gap: "1rem",
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
    // marginBottom: "1rem",
  },
  AddNewHeading: {
    fontWeight: "700 !important",
    fontSize: "20px !important",
    color: "#1A1A1A !important",
  },
  ChildHeading: {
    fontSize: "16px",
    fontWeight: 500,
    paddingTop: "10px",
  },
  optionalTypo: {
    fontSize: "18px",
    fontWeight: 500,
  },
  BottomContentMainContainer: {
    paddingLeft: "1rem",
  },
  ButtonWithContentWrapper: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "3px solid #E7E7E7",
    paddingBottom: "1rem",
    padding: "2rem 0 2rem 0",
  },
  pricesColumnWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  addtionalTypo: {
    fontSize: "15px",
    fontWeight: 700,
  },
  priceTypo: {
    fontSize: "14px",
  },
  noteTypo: {
    fontSize: "14px",
    paddingLeft: "1rem",
    padding: "12px 0 12px 0",
  },
  addExtraBtn: {
    border: "1px solid green",
    padding: "8px 24px 8px 24px",
    borderRadius: "4px",
    color: "#fff",
    background: "green",
    width: "fit-content",
    textTransform: "capitalize",
  },
  infoBox: {
    border: "2px solid #F56700",
    borderRadius: "5px",
    display: "flex",
    gap: "15px",
    padding: "20px",
    background: "#fef3ec",
  },
  downBtnBox: {
    display: "flex",
    gap: "1rem",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  "@media(max-width:620px)": {
    contentContainer: {
      flexDirection: "column",
      gap: "1rem",
      alignItems: "baseline",
    },
  },
  "@media(max-width:750px)": {
    contentBox: {
      flexDirection: "column",
    },
  },
  "@media(max-width:500px)": {
    downBtnBox: {
      flexDirection: "column",
    },
    tickTextContainer: {
      width: "auto",
    },
  },
});
