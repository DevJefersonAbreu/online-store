"use client";
import React from "react";
import * as S from "./styles";
import CreateAboutUs from "@/components/createAboutUs/createAboutUs";
import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";



const AboutUs: React.FC = () => {
  return (
    <S.Container>
        <Header/>
    <CreateAboutUs/>
    <Footer/>
    </S.Container>
  );
};

export default AboutUs;
