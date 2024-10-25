"use client"

import { FC } from "react"
import { StyledLabel } from "./Label.styles"

type LabelType = {
  text: string
}

export const Label: FC<LabelType> = (props) => {
  const { text } = props

  return <StyledLabel>{text}</StyledLabel>
}
