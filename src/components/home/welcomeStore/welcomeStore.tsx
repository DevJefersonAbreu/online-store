import React from "react";
import * as S from "./styles";


const  WelcomeStore: React.FC = () => {
  return (
    <S.Carousel>
      <S.TextContainer>
        <S.Subtitle>Welcome to Our Store</S.Subtitle>
        <S.Title>Your Favorite Products</S.Title>
        <S.Button>Shop Now</S.Button>
      </S.TextContainer>
    </S.Carousel>
  );
};

export default WelcomeStore;
