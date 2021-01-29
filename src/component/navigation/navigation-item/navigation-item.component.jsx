import React from "react";
import { StyledNavigationLink, StyledLi } from "./navigation-item.style";

const NavigationItem = ({ link, children, mobile, clicked, title, Icon }) => {
  return (
    <StyledLi>
      <StyledNavigationLink exact onClick={clicked} to={link} mobile={mobile} title={title}>
        {Icon && <Icon className="styled__navIcons"/>}
        {children}
        <h3>{title}</h3>
      </StyledNavigationLink>
    </StyledLi>
  );
};

export { NavigationItem };
