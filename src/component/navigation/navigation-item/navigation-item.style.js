import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLi = styled.li`
  display: flex;
  /* height: 100%; */
`;

export const StyledNavigationLink = styled(NavLink)`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  /* border-bottom: ${(props) =>
    props.mobile ? "1px solid transparent" : "2px solid transparent"}; */
  font-size: 1.2rem;
  padding: ${(props) => (props.mobile ? ".5rem 1rem" : "1rem")};
  margin: ${(props) => (props.mobile ? "2rem 0" : "0 1rem")};
  font-weight: 400;
  /* color: var(--color-text-light); */
  color:  gray;
  
  transform: all 0.2s;


  &:hover {
    /* border-bottom: ${(props) =>
      props.mobile
        ? "1px solid var(--color-white)"
        : "2px solid var(--color-white)"}; */
        color: red;
        border: 1px solid #38f9d7;
        background-color: white;

  }

  &.active {
    border-bottom: ${(props) =>
      props.mobile
        ? "1px solid var(--color-white)"
        : "2px solid var(--color-white)"};
  }
`;
