import { ButtonHTMLAttributes } from 'react'
import { PrimaryButtonStyled } from './styles'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function PrimaryButton({ text, ...props }: PrimaryButtonProps) {
  return <PrimaryButtonStyled {...props}>{text}</PrimaryButtonStyled>
}
