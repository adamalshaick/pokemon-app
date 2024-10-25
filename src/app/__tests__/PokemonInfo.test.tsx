import React from "react"
import { render, screen } from "@testing-library/react"
import { PokemonInfo } from "../components/Client"
import { ThemeProvider } from "styled-components"
import theme from "@/app/styles/theme"

describe("PokemonInfo Component", () => {
  const renderComponent = (data: any) =>
    render(
      <ThemeProvider theme={theme}>
        <PokemonInfo data={data} />
      </ThemeProvider>
    )

  test("renders correctly when data is provided", () => {
    const mockData = {
      sprites: { front_default: "/path/to/image.png" },
      name: "pikachu",
      types: [
        { slot: 1, type: { name: "electric" } },
        { slot: 2, type: { name: "speedster" } }
      ],
      base_experience: "112",
      id: "25"
    }

    renderComponent(mockData)

    expect(screen.getByAltText("pikachu")).toBeInTheDocument()
    expect(screen.getByText("Name: pikachu")).toBeInTheDocument()
    expect(screen.getByText("Base experience: 112")).toBeInTheDocument()
    expect(screen.getByText("id: 25")).toBeInTheDocument()
    expect(screen.getByText("Type:")).toBeInTheDocument()
    expect(screen.getByText("electric")).toBeInTheDocument()
    expect(screen.getByText("speedster")).toBeInTheDocument()
  })

  test('renders "Your Pokemon" when no data is provided', () => {
    renderComponent(undefined)

    expect(screen.getByText("Your Pokemon")).toBeInTheDocument()
  })
})
