import { SecondaryButtonStyled } from './styles'
import { Trash } from 'phosphor-react'

export function SecondaryButton() {
  return (
    <SecondaryButtonStyled type="button">
      <span>
        <Trash size={16} />
      </span>
      Remover
    </SecondaryButtonStyled>
  )
}
