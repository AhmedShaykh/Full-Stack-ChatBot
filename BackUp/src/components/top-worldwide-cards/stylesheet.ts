import { makeStyles } from "@mui/styles";

export default makeStyles({
  topCardsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginLeft: "10rem",
    marginRight: "10rem",
    marginTop: "4rem",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "50%",
  },
  mainHading: {
    fontSize: "24px",
    fontWeight: 600,
  },
  linksWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem',
    width: '100%',
    marginTop: '2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#1273c4',
    textAlign: 'center',
    padding: '0.5rem',
  },

  "@media (max-width: 1400px)": {
    topCardsContainer: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
  },

  "@media (max-width: 1070px)": {
    topCardsContainer: {
      marginLeft: "8rem",
      marginRight: "8rem",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
    mainContainer: {
      width: "100%"
    }
  },

  "@media (max-width: 900px)": {
    topCardsContainer: {
      marginLeft: "4rem",
      marginRight: "4rem",
    },
  },

  "@media (max-width: 500px)": {
    topCardsContainer: {
      marginLeft: "2rem",
      marginRight: "2rem",
      marginTop: "2.3rem",
      gap: "1.5rem",
    },
    linksWrapper: {
      flexDirection: "row",
    }
  },

  "@media (max-width: 465px)": {
    mainHading: {
      fontSize: "20px"
    },
    link: {
      fontSize: "12px",
    }
  }
});