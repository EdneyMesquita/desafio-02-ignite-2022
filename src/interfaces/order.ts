import { Address } from './address'
import { PaymentMethod } from './PaymentMethod'

export interface Order {
  address: Address
  paymentMethod: PaymentMethod
  total: number
}
