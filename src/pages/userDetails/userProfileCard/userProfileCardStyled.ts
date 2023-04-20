import styled from "styled-components";
import { device } from "@src/style/sizes";

export const UserProfileCardWrapper = styled.div`
  @media ${device.laptop} {
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
  width: 50%;
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  margin: 10px;
  padding: 10px;
  gap: 15px;
  border-radius: 6px;
  background: none;

  & ~ * {
    transition: 0.3s linear;
  }

  & h3 {
    align-self: center;
  }

  & p {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  & .info-wrapper {
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    & .close {
      position: absolute;
      top: -15px;
      right: -15px;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background: white;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.49);
      border-radius: 50%;
      align-self: flex-end;
      transition: 0.3s linear;

      &:hover {
        & svg {
          transition: 0.3s linear;
          transform: rotate(90deg);
          stroke: tomato;
        }
      }

      & svg {
        transition: 0.3s linear;
        stroke: black;
        stroke-width: 2px;
        max-width: 20px;
        max-height: 20px;
      }
    }
  }
`;
