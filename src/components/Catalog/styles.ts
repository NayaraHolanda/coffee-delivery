import { styled } from 'styled-components'

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;
  width: 256px;
  height: 310px;

  position: relative;

  img {
    width: 120px;
    position: absolute;
    top: -20px;
  }

  > div {
    position: absolute;
    top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 0 1.25rem 1.25rem 1.25rem;

    > h4 {
      color: ${(props) => props.theme['base-subtitle']};

      font-family: 'Baloo 2', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 130%;
    }

    > p {
      color: ${(props) => props.theme['base-label']};

      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;

      text-align: center;

      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const Tag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border-radius: 100px;

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.813rem;

  padding: 0.25rem 0.5rem;
  margin: 0.75rem 0 1rem 0;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;
    }
  }
`

export const ShopContainer = styled.div`
  display: flex;
  align-items: stretch;

  gap: 0.5rem;
`
