'use client'

import {
  Container,
  Title,
  Grid,
  CategoryCard,
  CategoryBackground,
  CategoryContent,
  Icon,
  CategoryName
} from './styles'
import { Dumbbell, Leaf, Sprout, Flame, PillIcon as Pills, Microscope, AtomIcon as Atoms, Zap } from 'lucide-react'
import proteinImage from '/src/assets/proteinasC.jpg';
import veganImage from '/src/assets/veganosC.jpg';
import vegetarianImage from '/src/assets/vegetarianosC.jpg';
import thermogenicImage from '/src/assets/termogenicoC.jpg';
import vitaminsImage from '/src/assets/vitaminasC.jpg';
import clinicalImage from '/src/assets/LinhaClínicaC.jpg';
import aminoImage from '/src/assets/AminoácidosC.jpg';
import carbsImage from '/src/assets/CarboidratosC.jpg';
const categories = [
  {
    name: 'Proteínas',
    icon: Dumbbell,
    image: proteinImage
  },
  {
    name: 'Veganos',
    icon: Leaf,
    image: veganImage
  },
  {
    name: 'Vegetarianos',
    icon: Sprout,
    image: vegetarianImage
  },
  {
    name: 'Termogênicos',
    icon: Flame,
    image: thermogenicImage
  },
  {
    name: 'Vitaminas',
    icon: Pills,
    image: vitaminsImage
  },
  {
    name: 'Linha Clínica',
    icon: Microscope,
    image: clinicalImage
  },
  {
    name: 'Aminoácidos',
    icon: Atoms,
    image: aminoImage
  },
  {
    name: 'Carboidratos',
    icon: Zap,
    image: carbsImage
  }
]

export default function Categories() {
  return (
    <Container>
      <Title>ESCOLHA SEU SUPLEMENTO POR CATEGORIA</Title>
      <Grid>
        {categories.map((category) => (
          <CategoryCard key={category.name}>
            <CategoryBackground bgImage={typeof category.image === 'string' ? category.image : category.image.src} />
            <CategoryContent>
              <Icon>
                <category.icon strokeWidth={1.5} />
              </Icon>
              <CategoryName>{category.name}</CategoryName>
            </CategoryContent>
          </CategoryCard>
        ))}
      </Grid>
    </Container>
  )
}


