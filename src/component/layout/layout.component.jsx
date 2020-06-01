import React from "react";
import { Navigation } from "../navigation";
import { MainWrapper } from "./layout.style";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

export { Layout };
