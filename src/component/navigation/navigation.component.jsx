import React from "react";
import { NavigationList } from "./navigation-list/navigation-list.component";
import {
  StyledNavigationWrapper,
  StyledContainer,
  StyledMainNavigationWrapper,
  StyledNavigationLeftSide,
} from "./navigation.style";
import { Logo } from "../logo";
import SearchIcon from '@material-ui/icons/Search';
// import { DarkMode } from "../dark-mode/dark-mode.component";

const Navigation = () => {
  return (
    <StyledMainNavigationWrapper>
      <StyledContainer>
        <StyledNavigationWrapper>
          <StyledNavigationLeftSide>
            <Logo />
            <div className="nav__searchBar">
              <SearchIcon className="search__icon"/>
              <input type="text" placeholder="Search"/>
            </div>
          </StyledNavigationLeftSide>
          <NavigationList />
        </StyledNavigationWrapper>
      </StyledContainer>
    </StyledMainNavigationWrapper>
  );
};

export { Navigation };
