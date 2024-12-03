"use client";
import React from "react";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.Container>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contato</h3>
          <p>Endereço: Av. Central, 1234 - Centro</p>
          <p>Telefone: (11) 98765-4321</p>
          <p>Email: contato@suplementos.com</p>
        </div>

        {/* Redes Sociais */}
        <div className="social-media">
          <h3>Redes Sociais</h3>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>

        {/* Informações adicionais */}
        <div className="additional-info">
          <h3>Informações</h3>
          <a href="#">Termos e Condições</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Política de Devolução</a>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="copyright">
        <p>© 2024 Suplementos. Todos os direitos reservados.</p>
      </div>
    </S.Container>
  );
};

export default Footer;
