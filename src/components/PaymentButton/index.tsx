import React, { ReactNode } from 'react'
import { ButtonContainer, ButtonContainerSelected } from './styles'

interface PaymentButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
  children: ReactNode
}

export function PaymentButton({
  children,
  isSelected = false,
  ...props
}: PaymentButtonProps) {
  if (isSelected) {
    return (
      <ButtonContainerSelected {...props}>{children}</ButtonContainerSelected>
    )
  }

  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
