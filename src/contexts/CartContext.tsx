import produce from 'immer'
import React, { createContext, useEffect, useState } from 'react'
import { Address } from '../interfaces/address'

import { Coffee } from '../interfaces/coffee'
import { PaymentMethod } from '../interfaces/PaymentMethod'

interface ProductItem {
  coffee: Coffee
  quantity: number
}

interface CartContextType {
  address?: Address
  addAddress: (data: Address) => void
  paymentMethod: PaymentMethod | null
  addPaymentMethod: (data: PaymentMethod | null) => void
  products: ProductItem[]
  addProductToCart: (coffee: Coffee, quantity: number) => void
  editProductFromCart: (id: string, quantity: number) => void
  removeProductFromCart: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: React.ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<ProductItem[]>(() => {
    const storedProductsJson = localStorage.getItem(
      '@ignite-desafio-02:products',
    )

    if (storedProductsJson) {
      return JSON.parse(storedProductsJson)
    }

    return []
  })

  const [address, setAddress] = useState<Address>(() => {
    const storedAddressJson = localStorage.getItem('@ignite-desafio-02:address')

    if (storedAddressJson) {
      return JSON.parse(storedAddressJson)
    }

    return undefined
  })

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    () => {
      const storedPaymentJson = localStorage.getItem(
        '@ignite-desafio-02:payment',
      )

      if (storedPaymentJson) {
        return JSON.parse(storedPaymentJson)
      }

      return null
    },
  )

  function addProductToCart(coffee: Coffee, quantity: number) {
    setProducts(
      produce(products, (draft) => {
        draft.push({
          coffee,
          quantity,
        })
      }),
    )
  }

  function editProductFromCart(id: string, quantity: number) {
    const index = products.findIndex((product) => product.coffee.id === id)

    if (index >= 0) {
      setProducts(
        produce(products, (draft) => {
          draft[index].quantity = quantity
        }),
      )
    }
  }

  function removeProductFromCart(id: string) {
    setProducts(
      produce(products, (draft) => {
        const filtered = draft.filter((product) => product.coffee.id !== id)

        return filtered
      }),
    )
  }

  function addAddress(data: Address) {
    setAddress(data)
  }

  function addPaymentMethod(data: PaymentMethod | null) {
    setPaymentMethod(data)
  }

  useEffect(() => {
    const productsJson = JSON.stringify(products)
    localStorage.setItem('@ignite-desafio-02:products', productsJson)

    const addressJson = JSON.stringify(address ?? {})
    localStorage.setItem('@ignite-desafio-02:address', addressJson)

    const paymentJson = JSON.stringify(paymentMethod ?? {})
    localStorage.setItem('@ignite-desafio-02:payment', paymentJson)
  }, [products, address, paymentMethod])

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        editProductFromCart,
        removeProductFromCart,
        address,
        addAddress,
        paymentMethod,
        addPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
