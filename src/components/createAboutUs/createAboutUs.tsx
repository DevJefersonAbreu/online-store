"use client";
import React from "react";
import * as S from "./styles";
import Image from "next/image";
import { ChevronRight, Star, TrendingUp, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <S.Container>
      <S.HeroSection>
        <S.HeroContent>
          <S.Title>
            Potencialize seus <S.Highlight>Resultados</S.Highlight> com Nutrição de Ponta
          </S.Title>
          <S.Subtitle>
            Descubra nossa linha completa de suplementos de alta qualidade, cientificamente formulados para maximizar seu desempenho e alcançar seus objetivos fitness com eficiência e segurança.
          </S.Subtitle>
          <S.HeroButtons>
            <S.PrimaryButton>
              Explorar Produtos
              <ChevronRight size={20} />
            </S.PrimaryButton>
            <S.SecondaryButton>
              Consulta Grátis
            </S.SecondaryButton>
          </S.HeroButtons>
        </S.HeroContent>
        <S.HeroImage>
          <Image
            src="/assets/imagesAboutUs/aboutus1.jpeg"
            alt="Suplementos de alta performance"
            width={700}
            height={500}
            className="rounded-2xl object-cover"
          />
          <S.ImageOverlay>
            <S.OverlayText>Qualidade Garantida</S.OverlayText>
          </S.ImageOverlay>
        </S.HeroImage>
      </S.HeroSection>

      <S.PartnersSection>
        <S.SectionTitle>Marcas Parceiras Premium</S.SectionTitle>
        <S.SectionSubtitle>Colaboramos com as melhores marcas do mercado para oferecer produtos de qualidade superior</S.SectionSubtitle>
        <S.LogoGrid>
          {[1, 2, 3, 4].map((index) => (
            <S.PartnerLogo key={index}>
              <Image
                src={`/assets/imagesAboutUs/about2.jpeg`}
                alt={`Marca Parceira ${index}`}
                width={280}
                height={150}
                className="w-full h-full object-contain rounded-lg"
              />
              <S.PartnerOverlay>
                <S.PartnerName>Parceiro {index}</S.PartnerName>
                <S.PartnerDescription>Líder em suplementos esportivos</S.PartnerDescription>
              </S.PartnerOverlay>
            </S.PartnerLogo>
          ))}
        </S.LogoGrid>
      </S.PartnersSection>

      <S.ContentSection>
        <S.TextContent>
          <S.ContentTitle>
            Sobre a PowerFit Supplements
          </S.ContentTitle>
          <S.ContentText>
            Há mais de 15 anos, a PowerFit Supplements tem sido sinônimo de excelência em nutrição esportiva. Nossa jornada começou com uma missão clara: fornecer aos atletas e entusiastas do fitness os melhores suplementos do mercado, respaldados por pesquisas científicas e resultados comprovados.
          </S.ContentText>
          <S.ContentText>
            Nosso compromisso com a qualidade é inabalável. Cada produto em nosso catálogo passa por rigorosos testes e é cuidadosamente selecionado por nossa equipe de especialistas em nutrição e fisiologia do exercício. Trabalhamos apenas com marcas reconhecidas e certificadas, garantindo que você receba apenas o melhor para seu corpo e desempenho.
          </S.ContentText>
          <S.Features>
            <S.FeatureItem>
              <S.FeatureIcon>
                <Star />
              </S.FeatureIcon>
              <S.FeatureContent>
                <S.FeatureTitle>Produtos Premium Certificados</S.FeatureTitle>
                <S.FeatureDescription>Suplementos de alta qualidade testados e aprovados</S.FeatureDescription>
              </S.FeatureContent>
            </S.FeatureItem>
            <S.FeatureItem>
              <S.FeatureIcon>
                <TrendingUp />
              </S.FeatureIcon>
              <S.FeatureContent>
                <S.FeatureTitle>Consultoria Nutricional Personalizada</S.FeatureTitle>
                <S.FeatureDescription>Orientação especializada para maximizar seus resultados</S.FeatureDescription>
              </S.FeatureContent>
            </S.FeatureItem>
            <S.FeatureItem>
              <S.FeatureIcon>
                <Award />
              </S.FeatureIcon>
              <S.FeatureContent>
                <S.FeatureTitle>Entrega Rápida para Todo Brasil</S.FeatureTitle>
                <S.FeatureDescription>Receba seus suplementos em tempo recorde</S.FeatureDescription>
              </S.FeatureContent>
            </S.FeatureItem>
          </S.Features>
          <S.ReadMoreButton>
            Conheça Nossa História Completa
            <S.ArrowIcon />
          </S.ReadMoreButton>
        </S.TextContent>
        <S.ImagesGrid>
          <S.ImageWrapper>
            <Image
              src="/assets/imagesAboutUs/about3.jpeg"
              alt="Produtos PowerFit"
              width={300}
              height={400}
              className="w-full h-full object-cover rounded-2xl"
            />
            <S.ImageCaption>Nossa Linha de Produtos</S.ImageCaption>
          </S.ImageWrapper>
          <S.ImageWrapper>
            <Image
              src="/assets/imagesAboutUs/about4.jpeg"
              alt="Resultados PowerFit"
              width={300}
              height={400}
              className="w-full h-full object-cover rounded-2xl"
            />
            <S.ImageCaption>Transformações Reais</S.ImageCaption>
          </S.ImageWrapper>
          <S.PlayButton>
            <S.PlayIcon />
            <S.PlayText>Assista Nossa História</S.PlayText>
          </S.PlayButton>
        </S.ImagesGrid>
      </S.ContentSection>

      <S.StatsSection>
        <S.StatCards>
          <S.StatCard>
            <S.StatNumber>
              50K<S.Plus>+</S.Plus>
            </S.StatNumber>
            <S.StatLabel>Clientes Satisfeitos</S.StatLabel>
            <S.StatDescription>Transformando vidas através da nutrição adequada</S.StatDescription>
          </S.StatCard>
          <S.StatDivider />
          <S.StatCard>
            <S.StatNumber>
              500<S.Plus>+</S.Plus>
            </S.StatNumber>
            <S.StatLabel>Produtos Disponíveis</S.StatLabel>
            <S.StatDescription>Uma solução para cada objetivo fitness</S.StatDescription>
          </S.StatCard>
          <S.StatDivider />
          <S.StatCard>
            <S.StatNumber>
              15<S.Plus>+</S.Plus>
            </S.StatNumber>
            <S.StatLabel>Anos de Experiência</S.StatLabel>
            <S.StatDescription>Liderando o mercado de suplementação</S.StatDescription>
          </S.StatCard>
        </S.StatCards>
      </S.StatsSection>

      <S.TestimonialSection>
        <S.SectionTitle>O Que Nossos Clientes Dizem</S.SectionTitle>
        <S.SectionSubtitle>Histórias reais de transformação e satisfação com a PowerFit Supplements</S.SectionSubtitle>
        <S.TestimonialGrid>
          {[
            {
              quote: "A PowerFit mudou completamente minha abordagem ao fitness. Os produtos são incríveis e o suporte é incomparável!",
              author: "Carlos Silva",
              role: "Atleta Amador",
              image: "/assets/imagesAboutUs/about4.jpeg"
            },
            {
              quote: "Desde que comecei a usar os suplementos da PowerFit, minha recuperação pós-treino melhorou significativamente. Recomendo a todos!",
              author: "Ana Rodrigues",
              role: "Personal Trainer",
              image: "/assets/imagesAboutUs/about4.jpeg"
            },
            {
              quote: "A qualidade dos produtos e o conhecimento da equipe de suporte são excepcionais. PowerFit é minha escolha número um para suplementação.",
              author: "Marcos Oliveira",
              role: "Fisiculturista",
              image: "/assets/imagesAboutUs/about4.jpeg"
            },
            {
              quote: "Como nutricionista, aprecio a transparência e a qualidade dos ingredientes nos produtos PowerFit. Confio neles para meus clientes.",
              author: "Dra. Juliana Costa",
              role: "Nutricionista Esportiva",
              image: "/assets/imagesAboutUs/about4.jpeg"
            },
            {
              quote: "A linha de produtos veganos da PowerFit é fantástica! Finalmente encontrei suplementos de alta qualidade que atendem às minhas necessidades.",
              author: "Renata Lima",
              role: "Atleta Vegana",
              image: "/assets/imagesAboutUs/about4.jpeg"
            },
            {
              quote: "O atendimento ao cliente da PowerFit é excepcional. Sempre recebo orientações personalizadas que fazem toda a diferença nos meus resultados.",
              author: "Felipe Santos",
              role: "Corredor de Maratona",
              image: "/assets/imagesAboutUs/about4.jpeg"
            },
            {
              quote: "Como idoso ativo, encontrei na PowerFit produtos que me ajudam a manter minha vitalidade. A diferença na minha disposição é notável!",
              author: "José Ferreira",
              role: "Aposentado Ativo, 68 anos",
              image: "/assets/imagesAboutUs/about4.jpeg"
            }
          ].map((testimonial, index) => (
            <S.TestimonialCard key={index}>
              <S.TestimonialContent>
                <S.TestimonialQuote>"{testimonial.quote}"</S.TestimonialQuote>
                <S.TestimonialAuthorInfo>
                  <S.TestimonialAuthorImage>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={80}
                      height={80}
                    />
                  </S.TestimonialAuthorImage>
                  <S.TestimonialAuthorDetails>
                    <S.TestimonialAuthor>{testimonial.author}</S.TestimonialAuthor>
                    <S.TestimonialRole>{testimonial.role}</S.TestimonialRole>
                  </S.TestimonialAuthorDetails>
                </S.TestimonialAuthorInfo>
              </S.TestimonialContent>
            </S.TestimonialCard>
          ))}
        </S.TestimonialGrid>
        <S.TestimonialCTA>
          <S.TestimonialCTAText>Junte-se aos nossos clientes satisfeitos e comece sua jornada de transformação hoje!</S.TestimonialCTAText>
          <S.PrimaryButton>
            Experimente Agora
            <ChevronRight size={20} />
          </S.PrimaryButton>
        </S.TestimonialCTA>
      </S.TestimonialSection>
    </S.Container>
  );
};

export default AboutUs;

