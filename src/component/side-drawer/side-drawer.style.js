import styled from "styled-components";

export const StyledMainWrapper = styled.header`
  position: fixed;
  background-color: var(--bg-navigation);
  padding: 0rem 2rem;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: none;

  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  position: fixed;
  /* width: 100%; */
  width: 25rem;
  height: 10rem;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  height: 100vh;
  background-color: var(--bg-navigation);
  border: 2px solid red;
  opacity: 0.6;
  visibility: ${(props) => (props.opened ? "visibile" : "hidden")};
  transform: translateY(${(props) => (props.opened ? "0%" : "-100%")});
  transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  display: none;

  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;
