import styled from "styled-components";
import { device } from "@src/style/sizes";

export const UserListWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media ${device.laptop} {
    width: 90%;
    flex-direction: column-reverse;
    min-width: 340px;
  }
  @media ${device.mobileL} {
  }
  min-width: 50%;
  width: 50%;
  min-height: 80%;
  height: 50%;
  gap: 10px;
  align-self: center;

  & ul {
    position: relative;
    background: white;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    min-width: 100%;
    gap: 20px;
    list-style: none;
    overflow: auto;
    border-radius: 10px;
    background: rgba(255, 255, 255);
  }
`;
