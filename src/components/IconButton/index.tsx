import { IconButtonStyled } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'

export function IconButton() {
  return (
    <IconButtonStyled>
      <ShoppingCartSimple size={22} weight="fill" />
    </IconButtonStyled>
  )
}
