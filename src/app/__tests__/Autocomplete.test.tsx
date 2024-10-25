import React from "react"
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { Autocomplete } from "../components/Client"
import { ThemeProvider } from "styled-components"
import theme from "@/app/styles/theme"
import { useRouter, useSearchParams } from "next/navigation"

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn()
}))

global.fetch = jest.fn()

describe("Autocomplete Component", () => {
  const mockPush = jest.fn()
  const mockRegister = jest.fn()
  const mockSetValue = jest.fn()
  const mockTrigger = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush
    })
    ;(useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn()
    })
    ;(fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        data: [
          { name: "pikachu", id: "25" },
          { name: "bulbasaur", id: "1" }
        ]
      })
    })
  })

  const renderComponent = () =>
    render(
      <ThemeProvider theme={theme}>
        <Autocomplete isLoading={false} label="Pokemon name" placeholder="Choose" pokemonName="" id="selectInput" register={mockRegister} setValue={mockSetValue} trigger={mockTrigger} />
      </ThemeProvider>
    )

  test("renders correctly", () => {
    renderComponent()

    expect(screen.getByText("Pokemon name")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Choose")).toBeInTheDocument()
  })

  test("fetches and displays options when typing", async () => {
    renderComponent()

    fireEvent.change(screen.getByPlaceholderText("Choose"), {
      target: { value: "pi" }
    })

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("/api/search?q=pi", expect.any(Object))
    })

    await waitFor(() => {
      expect(screen.getByText("pikachu")).toBeInTheDocument()
      expect(screen.getByText("bulbasaur")).toBeInTheDocument()
    })
  })

  test("selects an option when clicked", async () => {
    renderComponent()

    fireEvent.change(screen.getByPlaceholderText("Choose"), {
      target: { value: "pi" }
    })

    await waitFor(() => {
      expect(screen.getByText("pikachu")).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText("pikachu"))

    expect(mockSetValue).toHaveBeenCalledWith("selectInput", "pikachu")
    expect(mockTrigger).toHaveBeenCalledWith("selectInput")
    expect(mockPush).toHaveBeenCalledWith("?pokemon=pikachu")
  })
})
