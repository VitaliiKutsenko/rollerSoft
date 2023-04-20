import React, { FC } from "react";
import { UserCompanyModel } from "@src/models/userModels";
import { UserCompanyCardWrapper } from "@src/pages/userDetails/components/userCompanyCard/userCompanyCardStyled";

type UserCompanyCardProps = {
  company: UserCompanyModel;
};
export const UserCompanyCard: FC<UserCompanyCardProps> = ({ company }) => {
  return (
    <UserCompanyCardWrapper>
      <p>{company.name}</p>
      <p>{company.catchPhrase}</p>
      <p>{company.bs}</p>
    </UserCompanyCardWrapper>
  );
};
