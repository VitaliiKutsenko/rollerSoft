import React, { FC } from "react";
import { UserModels } from "@src/models/userModels";
import { UserInfoCardWrapper } from "@src/pages/userDetails/userProfileCard/components/userInfoCard/userInfoCardStyled";

type UserInfoCardProps = Omit<UserModels, "id" | "company" | "address">;
export const UserInfoCard: FC<UserInfoCardProps> = ({
  name,
  username,
  website,
  email,
  phone,
}) => {
  return (
    <UserInfoCardWrapper>
      <h4>{name}</h4>
      <div className="flex-wrapper">
        <div className="flex-wrapper_left">
          <p>Имя: {username}</p>
          <p>
            Телефон
            <a href={`tel:${phone}`}>{phone}</a>
          </p>
        </div>
        <div className="flex-wrapper_right">
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
        </div>
      </div>
    </UserInfoCardWrapper>
  );
};
