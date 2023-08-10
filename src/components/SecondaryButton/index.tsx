import { SecondaryButtonStyled } from './styles'
import { Trash } from 'phosphor-react'

export function SecondaryButton() {
  return (
    <SecondaryButtonStyled>
      <span>
        <Trash size={16} />
      </span>
      Teste
    </SecondaryButtonStyled>
  )
}
