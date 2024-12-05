"use client";

import * as S from "./styles";
import blog1 from '@/assets/blog1.avif';
import blog2 from '@/assets/blog2.jpg';
import blog3 from '@/assets/blog3.jpg';
import blog4 from '@/assets/blog4.avif';
import blog5 from '@/assets/blog5.avif';

const Blog: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.MainBanners>
        <S.Banner>
  <S.BannerImage src={blog1.src} alt="Banner 1" />
  <S.BannerContent>
    <S.Tag>Fitness</S.Tag>
    <S.Title>Musculação e Bodybuilding</S.Title>
    <S.Description>Ganho de massa muscular exige uma boa suplementação.</S.Description>
    <S.Button>Saiba Mais</S.Button>
  </S.BannerContent>
</S.Banner>
<S.Banner>
  <S.BannerImage src={blog2.src} alt="Banner 1" />
  <S.BannerContent>
    <S.Tag>Alta Intensidade</S.Tag>
    <S.Title>Crossfit</S.Title>
    <S.Description>Força e energia são essenciais para treinos extremos.</S.Description>
    <S.Button>Saiba Mais</S.Button>
  </S.BannerContent>
</S.Banner>

        </S.MainBanners>

        <S.SmallBanners>
        <S.SmallBanner>
  <S.SmallBannerImage src={blog3.src} alt="Small Banner 3" />
  <S.SmallBannerContent>
    <S.SmallTitle>Ciclismo de Longa Distância</S.SmallTitle>
    <S.SmallDescription>Suplementos aumentam a resistência.</S.SmallDescription>
  </S.SmallBannerContent>
</S.SmallBanner>

<S.SmallBanner>
  <S.SmallBannerImage src={blog4.src} alt="Small Banner 3" />
  <S.SmallBannerContent>
    <S.SmallTitle>Corridas de Alta Performance</S.SmallTitle>
    <S.SmallDescription>Energia e recuperação rápida.</S.SmallDescription>
  </S.SmallBannerContent>
</S.SmallBanner>

<S.SmallBanner>
  <S.SmallBannerImage src={blog5.src} alt="Small Banner 3" />
  <S.SmallBannerContent>
    <S.SmallTitle>Esportes de Combate</S.SmallTitle>
    <S.SmallDescription>Rápida recuperação e resistência.</S.SmallDescription>
  </S.SmallBannerContent>
</S.SmallBanner>

        </S.SmallBanners>
      </S.Content>
    </S.Container>
  );
};

export default Blog;
