import {
  SuccessContainer,
  SuccessInformation,
  SuccessInformationBox,
} from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import illustration from '../../assets/illustration.png'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessInformation>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <SuccessInformationBox>
          <div>
            <i>
              <MapPin size={16} weight="fill" />
            </i>
            <p>
              Entrega em Rua <strong>João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre, RS
            </p>
          </div>
          <div>
            <i>
              <Timer size={16} weight="fill" />
            </i>
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </div>
          <div>
            <i>
              <CurrencyDollar size={16} />
            </i>
            <p>
              Pagamento na entrega
              <br />
              <strong>Cartão de Crédito</strong>
            </p>
          </div>
        </SuccessInformationBox>
      </SuccessInformation>

      <img src={illustration} alt="" />
    </SuccessContainer>
  )
}
