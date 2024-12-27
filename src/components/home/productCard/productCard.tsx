"use client";

import React, { useState } from "react";
import * as S from "./styles";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pomada Modeladora",
    price: 49.90,
    image: "/assets/onlineStoreImage/pomada-modeladora.jpg",
    description: "Pomada modeladora com fixação forte"
  },
  {
    id: 2,
    name: "Óleo para Barba",
    price: 39.90,
    image: "/assets/onlineStoreImage/oleo-barba.jpg",
    description: "Óleo hidratante para barba"
  },
  {
    id: 3,
    name: "Shampoo Masculino",
    price: 34.90,
    image: "/assets/onlineStoreImage/shapoo.jpg",
    description: "Shampoo especial para cabelos masculinos"
  },
  {
    id: 4,
    name: "Navalha Profissional",
    price: 89.90,
    image: "/assets/onlineStoreImage/navalha.jpg",
    description: "Navalha profissional de barbeiro"
  },
  {
    id: 5,
    name: "Pente Profissional",
    price: 29.90,
    image: "/assets/onlineStoreImage/pente.jpg",
    description: "Pente profissional para barbeiro"
  },
  {
    id: 6,
    name: "Máquina de Corte",
    price: 199.90,
    image: "/assets/onlineStoreImage/maquina.jpg",
    description: "Máquina de corte profissional"
  },
  {
    id: 7,
    name: "Gel para Cabelo",
    price: 25.90,
    image: "/assets/onlineStoreImage/gel.jpg",
    description: "Gel fixador para cabelo"
  },
  {
    id: 8,
    name: "Kit Barba",
    price: 149.90,
    image: "/assets/onlineStoreImage/kit-barba.jpg",
    description: "Kit completo para cuidados com a barba"
  },
  {
    id: 9,
    name: "Tesoura Profissional",
    price: 129.90,
    image: "/assets/onlineStoreImage/tesoura.jpg",
    description: "Tesoura profissional para corte"
  },
  {
    id: 10,
    name: "Loção Pós Barba",
    price: 45.90,
    image: "/assets/onlineStoreImage/pos-barba.jpg",
    description: "Loção calmante pós barba"
  },
  {
    id: 11,
    name: "Talco Masculino",
    price: 19.90,
    image: "/assets/onlineStoreImage/talco.jpg",
    description: "Talco refrescante masculino"
  },
  {
    id: 12,
    name: "Escova de Barba",
    price: 59.90,
    image: "/assets/onlineStoreImage/escova-barba.png",
    description: "Escova especial para barba"
  }
];

const featuredProducts = [
  {
    id: 13,
    name: "KIT BARBA PREMIUM",
    price: 189.99,
    image: "/assets/onlineStoreImage/kit-barba-padrao.jpg",
    description: "Kit completo para cuidados com a barba"
  },
  {
    id: 14,
    name: "KIT MASCULINO PREMIUM",
    price: 289.99,
    image: "/assets/onlineStoreImage/kit-cabelo-prime.jpg",
    description: "Kit completo para cuidados masculinos"
  },
  {
    id: 15,
    name: "KIT CABELO E BARBA PREMIUM",
    price: 489.99,
    image: "/assets/onlineStoreImage/kit-cabelo.jpg",
    description: "Kit completo para cuidados com cabelo e barba"
  }
];

const MainProducts: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleBuy = (product: Product) => {
    setCart((prev) => [...prev, product]);
    setIsCartVisible(true);
  };

  const handleCancel = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    if (cart.length === 1) {
      setIsCartVisible(false);
    }
  };

  const renderButton = (product: Product) => {
    const isInCart = cart.some((item) => item.id === product.id);

    if (isInCart) {
      return (
        <S.CancelButton onClick={() => handleCancel(product.id)}>
          Cancelar
        </S.CancelButton>
      );
    }

    return (
      <S.BuyButton onClick={() => handleBuy(product)}>
        Comprar
      </S.BuyButton>
    );
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <S.Container>
      <S.Header>
        <S.GridContainer>
          {featuredProducts.slice(0, 2).map((product) => (
            <S.ProductCard key={product.id}>
              <S.Image src={product.image} alt={product.name} />
              <S.ProductInfo>
                <S.Brand>{product.name}</S.Brand>
                <div className="price-button">
                  <S.Price>{formatPrice(product.price)}</S.Price>
                  {renderButton(product)}
                </div>
              </S.ProductInfo>
            </S.ProductCard>
          ))}
        </S.GridContainer>
      </S.Header>

      <S.MainFeature>
        <S.FeatureImage src={featuredProducts[2].image} alt={featuredProducts[2].name} />
        <S.FeatureOverlay>
          <S.FeatureText>
            <S.Title>{featuredProducts[2].name}</S.Title>
            <div className="price-button2">
              <S.Subtitle>{formatPrice(featuredProducts[2].price)}</S.Subtitle>
              {renderButton(featuredProducts[2])}
            </div>
          </S.FeatureText>
        </S.FeatureOverlay>
      </S.MainFeature>

      <S.SpecialOffersContainer>
        <S.SpecialOffersInnerContainer>
          <S.ScrollingText>
            <S.TextContent>
              Ofertas Especiais <S.Sparkle />
              Ofertas Especiais <S.Sparkle />
              Ofertas Especiais <S.Sparkle />
              Ofertas Especiais <S.Sparkle />
              Ofertas Especiais <S.Sparkle />
              Ofertas Especiais <S.Sparkle />
            </S.TextContent>
          </S.ScrollingText>
        </S.SpecialOffersInnerContainer>
      </S.SpecialOffersContainer>

      <S.ProductGrid>
        {products.map((product) => (
          <S.ProductCard key={product.id}>
            <S.ProductImage src={product.image} alt={product.name} />
            <S.ProductInfo>
              <S.ProductName>{product.name}</S.ProductName>
              <S.ProductDescription>{product.description}</S.ProductDescription>
              <S.PriceContainer>
                <S.ProductPrice>{formatPrice(product.price)}</S.ProductPrice>
                {renderButton(product)}
              </S.PriceContainer>
            </S.ProductInfo>
          </S.ProductCard>
        ))}
      </S.ProductGrid>

      <S.ShoppingCartCard isVisible={isCartVisible}>
        <S.CartHeader>
          <S.CartTitle>Carrinho de Compras</S.CartTitle>
          <S.CloseButton onClick={() => setIsCartVisible(false)}>×</S.CloseButton>
        </S.CartHeader>
        <S.CartContent>
          {cart.map((item) => (
            <S.CartItem key={item.id}>
              <S.CartItemImage src={item.image} alt={item.name} />
              <S.CartItemInfo>
                <S.CartItemName>{item.name}</S.CartItemName>
                <S.CartItemPrice>{formatPrice(item.price)}</S.CartItemPrice>
              </S.CartItemInfo>
              <S.RemoveButton onClick={() => handleCancel(item.id)}>×</S.RemoveButton>
            </S.CartItem>
          ))}
        </S.CartContent>
        <S.CartFooter>
          <S.CartTotal>
            Total: <span>{formatPrice(calculateTotal())}</span>
          </S.CartTotal>
          <S.CheckoutButton onClick={() => alert("Compra finalizada!")}>
            Finalizar Compra
          </S.CheckoutButton>
        </S.CartFooter>
      </S.ShoppingCartCard>
    </S.Container>
  );
};

export default MainProducts;

