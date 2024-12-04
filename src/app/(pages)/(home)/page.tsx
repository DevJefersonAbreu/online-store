"use client";
import React from "react";
import * as S from "./styles";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import WelcomeStore from "@/components/home/welcomeStore/welcomeStore";
import Blog from "@/components/home/blog/blog";
import Categories from "@/components/home/categories/categories";


const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />
      < WelcomeStore />
      <Categories/>
      <Blog />
      <Footer />
    </S.Container>
  );
};

export default Home;
