import styled from "styled-components";
import { animated } from "react-spring";

export const StyledDarkModeWrapper = styled(animated.div)`
  display: flex;
  transform: ${({ mobile }) => (mobile ? "scale(1)" : "scale(0.7)")};
  transform: scale(1);
  margin: ${({ mobile }) => (mobile ? "1rem 0" : "0")};
  margin: 1rem 0;
  margin-right: ${({ mobile }) => (mobile ? "0rem" : "0.5rem")};
  margin-right: 0rem;
  position: ${({ mobile }) => (mobile ? "relative" : "absolute")};
  position: absolute;
  right: ${({ mobile }) => (mobile ? null : "0")};
  right: 0;

  & input {
    position: absolute;
    right: -999rem;

    & .toggle__handler {
      background-color: #ffe5b5;
      transform: translate3d(24px, 0, 0) rotate(0);

      & .crater {
        opacity: 1;
      }
    }
    & .star--1 {
      width: 1px;
      height: 1px;
    }
    & .star--2 {
      width: 2px;
      height: 2px;
      transform: translate3d(-5px, 0, 0);
    }
    & .star--3 {
      width: 1px;
      height: 1px;
      transform: translate3d(-7px, 0, 0);
    }
    & .star--4,
    & .star--5,
    & .star--6 {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    & .star--4 {
      transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    & .star--5 {
      transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    & .star--6 {
      transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }
`;

export const StyledDarkModeLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 50px;
  height: 26px;
  background-color: var(--primary-lighter);
  border-radius: 90px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  & .star {
    position: absolute;
    background-color: #ffffff;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;
  }
  & .star--1 {
    top: 6px;
    left: 24px;
    z-index: 0;
    width: 13px;
    height: 2px;
  }
  & .star--2 {
    top: 13px;
    left: 27px;
    z-index: 1;
    width: 20px;
    height: 2px;
  }
  & .star--3 {
    top: 20px;
    left: 23px;
    z-index: 0;
    width: 20px;
    height: 2px;
  }
  & .star--4,
  & .star--5,
  & .star--6 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  & .star--4 {
    top: 6px;
    left: 13px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }
  & .star--5 {
    top: 13px;
    left: 7px;
    z-index: 0;
    width: 3px;
    height: 3px;
    transform: translate3d(3px, 0, 0);
  }
  & .star--6 {
    top: 12px;
    left: 17px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }
`;

export const StyledDarkModeSpan = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);
  & .crater {
    position: absolute;
    background-color: #e8cda5;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
  }
  & .crater--1 {
    top: 14px;
    left: 9px;
    width: 2px;
    height: 3px;
  }
  & .crater--2 {
    top: 5px;
    left: 5px;
    width: 5px;
    height: 5px;
  }
  & .crater--3 {
    top: 7px;
    left: 14px;
    width: 3px;
    height: 3px;
  }
`;
