import styled from 'styled-components';

// Header principal
export const Header = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Container para o conteúdo principal
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

// Banner superior
export const TopBanner = styled.div`
  background-color: #1a4b7c;
  color: white;
  text-align: center;
  padding: 8px 0;
`;

// Cabeçalho principal
export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

// Logo
export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1a4b7c;
`;

// Barra de busca
export const SearchBar = styled.div`
  flex: 1;
  max-width: 600px;
  position: relative;

  input {
    width: 100%;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }

  span.icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

// Ações do usuário
export const UserActions = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 14px;
  color: #1a4b7c;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// CartLink e Badge
export const CartLink = styled.a`
  position: relative;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff0000;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;

// Ícone do carrinho
export const CartIcon = styled.i`
  font-size: 24px;
  color: #333;
`;

// Navegação
export const Navigation = styled.nav`
  background-color: #f6f6f6;
  padding: 16px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
`;

// Link de navegação
export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 8px 16px;
  transition: 0.3s;
  display: inline-block;

  &:hover {
    background-color: #ff0000;
    color: white;
  }
`;

// Hero Banner
export const HeroBanner = styled.div`
  background-color: #ff0000;
  color: white;
  padding: 16px;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin-bottom: 16px;

  h1 {
    font-size: 48px;
    font-weight: bold;
  }

  p {
    font-size: 24px;
  }

  button {
    background-color: #00c853;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 18px;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #00e676;
    }
  }
`;

export const HeroImage = styled.div`
  position: relative;
  height: 300px;
`;

// Benefícios
export const Benefits = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
`;

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  font-size: 16px;

  span {
    font-size: 24px;
  }
`;

export const BenefitText = styled.div`
  font-size: 16px;

  p {
    margin: 0;
  }
`;
