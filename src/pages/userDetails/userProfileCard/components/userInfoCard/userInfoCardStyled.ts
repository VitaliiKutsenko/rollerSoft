import styled from "styled-components";
import { UserAddressCardWrapper } from "@src/pages/userDetails/userProfileCard/components/userAddressCard/userAddressCardStyled";

export const UserInfoCardWrapper = styled(UserAddressCardWrapper)`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  & h4 {
    margin-top: 5px;
  }
  & .flex-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 50px;
    align-items: center;
    margin: 10px;
    &-left {
    }
    &-right {
    }

    & p {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }

  & ~ * {
    transition: 0.3s linear;
  }
`;
