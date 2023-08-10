import styled from 'styled-components'

export const CartButtonStyled = styled.button`
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  line-height: 0;

  cursor: pointer;
`
