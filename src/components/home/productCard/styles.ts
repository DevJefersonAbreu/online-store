import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 280px;

  .discount {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #dc2626;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 600;
  }
`

export const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #1f2937;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;

  .filled {
    fill: #fbbf24;
    stroke: #fbbf24;
  }

  .empty {
    fill: none;
    stroke: #d1d5db;
  }

  span {
    color: #6b7280;
    font-size: 0.875rem;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`

export const OriginalPrice = styled.span`
  color: #6b7280;
  text-decoration: line-through;
  font-size: 0.875rem;
`

export const CurrentPrice = styled.span`
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
`

export const InstallmentPrice = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`

export const PixPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #059669;
  font-weight: 600;

  span {
    font-size: 0.75rem;
    font-weight: normal;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #059669;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #047857;
  }
`

