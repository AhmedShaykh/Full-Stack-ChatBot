import { makeStyles } from "@mui/styles";

export default makeStyles({
  driverMain: {
    display: "flex",
    flexDirection: "column",
    border: "2px solid #f5f5f5",
    padding: "2rem",
    borderRadius: "5px",
  },
  driverFieldWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    marginTop: "2rem",
    alignItems: "center",
  },
  fieldLabels: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    marginBottom: "5px",
  },
  MainHeading: {
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "28px",
  },
  subHeadpara: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  freeCancelMain: {
    border: "2px solid #068323",
    display: "flex",
    gap: "20px",
    padding: "16px",
    borderRadius: "5px",
    background: "#e9ffef",
  },
  withoutProtectionMain: {
    border: "1px solid #1273c4",
    borderTop: "8px solid #1273c4",
    borderRadius: "5px",
    padding: "16px",
  },
  proHeadBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
    gap:"1px"
  },
  proBtnBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "1rem",
    flexDirection:"row",
    gap:"1px"
  },
  headingBox: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  fieldWidth: {
    width: "60%",
  },
  paymentBottom: {
    width: "60%",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  "@media(max-width:1084px)": {
    fieldWidth: {
      width: "90%",
    },
    paymentBottom:{
      width:"90%"
    }
  },
  "@media(max-width:600px)":{
    proBtnBox:{
      flexDirection:"column",
      gap:"1rem"
    },
    proHeadBox:{
      gap:"1rem"
    }
  }
});
