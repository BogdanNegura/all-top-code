import React from "react";
import { NavigationItem } from "../navigation-item";
import { AiFillHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

import { StyledNavigationListUl } from "./navigation-list.style";

const NavigationList = ({ mobile, clicked }) => {
  return (
    <div>
      <StyledNavigationListUl>
        <NavigationItem link="/" mobile={mobile} clicked={clicked}>
          <AiFillHome size="1.8rem" color="blue" />
        </NavigationItem>
        <NavigationItem link="/story" mobile={mobile} clicked={clicked}>
          Story
        </NavigationItem>
        <NavigationItem link="/cv" mobile={mobile} clicked={clicked}>
          CV
        </NavigationItem>
        <NavigationItem link="/sign-in" mobile={mobile} clicked={clicked}>
          <FiUser />
        </NavigationItem>
      </StyledNavigationListUl>
    </div>
  );
};

export { NavigationList };
