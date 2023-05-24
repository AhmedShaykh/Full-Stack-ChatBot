import { makeStyles } from "@mui/styles";

export default makeStyles({
    mainContainer: {
        display: "flex",
        alignItems: "felx-start",
        justifyContent: "space-between",
        gap: "2rem",
        width: "100%",
        marginTop: "2rem",
        marginBottom: "2rem",
    },
    mapContainer: {
        height: "calc(24px*6)",
        backgroundImage: `url(https://cdn2.rcstatic.com/images/map/background.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: "pointer",
        width: "30%",
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
    },
    mainHeading: {
        fontSize: "24px",
        fontWeight: 700,
    },
    carImgWrapper: {
        padding: "8px",
        backgroundColor: "#fff",
        border: "1px solid #e7e7e7",
        borderRadius: "8px",
    },
    CarWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    CarBox: {
        display: "flex",
        justifyContent: "space-around",
        gap: "1rem",
        flexWrap: "wrap"
    },

    "@media(max-width:900px)": {
        mapContainer: {
            display: "none"
        }
    },
})