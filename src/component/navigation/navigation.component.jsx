import React from "react";
import { NavigationList } from "./navigation-list/navigation-list.component";
import {
  StyledNavigationWrapper,
  StyledContainer,
  StyledMainNavigationWrapper,
} from "./navigation.style";
import { Logo } from "../logo";
// import { DarkMode } from "../dark-mode/dark-mode.component";

const Navigation = () => {
  return (
    <StyledMainNavigationWrapper>
      <StyledContainer>
        <StyledNavigationWrapper>
          <Logo />
          <NavigationList />
          {/* <DarkMode /> */}
        </StyledNavigationWrapper>
      </StyledContainer>
    </StyledMainNavigationWrapper>
  );
};

export { Navigation };
