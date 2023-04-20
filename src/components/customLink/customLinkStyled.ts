import styled from "styled-components";

export const NavLinksWrapper = styled.li`
  & ~ * {
    transition: 0.3s linear;
  }

  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  gap: 5px;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  box-shadow: 0 0 1px 0.5px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 0 0 3px 1px purple;
  }

  & p {
    pointer-events: none;
  }
  & a {
    position: relative;
    font-size: 18px;
    text-decoration: none;
    color: ${({ color }) => color || "rgba(0,0,0,0.5)"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
