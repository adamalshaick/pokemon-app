import { FormControl } from "@mui/base"
import Image from "next/image"
import styled, { keyframes } from "styled-components"

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const StyledFormControl = styled(FormControl)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  position: relative;
`

export const StyledAutocomplete = styled.input`
  font-family: var(--font-ibm-vga);
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xxxs};
  border: ${({ theme }) => `${theme.colors.grey400} solid 1px`};
  border-radius: ${({ theme }) => `${theme.radius.rounded}`};
  width: 100%;
  height: 48px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.focused};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
`

export const StyledDropdown = styled.ul`
  box-shadow: ${({ theme }) => theme.shadows.dialog};
  border-radius: ${({ theme }) => `${theme.radius.rounded}`};
  position: absolute;
  width: 100%;
  background-color: white;
`

export const DropdownItem = styled.li`
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`

export const Loader = styled(Image)`
  position: absolute;
  right: calc(${({ theme }) => `(${theme.spacing.lg} + ${theme.spacing.xxxs})`});
  top: 50%;
  animation: ${spin} 2s linear infinite;
`

export const ArrowIcon = styled(Image)`
  position: absolute;
  right: calc(${({ theme }) => `(${theme.spacing.lg} + ${theme.spacing.xxxs})`});
  top: 50%;
`
