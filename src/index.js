import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./component/app";
import GlobalStyle from "./utils/global";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";

const HereIsReact = document.querySelector("#here-is-react");

render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <App />
        <GlobalStyle></GlobalStyle>
      </>
    </ThemeProvider>
  </BrowserRouter>,
  HereIsReact
);
