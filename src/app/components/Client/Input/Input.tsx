"use client"

import React, { FC } from "react"
import { StyledInput, StyledLabel } from "./Input.styles"
import { FormControl } from "@mui/base"
import { UseFormRegister } from "react-hook-form"

type InputType = {
  id: "textInput" | "numberInput"
  label: string
  placeholder: string
  type: "text" | "number"
  register: UseFormRegister<{
    textInput: string
    numberInput: number
    selectInput: string
  }>
}

export const Input: FC<InputType> = (props) => {
  const { label, placeholder, type, register, id } = props

  return (
    <FormControl>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput id={id} {...register(id)} placeholder={placeholder} type={type} />
    </FormControl>
  )
}
