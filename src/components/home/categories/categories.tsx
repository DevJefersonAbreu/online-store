"use client";

import React from "react";
import * as S from "./styles";
import { ShoppingBag } from 'lucide-react';

const Categories: React.FC = () => {
  const categories = [
    { name: "Creatina", image: "/placeholder.svg?height=200&width=200" },
    { name: "Whey Protein", image: "/placeholder.svg?height=200&width=200" },
    { name: "Termogênicos", image: "/placeholder.svg?height=200&width=200" },
    { name: "Pré-treinos", image: "/placeholder.svg?height=200&width=200" },
    { name: "Hipercalóricos", image: "/placeholder.svg?height=200&width=200" },
    
  ];

  return (
    <S.Container>
      <S.Content>
        <S.Title>Compre por categoria</S.Title>
        <S.CategoryGrid>
          {categories.map((category, index) => (
            <S.CategoryCard key={index} href={`/categoria/${category.name.toLowerCase()}`}>
              <S.CategoryImage>
                <img src={category.image} alt={category.name} />
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

