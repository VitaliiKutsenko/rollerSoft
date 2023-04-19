import styled from "styled-components";

export const UserCardWrapper = styled.li`
  & ~ * {
    transition: 0.3s linear;
  }

  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 3px 1px white;
  gap: 5px;
  border-radius: 6px;
  cursor: pointer;
  background: white;

  &:hover {
    box-shadow: 0 0 3px 1px purple;
    //inset 300px 0 5px -5px rgba(128, 0, 128, 0.4);
  }

  & p {
    pointer-events: none;
  }
`;
