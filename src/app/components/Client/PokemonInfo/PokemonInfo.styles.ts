import styled from "styled-components"

export const StyledPokemonInfo = styled.div`
  height: 254px;
  border: ${({ theme }) => `${theme.colors.grey400} solid 1px`};
  border-radius: ${({ theme }) => `${theme.radius.rounded}`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.grey200};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

export const PokemonDetails = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.grey100};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

export const Detail = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  text-transform: capitalize;
`
