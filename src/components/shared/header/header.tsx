"use client";

import React from "react";
import {
  HeaderContainer,
  TopBanner,
  MainHeader,
  Logo,
  SearchContainer,
  SearchInput,
  SearchButton,
  ActionsContainer,
  ActionButton,
  CartCount,
} from "./styles";
import { Search, User, Heart, Phone, ShoppingCart } from "lucide-react";
import LogoImage from "@/assets/LogoSample.jpg"; 

export default function Header() {
  return (
    <HeaderContainer>
      <TopBanner>
        <span>Adicione R$ 250,00 ao carrinho para ter FRETE GRÁTIS</span>
        <select
          defaultValue="São Paulo"
          className="bg-transparent text-white border-radius-4"
        >
          <option value="São Paulo">São Paulo</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Minas Gerais">Minas Gerais</option>
          <option value="Bahia">Bahia</option>
          <option value="Paraná">Paraná</option>
          <option value="Rio Grande do Sul">Rio Grande do Sul</option>
          <option value="Ceará">Ceará</option>
        </select>
      </TopBanner>

      <MainHeader>
        <Logo
          src={LogoImage.src} 
          alt="86 suplementos"
        />

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Encontre o suplemento ideal para você"
          />
          <SearchButton>
            <Search color="#666" size={20} />
          </SearchButton>
        </SearchContainer>

        <ActionsContainer>
          <ActionButton>
            <User size={20} />
            <div className="text-left">
              <span>Cadastre-se</span> ou
              <br />
              faça seu login
            </div>
          </ActionButton>

          <ActionButton>
            <Heart size={20} />
            <span>Favoritos</span>
          </ActionButton>

          <ActionButton>
            <Phone size={20} />
            <div className="text-left">
              <span>Fale Conosco</span>
              <br />
              Clique aqui
            </div>
          </ActionButton>

          <ActionButton>
            <ShoppingCart size={20} />
            <CartCount>0</CartCount>
          </ActionButton>
        </ActionsContainer>
      </MainHeader>
    </HeaderContainer>
  );
}
