import React from "react";
import { Navigation } from "../navigation";
import { MainWrapper } from "./layout.style";
import { DarkMode2 } from "../dark-mode2";
import { SideDrawer } from "../side-drawer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <SideDrawer />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

export { Layout };
