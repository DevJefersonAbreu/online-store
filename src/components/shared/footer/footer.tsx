"use client";
import React from "react";
import * as S from "./styles";
import Image from 'next/image';
import { Facebook, Youtube, Twitter, Instagram, CreditCard, Send, ArrowRight } from 'lucide-react';
import AppStoreImage from '@/assets/baixar-app-store.png';
import GooglePlayImage from '@/assets/baixar-app-google-play.png';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <div className="newsletter">
        <div className="newsletter-content">
          <h2>Cadastre seu e-mail</h2>
          <p>Receba promoções e novidades exclusivas com <span>ofertas especiais</span></p>
          <div className="signup">
            <input type="email" placeholder="Digite seu E-mail" />
            <button>
              Inscrever-se
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="contact-section">
          <div className="contact-info">
            <h3>Contato</h3>
            <p><strong>Endereço:</strong> Wellington Road, Street 32, San Francisco</p>
            <p><strong>Telefone:</strong> (85) 9999999</p>
            <p><strong>Horário de Atendimento:</strong> 10:00 - 18:00, Seg a Sex</p>
          </div>
          <div className="follow-us">
            <h3>Siga-nos</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>Sobre</h3>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Informações de entrega</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos e Condições</a></li>
            <li><a href="#">Contate-nos</a></li>
          </ul>
        </div>

        <div className="account-section">
          <h3>Minha conta</h3>
          <ul>
            <li><a href="#">Entrar</a></li>
            <li><a href="#">Ver carrinho</a></li>
            <li><a href="#">Minha lista de desejos</a></li>
            <li><a href="#">Rastrear meu pedido</a></li>
            <li><a href="#">Ajuda</a></li>
          </ul>
        </div>

        <div className="install-section">
          <h3>Instalar aplicativo</h3>
          <p>Da App Store ou Google Play</p>
          <div className="app-buttons">
      <a href="#" className="app-store">
        <img src={AppStoreImage.src} alt="App Store" />
      </a>
      <a href="#" className="google-play">
        <img src={GooglePlayImage.src} alt="Google Play" />
      </a>
    </div>
          <p>Formas de Pagamento</p>
          <div className="payment-methods">
            <CreditCard className="payment-icon" size={32} />
            <CreditCard className="payment-icon" size={32} />
            <CreditCard className="payment-icon" size={32} />
            <CreditCard className="payment-icon" size={32} />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
      </div>
    </S.Container>
  );
};

export default Footer;

