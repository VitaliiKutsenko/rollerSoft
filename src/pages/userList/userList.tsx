import React, { FC } from "react";
import { UserListWrapper } from "@src/pages/userList/userListStyled";
import { useQuery } from "react-query";
import { apiUsers } from "@src/api/users/apiUsers";
import { UserCard } from "@src/pages/userList/components/userCard";

export const UserList: FC = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: apiUsers,
    queryKey: ["userList"],
  });
  console.log(data, isLoading, isSuccess);
  return (
    <UserListWrapper>
      <ul>
        {isSuccess && Array.isArray(data) ? (
          data.map((user) => {
            return (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                company={user.company}
              />
            );
          })
        ) : (
          <li>{data as string}</li>
        )}
      </ul>
    </UserListWrapper>
  );
};
