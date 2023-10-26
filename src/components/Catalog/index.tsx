import { IconButton } from '../IconButton'
import {
  CatalogContainer,
  Tag,
  PriceContainer,
  ShopContainer,
  Tags,
} from './styles'
import { InputNumber } from '../InputNumber'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'

export function Catalog() {
  const { products } = useContext(ProductsContext)

  return (
    <>
      {products.map((product) => {
        return (
          <CatalogContainer key={product.id}>
            <img src={`../../assets/${product.imageName}.png`} alt="" />
            <div>
              <Tags>
                {product.tags.map((tag) => {
                  return <Tag key={tag}>{tag}</Tag>
                })}
              </Tags>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <PriceContainer>
                <span>
                  R$ <strong>{product.price}</strong>
                </span>
                <ShopContainer>
                  <InputNumber />
                  <IconButton />
                </ShopContainer>
              </PriceContainer>
            </div>
          </CatalogContainer>
        )
      })}
    </>
  )
}
