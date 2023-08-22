import { styled } from 'styled-components'

export const CheckoutCartContainer = styled.div`
  border-bottom: 0.5px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 368px;
  max-width: 368px;

  img {
    width: 64px;
  }

  > div {
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    align-items: center;
  }

  > strong {
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
  }
`

export const CartContent = styled.div`
  > div {
    padding-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }
`
