import styled from 'styled-components'

export const Card = styled.div`
  width: 280px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 16px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
    line-height: 1.4;
    min-height: 44px;
  }

  .rating {
    display: flex;
    gap: 2px;

    span {
      font-size: 18px;
      color: #d3d3d3;

      &.filled {
        color: #ffd700;
      }
    }
  }

  .bullet-points {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: #666;

      .bullet-icon {
        color: #4caf50;
        font-size: 18px;
      }
    }
  }

  .price-wrapper {
    display: flex;
    align-items: baseline;
    gap: 4px;
    margin-top: 8px;

    .currency {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }
      }
    `
     
