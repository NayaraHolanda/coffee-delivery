import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutContainer, FirstSection, SecondSection } from './styles'
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
      <section>
        <h3>Complete seu pedido</h3>
        <form action="">
          <CheckoutForm />
        </form>
      </section>
      <section>
        <h3>Cafés selecionados</h3>
      </section>
    </CheckoutContainer>
  )
}
