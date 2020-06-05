import React from "react";
import { StyledNavigationLink, StyledLi } from "./navigation-item.style";

const NavigationItem = ({ link, children, mobile, clicked }) => {
  return (
    <StyledLi>
      <StyledNavigationLink exact onClick={clicked} to={link} mobile={mobile}>
        {children}
      </StyledNavigationLink>
    </StyledLi>
  );
};

export { NavigationItem };
