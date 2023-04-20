import React, { FC } from "react";
import { UserListWrapper } from "@src/pages/userList/userListStyled";
import { useQuery } from "react-query";
import { UserDetailsWrapper } from "@src/pages/userDetails/userDetailsStyled";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "@src/api/users/apiUsers";
import { UserProfileCard } from "@src/pages/userDetails/components/userProfileCard/userProfileCard";

export const UserDetails: FC = () => {
  const userParams = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => getUserById(userParams?.id as string),
    queryKey: ["user", userParams?.id],
  });
  console.log(data);
  const handleGoBack = () => {
    navigate("/user");
  };
  return (
    <UserDetailsWrapper onClick={handleGoBack}>
      {isSuccess && data instanceof Object ? (
        <UserProfileCard {...data} />
      ) : null}
    </UserDetailsWrapper>
  );
};
