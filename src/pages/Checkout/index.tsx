import { PrimaryButton } from '../../components/PrimaryButton'
import { CheckoutCart } from './components/CheckoutCart'
import { CheckoutForm } from './components/CheckoutForm'
import {
  CheckoutContainer,
  FirstSection,
  SecondSection,
  SelectedCoffeesContainer,
  TotalPrice,
  TotalPriceContainer,
} from './styles'
import { useForm } from 'react-hook-form'

export function Checkout() {
  const checkoutForm = useForm({
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit, watch, reset } = checkoutForm

  return (
    <CheckoutContainer>
      <form action="">
        <section>
          <h3>Complete seu pedido</h3>
          <CheckoutForm />
        </section>
        <section>
          <h3>Cafés selecionados</h3>
          <SelectedCoffeesContainer>
            <CheckoutCart />
            <CheckoutCart />

            <TotalPriceContainer>
              <TotalPrice>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </TotalPrice>
              <TotalPrice>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </TotalPrice>
              <TotalPrice>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </TotalPrice>
            </TotalPriceContainer>

            <PrimaryButton text="Confirmar pedido" type="submit" />
          </SelectedCoffeesContainer>
        </section>
      </form>
    </CheckoutContainer>
  )
}
