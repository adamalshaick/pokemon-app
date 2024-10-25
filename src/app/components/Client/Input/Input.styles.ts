import { Input } from "@mui/base"
import styled from "styled-components"

export const StyledInput = styled(Input)`
  & input {
    font-family: var(--font-ibm-vga);
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: ${({ theme }) => theme.spacing.sm};
    margin-top: ${({ theme }) => theme.spacing.xxxs};
    border: ${({ theme }) => `${theme.colors.grey400} solid 1px`};
    border-radius: ${({ theme }) => `${theme.radius.rounded}`};
    width: 228px;
    height: 48px;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &:focus {
      outline: none;
      box-shadow: ${({ theme }) => theme.shadows.focused};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
`
