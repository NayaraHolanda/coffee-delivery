import { styled } from 'styled-components'

export const CheckoutFormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FormContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  padding: 2.5rem;

  width: 640px;
  max-width: 640px;

  display: flex;
  flex-direction: column;

  gap: 2rem;
`

export const FormLegend = styled.div<{ color: string }>`
  display: flex;
  align-items: flex-start;

  gap: 0.5rem;

  color: ${(props) => props.theme['base-subtitle']};

  i {
    color: ${(props) => props.theme[props.color]};
  }

  span {
    color: ${(props) => props.theme['base-text']};

    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  > div {
    display: flex;

    gap: 0.75rem;
  }
`

export const InputText = styled.input`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  border: 0;
  border-radius: 4px;
  padding: 0.75rem;

  font-size: 0.875rem;
  line-height: 130%;

  width: 100%;

  &:focus {
    box-shadow: none;
    border: 0.5px solid ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const ZipCodeInput = styled(InputText)`
  min-width: 200px;
  max-width: 200px;
`

export const NumberInput = styled(InputText)`
  min-width: 200px;
  max-width: 200px;
`

export const ComplementInput = styled(InputText)`
  max-width: 348px;
`

export const NeighborhoodInput = styled(InputText)`
  min-width: 200px;
  max-width: 200px;
`

export const CityInput = styled(InputText)`
  max-width: 276px;
`

export const StateInput = styled(InputText)`
  max-width: 60px;
`

export const ContainerRadioInput = styled.div`
  display: flex;
`

export const RadioInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    box-shadow: none;
  }
`

export const LabelRadioInput = styled.label`
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 0;

  padding: 1rem;

  flex: 1;
  display: flex;
  align-items: center;

  gap: 0.75rem;

  cursor: pointer;
  user-select: none;

  &:not(:nth-child(2)) {
    margin-left: 0.75rem;
  }

  i {
    color: ${(props) => props.theme.purple};
    line-height: 0;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  ${RadioInput}:checked + & {
    background: ${(props) => props.theme['purple-light']};
    border: 0.5px ${(props) => props.theme.purple} solid;
  }
`
