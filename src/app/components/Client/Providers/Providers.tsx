"use client"

import { ThemeProvider } from "styled-components"
import StyledComponentsRegistry from "@/app/styles/registry"
import theme from "@/app/styles/theme"

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default Providers
