import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLi = styled.li`
  display: flex;
`;

export const StyledNavigationLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  border-bottom: ${(props) =>
    props.mobile ? "1px solid transparent" : "2px solid transparent"};
  font-size: 1.3rem;
  padding: ${(props) => (props.mobile ? ".5rem 1rem" : "1rem")};
  margin: ${(props) => (props.mobile ? "2rem 0" : "0 1rem")};
  font-weight: 400;
  /* background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%); */
  color: #11AAA6;

;
  transform: all 0.2s;
  
  & > .styled__navIcons {
    font-size: 20px;
  }

  &:hover {
    color: white
;
    background-color: #FF9700;
    /* background-color: whitesmoke; */
    border-radius: 10px;

  }

  &.active {
    border-bottom: ${(props) =>
      props.mobile
        ? "1px solid var(--color-white)"
        : "2px solid var(--color-white)"};
  }
`;
