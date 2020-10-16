import React from "react";
import { Navigation } from "../navigation";
import { MainWrapper, StyledLayoutWrapper } from "./layout.style";
import { DarkMode2 } from "../dark-mode2";
import { SideDrawer } from "../side-drawer";

const Layout = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      <Navigation />
      <SideDrawer />
      <MainWrapper>{children}</MainWrapper>
    </StyledLayoutWrapper>
  );
};

export { Layout };
