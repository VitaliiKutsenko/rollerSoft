import React, { FC, useState } from "react";
import {
  UserListWrapper,
  UserWrapper,
} from "@src/pages/userList/userListStyled";
import { useQuery } from "react-query";
import { getAllUsers } from "@src/api/users/apiUsers";
import UserCard from "@src/pages/userList/components/userCard";
import { Outlet } from "react-router-dom";
import { DebounceInput } from "@src/components/debounceInput/debounceInput";

export const UserList: FC = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: getAllUsers,
    queryKey: ["userList"],
  });

  return (
    <UserListWrapper className="modal">
      {isSuccess && Array.isArray(data) ? (
        <UserWrapper>
          <DebounceInput data={data} />
          <ul>
            {data.map((user) => {
              return (
                <UserCard
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  company={user.company}
                />
              );
            })}
          </ul>
        </UserWrapper>
      ) : (
        <li>{data as string}</li>
      )}
      <Outlet />
    </UserListWrapper>
  );
};
