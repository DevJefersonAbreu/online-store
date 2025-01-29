import React from 'react';
import * as S from './styles';

const ProductCard: React.FC = () => {
  const title = 'Sample Product';
  const price = 29.99;
  const rating = 4; 
  const imageUrl = 'https://via.placeholder.com/150';
  const bulletPoints = ['Feature 1', 'Feature 2', 'Feature 3'];

  return (
    <S.Card>
      <img src={imageUrl} alt={title} />

      <S.Content>
        <h3>{title}</h3>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? 'filled' : ''}>
              ★
            </span>
          ))}
        </div>

        <ul className="bullet-points">
          {bulletPoints.map((point, index) => (
            <li key={index}>
              <span className="bullet-icon">•</span>
              {point}
            </li>
          ))}
        </ul>

        <div className="price-wrapper">
          <span className="currency">R$</span>
          <span className="price">{price.toFixed(2)}</span>
        </div>

        <button className="add-to-cart-button">COMPRAR</button>
      </S.Content>
    </S.Card>
  );
};

export default ProductCard;
