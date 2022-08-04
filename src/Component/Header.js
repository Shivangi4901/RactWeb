import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";

export default function Header() {
  return (
    <MainHead>
      <NavLink to="/">
        <img src="light.png" alt="logo" height="100px" />
      </NavLink>
      <NavBar />
    </MainHead>
  );
}

const MainHead = styled.header`
  padding: 0 0.4rem;
  height: 6rem;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
