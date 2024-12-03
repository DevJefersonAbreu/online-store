"use client";
import React from "react";
import * as S from "./styles";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import WelcomeStore from "@/components/home/welcomeStore/welcomeStore";


const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />
      < WelcomeStore />
      <Footer />
    </S.Container>
  );
};

export default Home;
