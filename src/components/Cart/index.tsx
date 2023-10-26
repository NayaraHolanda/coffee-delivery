import { NavLink } from 'react-router-dom'
import { CartButtonStyled } from './styles'
import { ShoppingCart } from 'phosphor-react'

export function Cart() {
  return (
    <NavLink to="/checkout" title="Cart">
      <CartButtonStyled>
        <ShoppingCart size={22} weight="fill" />
      </CartButtonStyled>
    </NavLink>
  )
}
