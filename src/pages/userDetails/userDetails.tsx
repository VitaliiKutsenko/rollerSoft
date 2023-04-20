import React, { FC } from "react";
import { useQuery } from "react-query";
import { UserDetailsWrapper } from "@src/pages/userDetails/userDetailsStyled";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "@src/api/users/apiUsers";
import { UserProfileCard } from "@src/pages/userDetails/userProfileCard/userProfileCard";

export const UserDetails: FC = () => {
  const userParams = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => getUserById(userParams?.id as string),
    queryKey: ["user", userParams?.id],
  });
  const handleChange = (event: any) => {
    if ((event.target as Element).id === "mod") {
      navigate("/user");
    }
  };

  return (
    <UserDetailsWrapper id="mod" onClick={handleChange}>
      {isSuccess && data instanceof Object ? (
        <UserProfileCard {...data} />
      ) : null}
    </UserDetailsWrapper>
  );
};
