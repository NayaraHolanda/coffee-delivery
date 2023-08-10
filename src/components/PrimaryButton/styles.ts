import styled from 'styled-components'

export const PrimaryButtonStyled = styled.button`
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  font-size: 0.875rem;
  font-weight: bold;
  line-height: 160%;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
