import React, { useState } from "react";
import { Logo } from "../logo";
import { Hamburger } from "./hamburger/hamburger.component";
import { StyledMainWrapper, Menu } from "./side-drawer.style";
import { NavigationList } from "../navigation/navigation-list/navigation-list.component";

const SideDrawer = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <StyledMainWrapper>
        <Logo />
        <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
      </StyledMainWrapper>
      <Menu opened={isOpened}>
        <NavigationList mobile clicked={() => setIsOpened(false)} />
      </Menu>
    </>
  );
};

export { SideDrawer };
