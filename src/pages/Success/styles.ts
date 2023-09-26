import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  padding: 5rem 0;

  img {
    width: 100%;
    max-width: 492px;
    height: auto;
  }
`

export const SuccessInformation = styled.div`
  h2 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 0.25rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const SuccessInformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  margin-top: 2.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid transparent;
    background: ${(props) =>
      `linear-gradient(45deg, ${props.theme.yellow}, ${props.theme.purple}) border-box`};
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  div:first-child {
    i {
      background: ${(props) => props.theme.purple};
    }
  }

  div:nth-child(2) {
    i {
      background: ${(props) => props.theme.yellow};
    }
  }

  div:nth-child(3) {
    i {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  div {
    i {
      color: ${(props) => props.theme.white};
      border-radius: 1000px;
      padding: 0.5rem;
      line-height: 0;
    }

    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 1rem;
    }
  }
`
