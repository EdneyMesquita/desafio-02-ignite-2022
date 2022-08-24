import { ButtonsRow, CartItemContainer, RemoveButton } from './styles'

import { Counter } from '../Counter'
import { Trash } from 'phosphor-react'
import { Coffee } from '../../interfaces/coffee'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface ProductItem {
  coffee: Coffee
  quantity: number
}

interface CartItemProps {
  data: ProductItem
}

export function CartItem({ data }: CartItemProps) {
  const { editProductFromCart, removeProductFromCart } = useContext(CartContext)

  const { coffee, quantity } = data

  function handleChangeQuantity(quantity: number) {
    editProductFromCart(coffee.id, quantity)
  }

  function handleRemoveProduct() {
    removeProductFromCart(coffee.id)
  }

  return (
    <CartItemContainer>
      <div>
        <img src={coffee.image} alt="" />
        <div>
          <p>{coffee.name}</p>

          <ButtonsRow>
            <Counter
              defaultValue={quantity}
              onValueChange={handleChangeQuantity}
            />

            <RemoveButton onClick={handleRemoveProduct}>
              <Trash size={22} />
              Remover
            </RemoveButton>
          </ButtonsRow>
        </div>
      </div>
      <strong>R$ {coffee.price.toFixed(2)}</strong>
    </CartItemContainer>
  )
}
