import React, { FC } from "react";
import { UserModels } from "@src/models/userModels";
import { UserProfileCardWrapper } from "@src/pages/userDetails/userProfileCard/userProfileCardStyled";
import { UserAddressCard } from "@src/pages/userDetails/userProfileCard/components/userAddressCard/userAddressCard";
import { UserCompanyCard } from "@src/pages/userDetails/userProfileCard/components/userCompanyCard/userProfileCard";
import { UserPostCard } from "@src/pages/userDetails/userProfileCard/components/userPostCard/userPostCard";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Cross } from "@assets/svg/cross.svg";
import { UserInfoCard } from "@src/pages/userDetails/userProfileCard/components/userInfoCard/userInfoCard";

export const UserProfileCard: FC<UserModels> = ({
  company,
  address,
  id,
  ...data
}) => {
  const handleGoBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.closest("#mod")) {
      (e.currentTarget.closest("#mod") as HTMLElement).click();
    }
  };
  return (
    <UserProfileCardWrapper>
      <div className="info-wrapper">
        <button className="close" onClick={handleGoBack}>
          <Cross />
        </button>
        <UserInfoCard {...data} />
        <UserAddressCard address={address} />
        <UserCompanyCard company={company} />
      </div>
      <UserPostCard id={id} />
    </UserProfileCardWrapper>
  );
};
