import React, { FC } from "react";
import { UserCardWrapper } from "@src/pages/userList/components/userCardStyled";
import { UserModels } from "@src/models/userModels";
import { CustomLink } from "@src/components/customLink/customLink";

type UserCardProps = Pick<UserModels, "name" | "email" | "company" | "id">;
export const UserCard: FC<UserCardProps> = ({ id, name, email, company }) => {
  return (
    <CustomLink to={`${id}`}>
      <UserCardWrapper>
        <p>Имя: {name}</p>
        <p>Почта: {email}</p>
        <p>Компания: {company.name}</p>
      </UserCardWrapper>
    </CustomLink>
  );
};
