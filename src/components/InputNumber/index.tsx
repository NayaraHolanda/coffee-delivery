import { Minus, Plus } from 'phosphor-react'
import { AmountContainer, AmountButton, Amount } from './styles'

export function InputNumber() {
  return (
    <AmountContainer>
      <AmountButton type="button">
        <Minus size={14} weight="fill" />
      </AmountButton>{' '}
      <Amount>1</Amount>{' '}
      <AmountButton type="button">
        <Plus size={14} weight="fill" />
      </AmountButton>
    </AmountContainer>
  )
}
