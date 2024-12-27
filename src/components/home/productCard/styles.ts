import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  padding-top: 12rem;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
`;

export const ProductInfo = styled.div`
  padding: 16px;

  .price-button {
    display: flex;
    margin-top: 10px;
    gap: .7rem;
  }
`;

export const Brand = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: #333;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin: 0.5rem 0 0;
`;

export const ProductPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 16px 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const MainFeature = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeatureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeatureText = styled.div`
  text-align: center;
  color: white;

  .price-button2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: .7rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin: 1rem 0 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const BuyButton = styled.button`
  background: #d4a855;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  margin-top: 8px;

  &:hover {
    background: #c49745;
  }
`;

export const CancelButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  margin-top: 8px;

  &:hover {
    background: #d62839;
  }
`;

// Special Offers styles
const scrollText = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const sparkle = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8; 
  }
`;

export const SpecialOffersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const SpecialOffersInnerContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ScrollingText = styled.div`
  white-space: nowrap;
  width: fit-content;
  display: flex;
`;

export const TextContent = styled.div`
  display: inline-block;
  animation: ${scrollText} 60s linear infinite;
  color: #000;
  font-size: 3.25rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Sparkle = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  background-color: #d4a855;
  transform: rotate(45deg);
  margin: 0 1rem;
  position: relative;
  animation: ${sparkle} 4s ease-in-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #d4a855;
  }

  &::before {
    width: 100%;
    height: 2px;
    top: 3px;
    left: 0;
  }

  &::after {
    width: 2px;
    height: 100%;
    left: 3px;
    top: 0;
  }
`;

// Shopping Cart styles
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const ShoppingCartCard = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 9.4rem;
  left: 0;
  width: 348px;
  height: 80vh;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transform: translateX(-100%);
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${slideIn} 0.3s forwards
        `
      : css`
          ${slideOut} 0.3s forwards
        `};
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

export const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #333;
  }
`;

export const CartContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;
`;

export const CartItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
`;

export const CartItemInfo = styled.div`
  flex-grow: 1;
`;

export const CartItemName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 5px 0;
`;

export const CartItemPrice = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #dc3545;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #c82333;
  }
`;

export const CartFooter = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  margin-bottom: 2rem;
`;

export const CartTotal = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px 0;
  display: flex;
  justify-content: space-between;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #d4a855;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #c49745;
  }
`;

