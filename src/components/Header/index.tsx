import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { Badge, CartButton, HeaderContainer, LocationButton } from './styles'

import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header() {
  const { products, address } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <NavLink to="/">
          <LocationButton>
            <MapPin weight="fill" size={24} />{' '}
            {address?.city && address?.state
              ? `${address!.city} - ${address!.state}`
              : 'Localização'}
          </LocationButton>
        </NavLink>

        <NavLink to="/checkout">
          <CartButton>
            <ShoppingCart weight="fill" size={24} />
            {products.length > 0 && <Badge>{products.length}</Badge>}
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
