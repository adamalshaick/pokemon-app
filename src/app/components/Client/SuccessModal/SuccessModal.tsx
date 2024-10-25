"use client"

import React from "react"
import { ModalButton, ModalContent, ModalHeading, ModalWrapper } from "./SuccessModal.styles"
import { createPortal } from "react-dom"
import { Button } from ".."

type SuccessModalType = {
  onReset: () => void
}

export const SuccessModal: React.FC<SuccessModalType> = ({ onReset }) => {
  return (
    <>
      {createPortal(
        <ModalWrapper>
          <ModalContent>
            <div>
              <ModalHeading>Success</ModalHeading>
              <ModalButton>
                <Button onClick={onReset} variant="primary" type="button" label="Reset form" />
              </ModalButton>
            </div>
          </ModalContent>
        </ModalWrapper>,
        document.body
      )}
    </>
  )
}
