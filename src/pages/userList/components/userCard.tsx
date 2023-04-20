import React, { FC } from "react";
import { UserModels } from "@src/models/userModels";
import { CustomLink } from "@src/components/customLink/customLink";

type UserCardProps = Pick<UserModels, "name" | "email" | "company" | "id">;
const UserCard: FC<UserCardProps> = ({ id, name, email, company }) => {
  return (
    <CustomLink to={`${id}`}>
      <p>Имя: {name}</p>
      <p>Почта: {email}</p>
      <p>Компания: {company.name}</p>
    </CustomLink>
  );
};
export default React.memo(UserCard);
