'use client'

import { Container, ProductImage, Title, Rating, PriceContainer, OriginalPrice, CurrentPrice, InstallmentPrice, PixPrice, Button } from './styles'
import { Star } from 'lucide-react'

interface ProductCardProps {
  title: string
  imageUrl: string
  rating: number
  reviews: number
  originalPrice: number
  currentPrice: number
  installments: number
  installmentPrice: number
  pixPrice: number
  discount: number
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  imageUrl,
  rating,
  reviews,
  originalPrice,
  currentPrice,
  installments,
  installmentPrice,
  pixPrice,
  discount
}) => {
  // Verificar se os valores são válidos antes de usar .toFixed()
  const formattedOriginalPrice = originalPrice ? originalPrice.toFixed(2) : '0.00';
  const formattedCurrentPrice = currentPrice ? currentPrice.toFixed(2) : '0.00';
  const formattedInstallmentPrice = installmentPrice ? installmentPrice.toFixed(2) : '0.00';
  const formattedPixPrice = pixPrice ? pixPrice.toFixed(2) : '0.00';

  return (
    <Container>
      {discount > 0 && (
        <span className="discount">{discount}% OFF</span>
      )}
      <ProductImage>
        <img src="image_url" alt="product" />
      </ProductImage>
      <Title>{title}</Title>
      <Rating>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={index < Math.floor(rating) ? 'filled' : 'empty'}
            size={16}
          />
        ))}
        <span>({reviews})</span>
      </Rating>
      <PriceContainer>
        <OriginalPrice>R$ {formattedOriginalPrice}</OriginalPrice>
        <CurrentPrice>R$ {formattedCurrentPrice}</CurrentPrice>
        <InstallmentPrice>
          Até {installments}x de R$ {formattedInstallmentPrice}
        </InstallmentPrice>
        <PixPrice>
          R$ {formattedPixPrice}
          <span>à vista no PIX</span>
        </PixPrice>
      </PriceContainer>
      <Button>VER PRODUTO</Button>
    </Container>
  )
}

export default ProductCard;
