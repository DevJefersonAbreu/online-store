"use client";
import React from "react";
import * as S from "./styles";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import Blog from "@/components/home/blog/blog";
import Categories from "@/components/home/categories/categories";
import Carrossel from "@/components/home/carrossel/carrossel";
import ProductCard from "@/components/home/productCard/productCard";





const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Carrossel />
      <Categories/>
      <ProductCard title={""} imageUrl={""} rating={0} reviews={0} originalPrice={0} currentPrice={0} installments={0} installmentPrice={0} pixPrice={0} discount={0}/>
      <Blog />
      <Footer />
    </S.Container>
  );
};

export default Home;
