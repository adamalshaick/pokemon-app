import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { SuccessModal } from "../components/Client"
import { ThemeProvider } from "styled-components"
import theme from "@/app/styles/theme"

describe("SuccessModal Component", () => {
  const mockOnReset = jest.fn()

  const renderComponent = () =>
    render(
      <ThemeProvider theme={theme}>
        <SuccessModal onReset={mockOnReset} />
      </ThemeProvider>
    )

  test("renders correctly", () => {
    const { getByText } = renderComponent()

    expect(getByText("Success")).toBeInTheDocument()
    expect(getByText("Reset form")).toBeInTheDocument()
  })

  test('calls onReset when "Reset form" button is clicked', () => {
    const { getByText } = renderComponent()

    fireEvent.click(getByText("Reset form"))

    expect(mockOnReset).toHaveBeenCalledTimes(1)
  })
})
