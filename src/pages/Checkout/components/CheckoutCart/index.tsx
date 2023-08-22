import { CheckoutCartContainer, CartContent } from './styles'
import expresso from '../../../../assets/expresso.png'
import { InputNumber } from '../../../../components/InputNumber'
import { SecondaryButton } from '../../../../components/SecondaryButton'

export function CheckoutCart() {
  return (
    <CheckoutCartContainer>
      <div>
        <img src={expresso} alt="" />
        <CartContent>
          <span>Expresso Tradicional</span>
          <div>
            <InputNumber />
            <SecondaryButton />
          </div>
        </CartContent>
      </div>
      <strong>R$ 9,90</strong>
    </CheckoutCartContainer>
  )
}
