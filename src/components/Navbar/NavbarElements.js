import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #000000;
  height: 85px;
  display: flex;
  justify-content: flex-end;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fe0204;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
