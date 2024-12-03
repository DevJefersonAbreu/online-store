import React from "react";
import * as S from "./styles";


const  WelcomeStore: React.FC = () => {
  return (
    <S.Carousel>
      <S.TextContainer>
        <S.Subtitle>Bem-vindo à nossa loja</S.Subtitle>
        <S.Title>Seus produtos favoritos</S.Title>
        <S.Button>Compre agora</S.Button>
      </S.TextContainer>
    </S.Carousel>
  );
};

export default WelcomeStore;
