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

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: brightness(0.7); 
  
`;

export const SmallBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: brightness(0.5); 
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
  color: #e6e6e6;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: #fff;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #f0f0f0 ;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #29a7e1;
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
  color: #fff;
`;

export const SmallDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
  color:#f0f0f0 ;
`;