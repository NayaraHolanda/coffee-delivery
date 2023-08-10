import { CartButtonStyled } from './styles'
import { ShoppingCart } from 'phosphor-react'

export function Cart() {
  return (
    <CartButtonStyled>
      <ShoppingCart size={22} weight="fill" />
    </CartButtonStyled>
  )
}
