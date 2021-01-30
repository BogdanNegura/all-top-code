import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLi = styled.li`
  display: flex;
`;

export const StyledNavigationLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  align-items: center;
  border-bottom: ${(props) =>
    props.mobile ? "1px solid transparent" : "2px solid transparent"};
  font-size: 1.2rem;
  padding: ${(props) => (props.mobile ? ".5rem 1rem" : "1rem")};
  margin: ${(props) => (props.mobile ? "2rem 0" : "0 1rem")};
  color: gray;

;
  transform: all 0.2s;
  
  & > .styled__navIcons {
    font-size: 20px;
    color: #11AAA6;
  }

  &:hover {
    /* color: #FF5B00; */
    border-bottom: 2px solid red;
    background-color: whitesmoke;
    border-radius: 10px;

  }

  &.active {
    border-bottom: ${(props) =>
      props.mobile
        ? "1px solid var(--color-white)"
        : "2px solid var(--color-white)"};
  }
`;
