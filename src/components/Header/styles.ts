import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding-bottom: 2rem;
`

export const Nav = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`

export const Local = styled.div`
  display: flex;
  align-items: center;

  border-radius: 6px;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  padding: 0.5rem;

  gap: 0.25rem;

  line-height: 0;

  user-select: none;

  span {
    color: ${(props) => props.theme.purple};
  }
`
