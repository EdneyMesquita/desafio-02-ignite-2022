import { useContext } from 'react'

import {
  BorderedContainer,
  ConfirmationAside,
  ConfirmationContainer,
  List,
  ListIcon,
} from './styles'

import image from '../../assets/confirmation-right.svg'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { CartContext } from '../../contexts/CartContext'

export function Confirmation() {
  const { address, paymentMethod } = useContext(CartContext)

  return (
    <ConfirmationContainer>
      <ConfirmationAside>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que o café chegará até você</p>

        <BorderedContainer>
          <div>
            <List>
              <li>
                <ListIcon>
                  <MapPin weight="fill" size={16} />
                </ListIcon>
                <div>
                  <p>
                    Entrega em{' '}
                    <strong>
                      {address?.street}, {address?.number}
                    </strong>
                  </p>
                  <p>
                    {address?.neighborhood} - {address?.city}, {address?.state}
                  </p>
                </div>
              </li>
              <li>
                <ListIcon>
                  <Timer weight="fill" size={16} />
                </ListIcon>
                <div>
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </div>
              </li>
              <li>
                <ListIcon>
                  <CurrencyDollar weight="fill" size={16} />
                </ListIcon>
                <div>
                  <p>Pagamento na entrega</p>
                  <strong>{paymentMethod}</strong>
                </div>
              </li>
            </List>
          </div>
        </BorderedContainer>
      </ConfirmationAside>

      <img src={image} alt="" />
    </ConfirmationContainer>
  )
}
