import {
  CheckoutFormContainer,
  FormContainer,
  FormLegend,
  FormInputs,
  InputText,
  ZipCodeInput,
  NeighborhoodInput,
  StateInput,
  CityInput,
  ComplementInput,
  NumberInput,
  ContainerRadioInput,
  RadioInput,
  LabelRadioInput,
} from './styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <FormContainer>
        <FormLegend color="yellow-dark">
          <i>
            <MapPinLine size={22} />
          </i>{' '}
          <p>
            Endereço de Entrega <br />
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </p>
        </FormLegend>
        <FormInputs>
          <ZipCodeInput
            type="text"
            name="zipCode"
            id="zipCode"
            placeholder="CEP"
          />
          <InputText type="text" name="street" id="street" placeholder="Rua" />
          <div>
            <NumberInput
              type="text"
              name="number"
              id="number"
              placeholder="Número"
            />
            <ComplementInput
              type="text"
              name="complement"
              id=""
              placeholder="Complemento"
            />
          </div>
          <div>
            <NeighborhoodInput
              type="text"
              name="neighborhood"
              id=""
              placeholder="Bairro"
            />
            <CityInput type="text" name="city" id="city" placeholder="Cidade" />
            <StateInput type="text" name="state" id="state" placeholder="UF" />
          </div>
        </FormInputs>
      </FormContainer>
      <FormContainer>
        <FormLegend color="purple">
          <i>
            <CurrencyDollar size={22} />
          </i>{' '}
          <p>
            Pagamento <br />
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </p>
        </FormLegend>
        <ContainerRadioInput>
          <RadioInput
            type="radio"
            name="payment"
            id="creditCard"
            value="Cartão de crédito"
          />
          <LabelRadioInput htmlFor="creditCard">
            <i>
              <CreditCard size={16} />
            </i>
            Cartão de crédito
          </LabelRadioInput>

          <RadioInput
            type="radio"
            name="payment"
            id="debitCard"
            value="Cartão de débito"
          />
          <LabelRadioInput htmlFor="debitCard">
            <i>
              <Bank size={16} />
            </i>
            Cartão de débito
          </LabelRadioInput>

          <RadioInput type="radio" name="payment" id="cash" value="Dinheiro" />
          <LabelRadioInput htmlFor="cash">
            <i>
              <Money size={16} />
            </i>
            Dinheiro
          </LabelRadioInput>
        </ContainerRadioInput>
      </FormContainer>
    </CheckoutFormContainer>
  )
}
