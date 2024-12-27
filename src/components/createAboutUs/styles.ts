import styled, { keyframes } from "styled-components";
import { Play, ArrowRight, Check, ChevronRight } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
  padding-top: 15rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 500px;
    background: linear-gradient(180deg, rgba(51,161,222,0.05) 0%, rgba(255,255,255,0) 100%);
    z-index: -1;
  }
`;

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  margin-bottom: 8rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 540px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(51,161,222,0.1);
    z-index: -1;
  }

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(27,75,124,0.1);
  animation: ${float} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(27,75,124,0) 0%, rgba(27,75,124,0.1) 100%);
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(27,75,124,0.8);
  color: white;
  text-align: center;
  transition: all 0.3s ease;
`;

export const OverlayText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #1B4B7C;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const Highlight = styled.span`
  color: #33A1DE;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(51,161,222,0.2);
    border-radius: 2px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
  max-width: 90%;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #33A1DE;
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1B4B7C;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: #1B4B7C;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid #1B4B7C;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #1B4B7C;
    color: white;
  }
`;

export const PartnersSection = styled.div`
  text-align: center;
  padding: 6rem 0;
  background: linear-gradient(to bottom, #f8f9fa, transparent);
  border-radius: 2rem;
  margin-bottom: 8rem;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(51,161,222,0.05) 0%, rgba(255,255,255,0) 70%);
  }

  &::before {
    top: -150px;
    left: -150px;
  }

  &::after {
    bottom: -150px;
    right: -150px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1B4B7C;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: #33A1DE;
    border-radius: 2px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

export const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
`;

export const PartnerLogo = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 15px 35px rgba(27,75,124,0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1B4B7C, #33A1DE);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }

  img {
    transition: all 0.4s ease;
    max-width: 280px;
    height: auto;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 45px rgba(27,75,124,0.15);

    &::before {
      transform: translateY(0);
    }

    img {
      transform: scale(1.08);
    }
  }
`;

export const PartnerOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(27,75,124,0.9);
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${PartnerLogo}:hover & {
    transform: translateY(0);
  }
`;

export const PartnerName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const PartnerDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  margin-bottom: 8rem;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -5%;
    width: 110%;
    height: 120%;
    background: linear-gradient(180deg, rgba(27,75,124,0.02) 0%, rgba(51,161,222,0.02) 100%);
    border-radius: 3rem;
    z-index: -1;
    transform: translateY(-50%);
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const TextContent = styled.div`
  max-width: 540px;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1B4B7C;
  line-height: 1.2;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 40px;
    height: 4px;
    background: #33A1DE;
    border-radius: 2px;
  }
`;

export const ContentText = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
`;

export const Features = styled.div`
  display: grid;
  gap: 2rem;
  margin: 3rem 0;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(27,75,124,0.1);
  }
`;

export const FeatureIcon = styled.div`
  background: #E3F2FD;
  color: #33A1DE;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeatureContent = styled.div`
  flex: 1;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  color: #1B4B7C;
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const ReadMoreButton = styled.button`
  background-color: #33A1DE;
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 3rem;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
  box-shadow: 0 10px 20px rgba(51,161,222,0.2);

  &:hover {
    background-color: #1B4B7C;
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(27,75,124,0.3);
  }
`;

export const ArrowIcon = styled(ChevronRight)`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;

  ${ReadMoreButton}:hover & {
    transform: translateX(5px);
  }
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.div`
  height: 450px;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:first-child {
    margin-top: 3rem;
  }

  &:last-child {
    margin-top: -3rem;
  }

  img {
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(27,75,124,0.15);

    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    &:first-child, &:last-child {
      margin-top: 0;
    }
  }
`;

export const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(27,75,124,0.8);
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
  transform: translateY(100%);

  ${ImageWrapper}:hover & {
    transform: translateY(0);
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: none;
  padding: 1.8rem 3rem;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 20px 50px rgba(27,75,124,0.2);
  }
`;

export const PlayIcon = styled(Play)`
  width: 28px;
  height: 28px;
  color: #33A1DE;
  fill: #33A1DE;
  transition: transform 0.3s ease;

  ${PlayButton}:hover & {
    transform: scale(1.1);
  }
`;

export const PlayText = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
`;

export const StatsSection = styled.div`
  background: linear-gradient(135deg, #1B4B7C 0%, #33A1DE 100%);
  padding: 6rem 4rem;
  border-radius: 2rem;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  }

  &::before {
    top: -200px;
    left: -200px;
  }

  &::after {
    bottom: -200px;
    right: -200px;
  }
`;

export const StatCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const StatCard = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 2rem;
  backdrop-filter: blur(10px);
  min-width: 250px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const StatDivider = styled.div`
  width: 2px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Plus = styled.span`
  color: white;
  margin-left: 0.5rem;
  font-size: 2.5rem;
`;

export const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
`;

export const StatDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
`;

export const TestimonialSection = styled.div`
  padding: 8rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 2rem;
  margin-bottom: 4rem;
`;

export const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
`;

export const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(27,75,124,0.1);
  }
`;

export const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TestimonialQuote = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-style: italic;
  flex-grow: 1;
`;

export const TestimonialAuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TestimonialAuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TestimonialAuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TestimonialAuthor = styled.h4`
  font-size: 1.2rem;
  color: #1B4B7C;
  margin-bottom: 0.25rem;
`;

export const TestimonialRole = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const TestimonialCTA = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

export const TestimonialCTAText = styled.p`
  font-size: 1.2rem;
  color: #1B4B7C;
  margin-bottom: 2rem;
  font-weight: 600;
`;

