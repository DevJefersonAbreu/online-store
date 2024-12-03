import React from "react";
import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.Logo href="/">Brand</S.Logo>
        <S.NavList>
          <S.NavItem><a href="#">Home</a></S.NavItem>
          <S.NavItem><a href="#">About</a></S.NavItem>
          <S.NavItem><a href="#">Services</a></S.NavItem>
          <S.NavItem><a href="#">Contact</a></S.NavItem>
        </S.NavList>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
