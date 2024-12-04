"use client";

import React from "react";
import * as S from "./styles";
import LogoSample from "@/assets/LogoSample_ByTailorBrands-Photoroom.png"; 
import whey from "@/assets/whey.png"; 
import creatina from "@/assets/creatina.png";
import termogenico from "@/assets/termogenico.png";
import preTreino from "@/assets/pré-treino.png";
import hipercalorico from "@/assets/hipercalorico.png";
const Categories: React.FC = () => {
  const categories = [
    { name: "Creatina", image: creatina }, 
    { name: "Whey Protein", image: whey},
    { name: "Termogênicos", image: termogenico },
    { name: "Pré-treinos", image: preTreino },
    { name: "Hipercalóricos", image: hipercalorico },
  ];

  return (
    <S.Container>
      <S.Content>
        <S.Title>Compre por categoria</S.Title>
        <S.CategoryGrid>
          {categories.map((category, index) => (
            <S.CategoryCard key={index} href={`/categoria/${category.name.toLowerCase()}`}>
              <S.CategoryImage>
                <img src={category.image.src} alt={category.name} />
              </S.CategoryImage>
              <S.CategoryName>{category.name}</S.CategoryName>
            </S.CategoryCard>
          ))}
        </S.CategoryGrid>
      </S.Content>
    </S.Container>
  );
};

export default Categories;
