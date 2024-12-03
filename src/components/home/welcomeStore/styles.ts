import styled from "styled-components";

export const Carousel = styled.section`
  background-image: url('/images/hero4.png');
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 80px;
`;

export const TextContainer = styled.div`
  max-width: 500px;
`;

export const Subtitle = styled.h4`
  font-size: 40px;
  color: #222;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: 70px;
  color: #088178;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 700;
  color: #088178;
  background-color: transparent;
  border: 2px solid #088178;
  padding: 15px 30px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #088178;
    color: white;
  }
`;
