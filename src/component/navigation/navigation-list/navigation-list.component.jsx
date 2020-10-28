import React from "react";
import { NavigationItem } from "../navigation-item";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

import { StyledNavigationListUl } from "./navigation-list.style";

const NavigationList = ({ mobile, clicked }) => {
  return (
    <div>
      <StyledNavigationListUl>
        <NavigationItem link="/" mobile={mobile} clicked={clicked}>
          <HomeIcon/>
        </NavigationItem>
        <NavigationItem link="/story" mobile={mobile} clicked={clicked}>
          Story
        </NavigationItem>
        <NavigationItem link="/cv" mobile={mobile} clicked={clicked}>
          CV
        </NavigationItem>
        <NavigationItem link="/css-tricks" mobile={mobile} clicked={clicked}>
          CSS
        </NavigationItem>
        <NavigationItem link="/sign-in" mobile={mobile} clicked={clicked}>
          <PersonIcon/>
          
        </NavigationItem>
      </StyledNavigationListUl>
    </div>
  );
};

export { NavigationList };
