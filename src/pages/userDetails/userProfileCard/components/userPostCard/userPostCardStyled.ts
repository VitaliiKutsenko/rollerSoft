import styled from "styled-components";
import { UserAddressCardWrapper } from "@src/pages/userDetails/userProfileCard/components/userAddressCard/userAddressCardStyled";
import { device } from "@src/style/sizes";

export const UserPostCardWrapper = styled(UserAddressCardWrapper)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const UserPostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;

  & .posts {
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 100%;
    @media ${device.laptop} {
      height: 300px;
    }
    @media ${device.mobileL} {
      flex-direction: column;
    }
    overflow-y: auto;
  }

  & button {
    background: none;
    border: none;
    width: fit-content;
    height: fit-content;

    @media ${device.mobileL} {
      position: absolute;
      bottom: 50px;

      &:nth-child(1) {
        left: 50px;
      }
      &:nth-child(3) {
        right: 50px;
      }
    }
    &[disabled] {
      visibility: hidden;
    }
    & svg {
      max-width: 50px;
      max-height: 50px;
    }
  }
`;
export const PostContentWrapper = styled.li<{ positions: boolean }>`
  border-radius: 6px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 5px;
  width: 60%;
  background: rgba(128, 128, 128, 0.15);
  box-shadow: 0 0 1px 1px black;
  margin: 10px 0;
  ${({ positions }) =>
    !positions
      ? {
          marginLeft: "20%",
        }
      : {
          marginRight: "20%",
        }}
`;
