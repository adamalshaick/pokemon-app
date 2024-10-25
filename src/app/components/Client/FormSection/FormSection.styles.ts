import styled from "styled-components"

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xxxs};
`

export const StyledFormSection = styled.section`
  border: ${({ theme }) => `${theme.colors.grey400} solid 1px`};
  border-radius: ${({ theme }) => `${theme.radius.rounded}`};
  padding: ${({ theme }) => theme.spacing.xxl};
  max-width: 546px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const InputsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`
