import {
  CardContainer,
  CardFooter,
  CartButton,
  Categories,
  ChipContainer,
} from './styles'

import { Counter } from '../Counter'

import { ShoppingCart } from 'phosphor-react'

import { Coffee } from '../../interfaces/coffee'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface CoffeeCardProps {
  data: Coffee
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { addProductToCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(0)

  function handleCounterChange(value: number) {
    setQuantity(value)
  }

  function handleAddCoffeeToCard() {
    addProductToCart(data, quantity)
    setQuantity(0)
  }

  const isButtonDisabled = quantity === 0

  return (
    <CardContainer>
      <img src={data.image} alt="" />

      <Categories>
        {data.categories.map((category, i) => (
          <ChipContainer key={i}>{category}</ChipContainer>
        ))}
      </Categories>

      <strong>{data.name}</strong>
      <span>{data.description}</span>

      <CardFooter>
        <strong>{data.price.toFixed(2)}</strong>

        <div>
          <Counter onValueChange={handleCounterChange} />
          <CartButton
            onClick={handleAddCoffeeToCard}
            disabled={isButtonDisabled}
          >
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </div>
      </CardFooter>
    </CardContainer>
  )
}
