import React from "react";
import useDarkMode from "use-dark-mode";
import { useSpring } from "react-spring";
import {
  StyledDarkModeWrapper,
  StyledDarkModeLabel,
  StyledDarkModeSpan,
} from "./dark-mode.style";

const DarkMode = () => {
  const darkMode = useDarkMode(false);

  const darkModeToggleSpring = useSpring({
    delay: 200,
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <StyledDarkModeWrapper style={darkModeToggleSpring}>
      <input
        type="checkbox"
        checked={darkMode.value}
        onChange={darkMode.toggle}
        id="dn"
      />
      <StyledDarkModeLabel htmlFor="dn" className="toggle">
        <StyledDarkModeSpan className="toggle__handler">
          <span className="crater crater--1" />
          <span className="crater crater--2" />
          <span className="crater crater--3" />
        </StyledDarkModeSpan>
        <span className="star star--1" />
        <span className="star star--2" />
        <span className="star star--3" />
        <span className="star star--4" />
        <span className="star star--5" />
        <span className="star star--6" />
      </StyledDarkModeLabel>
    </StyledDarkModeWrapper>
  );
};

export { DarkMode };
