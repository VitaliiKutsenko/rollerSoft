import React, { FC } from "react";
import { UserListWrapper } from "@src/pages/userList/userListStyled";
import { useQuery } from "react-query";
import { getAllUsers } from "@src/api/users/apiUsers";
import { UserCard } from "@src/pages/userList/components/userCard";
import { Outlet } from "react-router-dom";

export const UserList: FC = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: getAllUsers,
    queryKey: ["userList"],
  });
  return (
    <UserListWrapper>
      <ul>
        {isSuccess && Array.isArray(data) ? (
          data.map((user) => {
            return (
              <UserCard
                key={user.id}
                id={user.id}
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
      <Outlet />
    </UserListWrapper>
  );
};
