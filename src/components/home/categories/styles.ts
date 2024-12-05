import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #1a3c61;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; 
  margin-top: 2rem;
`;

export const CategoryCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  text-decoration: none;
  transition: transform 0.3s;
  width: 200px;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const CategoryImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 4px solid #40b7e5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  ${CategoryCard}:hover & img {
    transform: scale(1.1);
  }
`;

export const CategoryName = styled.h2`
  font-size: 1.25rem;
  color: #1a3c61;
  text-align: center;
  margin: 0;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
