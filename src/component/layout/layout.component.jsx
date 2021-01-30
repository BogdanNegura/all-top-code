import React from "react";
import { Navigation } from "../navigation";
import { MainWrapper, StyledLayoutWrapper } from "./layout.style";
import { SideDrawer } from "../side-drawer";
import { Footer } from "../footer";

const Layout = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      <Navigation />
      <SideDrawer />
      <MainWrapper>{children}</MainWrapper>
      <Footer/>
      
    </StyledLayoutWrapper>
  );
};

export { Layout };
