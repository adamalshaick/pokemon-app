import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { FormSection } from "../components/Client"
import "@testing-library/jest-dom"
import { useRouter, useSearchParams } from "next/navigation"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import theme from "@/app/styles/theme"
import { ThemeProvider } from "styled-components"

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn()
}))

const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>
const mockUseSearchParams = useSearchParams as jest.MockedFunction<typeof useSearchParams>

beforeEach(() => {
  mockUseRouter.mockReturnValue({
    push: jest.fn(),
    replace: jest.fn()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)

  mockUseSearchParams.mockReturnValue({
    get: jest.fn().mockReturnValue("defaultParam")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)
})

describe("FormSection Component", () => {
  test("renders the form with inputs and buttons", () => {
    const queryClient = new QueryClient()
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <FormSection currentDate="2023-10-20" />
        </ThemeProvider>
      </QueryClientProvider>
    )

    expect(screen.getByLabelText("Trainer's name")).toBeInTheDocument()
    expect(screen.getByLabelText("Trainer's age")).toBeInTheDocument()
    expect(screen.getByText("Submit")).toBeInTheDocument()
    expect(screen.getByText("Reset")).toBeInTheDocument()
  })

  test("handles form submission", async () => {
    const queryClient = new QueryClient()
    const { getByLabelText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <FormSection currentDate="2023-10-20" />
        </ThemeProvider>
      </QueryClientProvider>
    )

    fireEvent.change(getByLabelText("Trainer's name"), { target: { value: "Ash" } })
    fireEvent.change(getByLabelText("Trainer's age"), { target: { value: 20 } })

    fireEvent.click(getByText("Submit"))

    await waitFor(() => expect(screen.getByText("Success")).toBeInTheDocument())
  })
})
