import styled from 'styled-components'

export const SecondaryButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 0 0.5rem;

  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme.purple};
  }
`
