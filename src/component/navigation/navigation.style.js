import styled from "styled-components";

export const StyledMainNavigationWrapper = styled.div`
  background-color: white;
  border-bottom: 1px solid gray;
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;

  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: none;
  }
`;

export const StyledContainer = styled.div`
  height: 100%;
`;

export const StyledNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
`;

export const StyledNavigationLeftSide = styled.div`
  display: flex;
  align-items: center;

  & > .nav__searchBar {
    display: flex;
    align-items: center;
    background-color: #eef3f8;
    height: 4rem;
    border-radius: 5px;
    color: gray;
    margin-left: 30px;

    & > .search__icon {
      font-size: 20px;
    }
  }

  & > .nav__searchBar > input {
    outline: none;
    border: none;
    background: none;
  };
`