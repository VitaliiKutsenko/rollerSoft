import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "@src/pages/layout/layoutStyled";
export const Layout: FC = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};
