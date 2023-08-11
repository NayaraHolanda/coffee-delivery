import { Minus, Plus } from 'phosphor-react'
import { AmountContainer, AmountButton, Amount } from './styles'

export function InputNumber() {
  return (
    <AmountContainer>
      <AmountButton>
        <Minus size={14} weight="fill" />
      </AmountButton>{' '}
      <Amount>1</Amount>{' '}
      <AmountButton>
        <Plus size={14} weight="fill" />
      </AmountButton>
    </AmountContainer>
  )
}
