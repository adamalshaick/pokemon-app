import styled from "styled-components"

export const StyledLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radius.roundedLarge};
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.xs};
  margin-left: ${({ theme }) => theme.spacing.xs};
  text-transform: capitalize;
`
