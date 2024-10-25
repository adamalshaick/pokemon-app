import styled from "styled-components"
import { Button } from ".."

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.disabledBg};
`

export const ModalContent = styled.div`
  width: 380px;
  height: 176px;
  background-color: white;
  border-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  border-radius: ${({ theme }) => `${theme.radius.rounded}`};
  box-shadow: ${({ theme }) => theme.shadows.dialog};
  font-family: var(--font-ibm-vga);
`

export const ModalHeading = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

export const ModalButton = styled.div`
  display: flex;
  justify-content: center;
`
