import React from "react";
import { StyledLogo } from "./logo.style";
import logo from "../../asset/logo/logo.png"

const Logo = () => {
  return (
    <div>
      <StyledLogo src={logo} alt=""/>
    </div>
  );
};

export { Logo };
