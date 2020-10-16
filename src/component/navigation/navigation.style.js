import styled from "styled-components";

export const StyledMainNavigationWrapper = styled.div`
  /* position: fixed; */
  background-color: var(--bg-navigation);
  /* background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  ); */
  /* opacity: 0.3; */
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;

  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: none;
  }
`;

export const StyledContainer = styled.div`
  /* display: flex;
  justify-content: space-between; */
  height: 100%;
`;

export const StyledNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
