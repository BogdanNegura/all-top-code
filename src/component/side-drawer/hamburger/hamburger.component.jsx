import React from "react";
import { StyledHamburger } from "./hamburger.style";

const Hamburger = ({ opened, clicked }) => {
  return (
    <StyledHamburger onClick={clicked} opened={opened}>
      <span />
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
};

export { Hamburger };
