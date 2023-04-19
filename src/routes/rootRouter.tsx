import React from "react";
import {
  createBrowserRouter,
  // createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "@src/pages/layout/layout";
import { UserList } from "@src/pages/userList/userList";

export const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<UserList />} />
      <Route path="userList" element={<UserList />} />
      <Route path="*" element={<div>Error</div>} />
    </Route>
  )
);
