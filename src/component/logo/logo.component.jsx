import React from "react";
import { StyledLogoWrapper } from "./logo.style";
import logo from "../../asset/logo/logo.png"
const Logo = () => {
  return (
    <StyledLogoWrapper>
      <img src={logo} alt=""/>
    </StyledLogoWrapper>
  );
};

export { Logo };
