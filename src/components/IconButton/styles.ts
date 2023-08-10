import styled from 'styled-components'

export const IconButtonStyled = styled.button`
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  line-height: 0;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
