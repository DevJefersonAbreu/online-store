'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './styles'; 


const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "TRANSFORME SEUS TREINOS",
      subtitle: "ACELERE SEUS RESULTADOS",
      price: "R$ 3,62",
      description: "O WHEY MAIS AVALIADO DO BRASIL",
      buttonText: "COMPRAR"
    }
  ];

  const categories = [
    "TODAS AS CATEGORIAS",
    "TOP 20",
    "LANÇAMENTOS", 
    "WHEY PROTEIN",
    "CREATINA",
    "PRÉ-TREINO",
    "OBJETIVOS",
    "ROUPAS"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <S.TopBanner>
        Adicione R$ 250,00 ao carrinho para ter FRETE GRÁTIS
      </S.TopBanner>

      {/* Header */}
      <S.Header>
        <S.Container>
          <S.MainHeader>
            {/* Logo */}
            <a href="/">
              <S.Logo>
                86 suplementos
              </S.Logo>

            </a>

            {/* Search Bar */}
            <S.SearchBar>
              <input
                type="text"
                placeholder="Encontre o suplemento ideal para você"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                🔍
              </button>
            </S.SearchBar>

            {/* User Actions */}
            <S.UserActions>
              <a href="/login">
                <span>Cadastre-se ou faça seu login</span>
                <i className="fi fi-rs-user"></i>
              </a>
              <a href="/favoritos">
                <span>Favoritos</span>
                <i className="fi fi-rs-heart"></i>
              </a>
              <a href="/contato">
                <span>Fale Conosco</span>
                <i className="fi fi-rs-message"></i>
              </a>
              <S.CartLink>
                <S.CartIcon className="fi fi-rs-shopping-cart" />
                {cartCount > 0 && (
                  <S.CartBadge>{cartCount}</S.CartBadge>
                )}
              </S.CartLink>
            </S.UserActions>
          </S.MainHeader>

          {/* Navigation */}
          <S.Navigation>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <S.NavLink href={`/${category.toLowerCase().replace(" ", "-")}`}>
                    {category}
                  </S.NavLink>
                </li>
              ))}
            </ul>
          </S.Navigation>
        </S.Container>
      </S.Header>

      {/* Benefits Section */}
      <S.Benefits>
        <S.Benefit>
          <span>🚚</span>
          <div>
            <p>Frete grátis a partir de R$ 150*</p>
            <p>Consulte condições</p>
          </div>
        </S.Benefit>
        <S.Benefit>
          <span>📱</span>
          <div>
            <p>Compre em nossa loja com 10% OFF</p>
            <p>no boleto ou PIX</p>
          </div>
        </S.Benefit>
        <S.Benefit>
          <span>💰</span>
          <div>
            <p>CASHBACK GPONTOS</p>
            <p>Consulte condições</p>
          </div>
        </S.Benefit>
        <S.Benefit>
          <span>💳</span>
          <div>
            <p>Compras em até 6x sem juros</p>
          </div>
        </S.Benefit>
      </S.Benefits>
    </div>
  );
};

export default Home;
