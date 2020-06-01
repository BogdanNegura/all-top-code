import React from "react";
import { NavigationItem } from "../navigation-item";
import { AiFillHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

import { StyledNavigationListUl } from "./navigation-list.style";

const NavigationList = () => {
  return (
    <div>
      <StyledNavigationListUl>
        <NavigationItem link="/">
          <AiFillHome size="1.8rem" color="blue" />
        </NavigationItem>
        <NavigationItem link="/story">Story</NavigationItem>
        <NavigationItem link="/cv">CV</NavigationItem>
        <NavigationItem link="/sign-in">
          <FiUser />
        </NavigationItem>
      </StyledNavigationListUl>
    </div>
  );
};

export { NavigationList };
