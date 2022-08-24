import React, { useContext } from 'react'

import {
  CheckoutForm,
  ConfirmButton,
  CardContainer,
  SelectedCoffee,
  CompletionContainer,
  AddressContainer,
  PaymentContainer,
  PaymentButtonsRow,
  FormRow,
} from './styles'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { CartItem } from '../../components/CartItem'
import { PaymentButton } from '../../components/PaymentButton'
import { CartContext } from '../../contexts/CartContext'
import { PaymentMethod } from '../../interfaces/PaymentMethod'
import { Address } from '../../interfaces/address'

import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import cep from 'cep-promise'

export function Checkout() {
  const navigate = useNavigate()

  const { products, address, addAddress, paymentMethod, addPaymentMethod } =
    useContext(CartContext)

  const totalItems = products.reduce(
    (a, b) => a + b.coffee.price * b.quantity,
    0,
  )

  const { register, handleSubmit, watch, setValue } = useForm<Address>({
    defaultValues: {
      zip: address?.zip || '',
      street: address?.street || '',
      complement: address?.complement || '',
      neighborhood: address?.neighborhood || '',
      city: address?.city || '',
      state: address?.state || '',
    },
  })

  const zip = watch('zip')

  function handlePaymentMethod(method: PaymentMethod) {
    if (paymentMethod === method) {
      addPaymentMethod(null)
    } else {
      addPaymentMethod(method)
    }
  }

  async function searchAddressByZip(event: React.FocusEvent<HTMLInputElement>) {
    const zip = event.target.value.trim()

    if (zip) {
      const data = await cep(zip)

      setValue('street', data.street)
      setValue('neighborhood', data.neighborhood)
      setValue('city', data.city)
      setValue('state', data.state)
    }
  }

  function confirmOrder(address: Address) {
    addAddress(address)

    navigate('/confirmation')
  }

  const isConfirmButtonDisabled = !zip || !paymentMethod

  return (
    <CheckoutForm onSubmit={handleSubmit(confirmOrder)}>
      <CompletionContainer>
        <h1>Complete o seu pedido</h1>

        <CardContainer>
          <AddressContainer>
            <MapPinLine size={24} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AddressContainer>
          <main>
            <FormRow>
              <input
                type="text"
                placeholder="CEP"
                maxLength={8}
                pattern="^[0-9]+$"
                {...register('zip')}
                onBlur={searchAddressByZip}
                required
              />
            </FormRow>

            <FormRow>
              <input
                type="text"
                placeholder="Rua"
                {...register('street')}
                required
              />
            </FormRow>

            <FormRow>
              <input
                type="text"
                placeholder="Número"
                pattern="^[0-9]+$"
                {...register('number')}
                required
              />

              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
            </FormRow>

            <FormRow>
              <input
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
                required
              />

              <input
                type="text"
                placeholder="Cidade"
                {...register('city')}
                required
              />

              <input
                type="text"
                placeholder="UF"
                maxLength={2}
                {...register('state')}
                required
              />
            </FormRow>
          </main>
        </CardContainer>

        <CardContainer>
          <PaymentContainer>
            <CurrencyDollar size={24} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentContainer>

          <PaymentButtonsRow>
            <PaymentButton
              onClick={() => handlePaymentMethod(PaymentMethod.CreditCard)}
              isSelected={paymentMethod === PaymentMethod.CreditCard}
            >
              <CreditCard size={22} />
              Cartão de Crédito
            </PaymentButton>

            <PaymentButton
              onClick={() => handlePaymentMethod(PaymentMethod.DebitCard)}
              isSelected={paymentMethod === PaymentMethod.DebitCard}
            >
              <Bank size={22} />
              Cartão de Débito
            </PaymentButton>

            <PaymentButton
              onClick={() => handlePaymentMethod(PaymentMethod.Money)}
              isSelected={paymentMethod === PaymentMethod.Money}
            >
              <Money size={22} />
              Dinheiro
            </PaymentButton>
          </PaymentButtonsRow>
        </CardContainer>
      </CompletionContainer>

      <aside>
        <h1>Cafés selecionados</h1>

        <SelectedCoffee>
          {products.map((product) => (
            <CartItem key={product.coffee.id} data={product} />
          ))}

          <footer>
            <div>
              <span>Total de itens</span>
              <p>R$ {totalItems.toFixed(2)}</p>
            </div>
            <div>
              <span>Entrega</span>
              <p>R$ 3,50</p>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {(totalItems + 3.5).toFixed(2)}</strong>
            </div>

            <ConfirmButton disabled={isConfirmButtonDisabled}>
              Confirmar pedido
            </ConfirmButton>
          </footer>
        </SelectedCoffee>
      </aside>
    </CheckoutForm>
  )
}
