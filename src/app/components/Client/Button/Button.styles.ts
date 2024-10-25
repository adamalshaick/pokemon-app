import { Button as BaseButton } from "@mui/base/Button"
import styled from "styled-components"
import { ButtonType } from "./Button"

export const StyledButton = styled(BaseButton)<{ variant: ButtonType["variant"] }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => `${theme.radius.rounded}`};
  background-color: ${({ variant, theme }) => (variant === "primary" ? theme.colors.primary : theme.colors.grey400)};
  color: ${({ variant }) => (variant === "primary" ? "white" : "black")};

  &:hover {
    background-color: ${({ variant, theme }) => (variant === "primary" ? theme.colors.primaryDark : theme.colors.grey300)};
  }

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.focused};
  }
`
