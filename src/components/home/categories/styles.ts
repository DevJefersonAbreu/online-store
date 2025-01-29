import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

export const Title = styled.h1`
  text-align: center;
  color: #000;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 600;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const CategoryCard = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`

export const CategoryBackground = styled.div<{ bgImage: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`

export const CategoryContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  z-index: 1;
`

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`

export const CategoryName = styled.h2`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`

