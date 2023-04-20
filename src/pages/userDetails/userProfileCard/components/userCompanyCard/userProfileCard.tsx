import React, { FC } from "react";
import { UserCompanyModel } from "@src/models/userModels";
import { UserCompanyCardWrapper } from "@src/pages/userDetails/userProfileCard/components/userCompanyCard/userCompanyCardStyled";

type UserCompanyCardProps = {
  company: UserCompanyModel;
};
export const UserCompanyCard: FC<UserCompanyCardProps> = ({ company }) => {
  return (
    <UserCompanyCardWrapper>
      <h4>О компании</h4>
      <p>Название: {company.name}</p>
      <p>Лозунг: {company.catchPhrase}</p>
      <p>Направление: {company.bs}</p>
    </UserCompanyCardWrapper>
  );
};
