import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  form {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 2rem;
    margin-top: 2.5rem;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;

    margin-bottom: 0.875rem;
  }
`

export const SelectedCoffeesContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
