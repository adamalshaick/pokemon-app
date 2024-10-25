"use client"

import React, { FC } from "react"
import { StyledButton } from "./Button.styles"

export type ButtonType = {
  variant: "primary" | "soft"
  label: string
  type: "submit" | "button"
  onClick?: () => void
}

export const Button: FC<ButtonType> = ({ variant, label, type, onClick }) => {
  return (
    <StyledButton onClick={onClick} variant={variant} type={type}>
      {label}
    </StyledButton>
  )
}
