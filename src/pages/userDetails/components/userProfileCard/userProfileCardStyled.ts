import styled from "styled-components";

export const UserProfileCardWrapper = styled.div`
  & ~ * {
    transition: 0.3s linear;
  }
  width: 50%;
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 3px 1px white;
  gap: 5px;
  border-radius: 6px;
  background: white;
  & h3 {
    align-self: flex-end;
  }

  & p {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
`;
