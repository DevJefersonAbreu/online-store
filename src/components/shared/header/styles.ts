import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e3e6f3;
  padding: 20px 80px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #088178;
  text-decoration: none;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  list-style: none;
  margin: 0 20px;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    transition: 0.3s;

    &:hover {
      color: #088178;
    }
  }
`;
