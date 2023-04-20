import React from "react";
import {
  createBrowserRouter,
  // createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { Layout } from "@src/pages/layout/layout";
import { UserList } from "@src/pages/userList/userList";
import { UserDetails } from "@src/pages/userDetails/userDetails";

export const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="user" />} />
      <Route path="user" element={<UserList />}>
        <Route path=":id" element={<UserDetails />} />
      </Route>
      <Route path="*" element={<div>Error</div>} />
    </Route>
  )
);
