import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100vw; /* Ocupa toda a largura da tela */
  height: 500px;
  overflow: hidden;
  margin: 0; /* Remove qualquer margem extra */
  padding: 0; /* Remove qualquer preenchimento extra */
  @media (max-width: 768px) {
    height: 300px; /* Ajusta a altura para telas menores */
  }
`;

export const CarouselSlide = styled.div`
  position: relative;
  width: 100%; /* Garante que ocupe toda a largura disponível */
  height: 100%;
  transition: transform 0.5s ease-in-out; /* Transição suave */
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Faz com que a imagem cubra toda a área */
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  z-index: 2;
  max-width: 80%; /* Limita a largura para dispositivos menores */
  @media (max-width: 768px) {
    left: 5%;
    text-align: center; /* Centraliza o texto em telas menores */
  }
`;

export const SlideTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 2rem; /* Diminui o tamanho da fonte em telas pequenas */
  }
`;

export const SlideDiscount = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 2.5rem; /* Reduz o tamanho da fonte para dispositivos menores */
  }
`;

export const SlideButton = styled.button`
  background-color: #ff0000;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem; /* Ajusta o padding para telas menores */
    font-size: 1rem; /* Ajusta o tamanho da fonte */
  }
`;

interface CarouselButtonProps {
  position: 'left' | 'right';
}

export const CarouselButton = styled.button<CarouselButtonProps>`
  position: absolute;
  top: 50%;
  ${props => props.position}: 20px;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px; /* Ajusta o tamanho dos botões para telas menores */
  }
`;
