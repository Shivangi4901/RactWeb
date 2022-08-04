import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/service">
              Service
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4rem;

    li {
      list-style: none;
    }

    .nav-link {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.3rem;
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.hover};
      }
    }
  }
`;
