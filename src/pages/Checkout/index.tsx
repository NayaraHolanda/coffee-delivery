import { CheckoutCart } from './components/CheckoutCart'
import { CheckoutForm } from './components/CheckoutForm'
import {
  CheckoutContainer,
  FirstSection,
  SecondSection,
  SelectedCoffeesContainer,
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
          </SelectedCoffeesContainer>
        </section>
      </form>
    </CheckoutContainer>
  )
}
