import { makeStyles } from "@mui/styles";

export default makeStyles({
  faqContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "2rem",
    marginLeft: "25rem",
    marginRight: "25rem",
    marginTop: "4rem",
    marginBottom: "4rem",
  },
  mainHeading: {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "1rem"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  linksWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    width: '100%',
    marginTop: '2rem',
  },
  link: {
    textDecoration: "none",
    color: "#1273c4",
  },
  Accordion: {
    width: "100%"
  },

  "@media (max-width: 1500px)": {
    faqContainer: {
      marginLeft: "15rem",
      marginRight: "15rem",
    },
  },

  "@media (max-width: 1400px)": {
    faqContainer: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
  },

  "@media (max-width: 1220px)": {
    faqContainer: {
      marginLeft: "12rem",
      marginRight: "12rem",
      flexDirection: "column",
    },
  },

  "@media (max-width: 1000px)": {
    faqContainer: {
      marginLeft: "8rem",
      marginRight: "8rem",
    },
  },

  "@media (max-width: 900px)": {
    faqContainer: {
      marginLeft: "4rem",
      marginRight: "4rem",
    },
  },

  "@media (max-width: 500px)": {
    faqContainer: {
      marginLeft: "1rem",
      marginRight: "1rem",
    },
    Accordion: {
      width: "100%"
    },
  },

  "@media (max-width: 430px)": {
    linksWrapper: {
      gridTemplateColumns: '1fr',
      marginTop: '0.4rem',
    },
  },
});