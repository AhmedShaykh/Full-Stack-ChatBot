import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../src/theme/theme";
import { ThemeProvider } from "@mui/styles";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../src/store/index";
export default function MyApp(props: any) {

  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ReduxProvider store={store}>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    </ReduxProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};