"use client"

import { FC } from "react"
import { DateWrapper } from "./Date.styles"

type DateType = {
  currentDate: string
}

export const Date: FC<DateType> = ({ currentDate }) => {
  return <DateWrapper>{currentDate}</DateWrapper>
}
