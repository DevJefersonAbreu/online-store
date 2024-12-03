import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  width: 100%;
`;

export const MainBanners = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Banner = styled.div`
  position: relative;
  height: 400px;
  background: #f4f4f4;
  border-radius: 8px;
  overflow: hidden;
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
`;

export const Tag = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: white;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #333;
    color: white;
  }
`;

export const SmallBanners = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SmallBanner = styled.div`
  position: relative;
  height: 200px;
  background: #f4f4f4;
  border-radius: 8px;
  overflow: hidden;
`;

export const SmallBannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
`;

export const SmallTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const SmallDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
`;