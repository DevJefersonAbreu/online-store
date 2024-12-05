import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100vw; 
  height: 500px;
  overflow: hidden;
  margin: 0;
  padding: 0; 
  @media (max-width: 768px) {
    height: 300px; 
  }
`;

export const CarouselSlide = styled.div`
  position: relative;
  width: 100%; 
  height: 100%;
  transition: transform 0.5s ease-in-out; 
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  z-index: 2;
  max-width: 80%; 
  @media (max-width: 768px) {
    left: 5%;
    text-align: center; 
  }
`;

export const SlideTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 2rem; 
  }
`;

export const SlideDiscount = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SlideButton = styled.button`
  background-color: #29a7e1;
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
    background-color: #1a4b7c;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem; 
    font-size: 1rem; 
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
  background-color: #1a4b7c;
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
    height: 35px; 
  }
`;
