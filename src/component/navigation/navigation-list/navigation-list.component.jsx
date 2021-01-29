import React from "react";
import { NavigationItem } from "../navigation-item";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { StyledNavigationListUl } from "./navigation-list.style";

const NavigationList = ({ mobile, clicked }) => {
  return (
    <div>
      <StyledNavigationListUl>
        <NavigationItem title="home" Icon={HomeIcon} link="/" mobile={mobile} clicked={clicked} />
        <NavigationItem title="story" Icon={EmojiPeopleIcon} link="/story" mobile={mobile} clicked={clicked} />
        <NavigationItem title="cv" Icon={SchoolIcon} link="/cv" mobile={mobile} clicked={clicked} />
        <NavigationItem title="css" Icon={BusinessCenterIcon} link="/css-tricks" mobile={mobile} clicked={clicked} />
        <NavigationItem title="me" Icon={AccountCircleIcon} link="/sign-in" mobile={mobile} clicked={clicked} />
      </StyledNavigationListUl>
    </div>
  );
};

export { NavigationList };
