import styled from "styled-components";

export const StyledMenuWrapper = styled.ul`
  display: flex;
  /* background-color: grey; */
  padding: 10px;
  font-size: 24px;
  margin: 0;
`;

export const StyledMenuItem = styled.li`
  padding: 0 10px;
  color: white;
  list-style: none;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid green;
  }
`;
