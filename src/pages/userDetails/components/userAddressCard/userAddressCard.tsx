import React, { FC } from "react";
import { UserAddressModel } from "@src/models/userModels";

import { UserAddressCardWrapper } from "@src/pages/userDetails/components/userAddressCard/userAddressCardStyled";
type UserAddressCardProps = {
  address: UserAddressModel;
};
export const UserAddressCard: FC<UserAddressCardProps> = ({ address }) => {
  return (
    <UserAddressCardWrapper>
      <p>Город: {address.city}</p>
      <p>Улица: {address.street}</p>
      <p>Квартира: {address.suite}</p>
      <p>Код: {address.zipcode}</p>
    </UserAddressCardWrapper>
  );
};
