import styled from "styled-components";

export const DebounceInputWrapper = styled.div`
  justify-self: flex-start;
  align-self: flex-end;
  width: fit-content;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  & input {
    outline: none;
    font-size: 16px;
    padding: 2px;
    border-radius: 20px;
    border: none;
  }
  & button {
    background: none;
    border: none;
    max-width: 25px;
    max-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
      max-width: 15px;
      max-height: 15px;
    }
  }
`;
