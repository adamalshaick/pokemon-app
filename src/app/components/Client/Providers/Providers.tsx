"use client"

import { ThemeProvider } from "styled-components"
import StyledComponentsRegistry from "@/app/styles/registry"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import theme from "@/app/styles/theme"
import { useState } from "react"

const Providers = (props: React.PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <StyledComponentsRegistry>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </QueryClientProvider>
    </StyledComponentsRegistry>
  )
}

export default Providers
