import { IconButton } from '../IconButton'
import { CatalogContainer, Tag, PriceContainer, ShopContainer } from './styles'
import expresso from '../../assets/expresso.png'
import { InputNumber } from '../InputNumber'

export function Catalog() {
  return (
    <CatalogContainer>
      <img src={expresso} alt="" />
      <div>
        <Tag>Tradicional</Tag>
        <h4>Expresso Tradicional</h4>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <PriceContainer>
          <span>
            R$ <strong>9,90</strong>
          </span>
          <ShopContainer>
            <InputNumber />
            <IconButton />
          </ShopContainer>
        </PriceContainer>
      </div>
    </CatalogContainer>
  )
}
