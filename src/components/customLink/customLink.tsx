import React, { FC } from "react";
import { NavLinksWrapper } from "./customLinkStyled";
import { NavLink } from "react-router-dom";

interface CustomLinkProps {
  children: React.ReactNode;
  to: string;
  text?: string;
}
export const CustomLink: FC<CustomLinkProps> = ({ children, to, text }) => {
  return (
    <NavLinksWrapper>
      <NavLink to={to}>{children || text}</NavLink>
    </NavLinksWrapper>
  );
};
