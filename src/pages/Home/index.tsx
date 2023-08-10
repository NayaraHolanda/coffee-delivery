import coffee from '../../assets/coffee.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import {
  Banner,
  HomeContainer,
  Items,
  ItemsFirstColumn,
  ItemsSecondColumn,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <Items>
            <ItemsFirstColumn>
              <div>
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                Compra simples e segura
              </div>
              <div>
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </div>
            </ItemsFirstColumn>
            <ItemsSecondColumn>
              <div>
                <span>
                  <Package size={16} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </div>
              <div>
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </div>
            </ItemsSecondColumn>
          </Items>
        </div>
        <img src={coffee} alt="" />
      </Banner>
      <h2>Nossos cafés</h2>
    </HomeContainer>
  )
}
