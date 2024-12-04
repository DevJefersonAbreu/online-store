import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
`;

export const CategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens quebrem linha se necessário */
  justify-content: center; /* Centraliza os itens horizontalmente */
  gap: 2rem; /* Espaçamento entre os itens */
  margin-top: 2rem;
`;


export const CategoryCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CategoryImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 2px solid #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CategoryName = styled.h2`
  font-size: 1.25rem;
  color: #333;
  text-align: center;
  margin: 0;
`;

