'use client';

import React, { useState } from 'react';
import * as S from './styles';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import brunosuplementos from '@/assets/bruno suplementos.png';

const slides = [
  {
    id: 1,
    title: "ENCERRE O ANO NA SUA MELHOR VERSÃO",
    discount: "10% OFF",
    cta: "QUERO APROVEITAR",
    image: brunosuplementos, 
  },
  {
    id: 2,
    title: "AUMENTE SEU DESEMPENHO",
    discount: "20% OFF",
    cta: "QUERO APROVEITAR",
    image: brunosuplementos, 
  },
  {
    id: 3,
    title: "TENHA MAIS ENERGIA",
    discount: "15% OFF",
    cta: "QUERO APROVEITAR",
    image: brunosuplementos, 
  },
  {
    id: 4,
    title: "SUPLEMENTOS PARA TODOS OS OBJETIVOS",
    discount: "5% OFF",
    cta: "QUERO APROVEITAR",
    image: brunosuplementos, 
  },

];

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <S.CarouselContainer>
      <S.CarouselSlide>
        <S.SlideImage
          src={slides[currentSlide].image.src} // Use `.src` para obter o caminho
          alt={slides[currentSlide].title}
        />
        <S.SlideContent>
          <S.SlideTitle>{slides[currentSlide].title}</S.SlideTitle>
          <S.SlideDiscount>{slides[currentSlide].discount}</S.SlideDiscount>
          <S.SlideButton>{slides[currentSlide].cta}</S.SlideButton>
        </S.SlideContent>
      </S.CarouselSlide>

      <S.CarouselButton onClick={prevSlide} position="left">
        <ChevronLeft size={24} />
      </S.CarouselButton>
      <S.CarouselButton onClick={nextSlide} position="right">
        <ChevronRight size={24} />
      </S.CarouselButton>
    </S.CarouselContainer>
  );
};

export default Carousel;
