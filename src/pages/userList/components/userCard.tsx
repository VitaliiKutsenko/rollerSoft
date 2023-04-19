import React, { FC } from "react";
import { UserCardWrapper } from "@src/pages/userList/components/userCardStyled";
import { UserModels } from "@src/models/userModels";

type UserCardProps = Pick<UserModels, "name" | "email" | "company">;
export const UserCard: FC<UserCardProps> = ({ name, email, company }) => {
  return (
    <UserCardWrapper>
      <p>Имя: {name}</p>
      <p>Почта: {email}</p>
      <p>Компания: {company.name}</p>
    </UserCardWrapper>
  );
};
