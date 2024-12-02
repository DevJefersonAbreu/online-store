import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed; /* Fixa o header no topo */
  top: 0;
  left: 0;
  z-index: 1000; /* Garante que o header ficará acima de outros elementos */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Opcional: sombra para destaque */
`;

export const TopBanner = styled.div`
  background-color: #1a4b7c;
  color: white;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainHeader = styled.div`
  background-color: #29a7e1;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Logo = styled.img`
  height: 40px;
  object-fit: contain;
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 600px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  border: none;
  font-size: 14px;

  &::placeholder {
    color: #666;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
`;

export const CartCount = styled.span`
  background-color: black;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
