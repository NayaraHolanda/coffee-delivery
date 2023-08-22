import { styled } from 'styled-components'

export const AmountContainer = styled.div`
  background: ${(props) => props.theme['base-button']};

  padding: 0.5rem;

  border-radius: 6px;
  display: flex;
  align-items: center;

  gap: 0.5rem;
`

export const Amount = styled.span`
  color: ${(props) => props.theme['base-title']};
  line-height: 100%;
`

export const AmountButton = styled.button`
  background: transparent;
  color: ${(props) => props.theme.purple};

  border: 0;
  line-height: 0;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
