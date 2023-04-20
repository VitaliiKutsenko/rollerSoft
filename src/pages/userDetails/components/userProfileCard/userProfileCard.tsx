import React, { FC } from "react";
import { UserCardWrapper } from "@src/pages/userList/components/userCardStyled";
import { UserModels } from "@src/models/userModels";
import { CustomLink } from "@src/components/customLink/customLink";
import { UserProfileCardWrapper } from "@src/pages/userDetails/components/userProfileCard/userProfileCardStyled";
import { UserAddressCard } from "@src/pages/userDetails/components/userAddressCard/userAddressCard";
import { UserCompanyCard } from "@src/pages/userDetails/components/userCompanyCard/userProfileCard";
import { UserPostCard } from "@src/pages/userDetails/components/userPostCard/userPostCard";

export const UserProfileCard: FC<UserModels> = ({
  name,
  username,
  website,
  company,
  email,
  phone,
  address,
  id,
}) => {
  return (
    <UserProfileCardWrapper>
      <h3>{name}</h3>
      <p>Имя: {username}</p>
      <p>
        Сайт:
        <a href={website} target="blank">
          {website}
        </a>
      </p>
      <p>
        Почта:
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        Телефон
        <a href={`tel:${phone}`}>{phone}</a>
      </p>
      <UserAddressCard address={address} />
      <UserCompanyCard company={company} />
      <UserPostCard id={id} />
    </UserProfileCardWrapper>
  );
};
