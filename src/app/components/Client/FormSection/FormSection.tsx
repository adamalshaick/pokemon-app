"use client"

import React, { FC, useEffect, useState } from "react"
import { ButtonsWrapper, ErrorMessage, InputsWrapper, StyledFormSection } from "./FormSection.styles"
import { Autocomplete, Button, Date, Input, PokemonInfo, SuccessModal } from ".."
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { fetchPokemon } from "@/app/lib/pokemonService"
import { useRouter } from "next/navigation"

const validationSchema = Yup.object({
  textInput: Yup.string().min(2, "Required from 2 to 20 symbols").max(20, "Required from 2 to 20 symbols").required("Required from 2 to 20 symbols"),
  numberInput: Yup.number()
    .transform((value, originalValue) => (originalValue.trim() === "" ? null : value))
    .nullable()
    .min(16, "Required range from 16-99")
    .max(99, "Required range from 16-99")
    .required("Required range from 16-99"),
  selectInput: Yup.string().required("Choose something")
})

type FormSectionType = {
  currentDate: string
}

export const FormSection: FC<FormSectionType> = ({ currentDate }) => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })
  const [pokemonName, setPokemonName] = useState("")
  const [successModal, setSuccessModal] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const pokemonQuery = searchParams.get("pokemon")
    if (pokemonQuery) {
      setValue("selectInput", pokemonQuery)
      trigger("selectInput")
    }
    setPokemonName(pokemonQuery || "")
  }, [setValue, trigger, searchParams])

  const onSubmit = () => {
    setSuccessModal(true)
  }

  const onReset = () => {
    setSuccessModal(false)
    reset({
      textInput: "",
      numberInput: undefined,
      selectInput: ""
    })
    setValue("textInput", "")
    const params = new URLSearchParams(searchParams)
    params.delete("pokemon")
    const newUrl = `${window.location.pathname}?${params.toString()}`
    router.replace(newUrl)

    // React hook form kept stale data - I couldn't find a better way to ensure reset
    setTimeout(() => {
      window.location.href = newUrl
    }, 0)
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemon", pokemonName],
    queryFn: () => fetchPokemon(pokemonName),
    enabled: !!pokemonName
  })

  if (error) return <p>Error fetching Pokémon data: {error.message}</p>

  return (
    <>
      {successModal ? <SuccessModal onReset={onReset} /> : null}
      <StyledFormSection>
        <Date currentDate={currentDate} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputsWrapper>
            <div>
              <Input id="textInput" register={register} label="Trainer's name" placeholder="Trainer's name" type="text" />
              {errors.textInput && <ErrorMessage>{errors.textInput.message}</ErrorMessage>}
            </div>
            <div>
              <Input id="numberInput" register={register} label="Trainer's age" placeholder="Trainer's age" type="number" />
              {errors.numberInput && <ErrorMessage>{errors.numberInput.message}</ErrorMessage>}
            </div>
          </InputsWrapper>
          <div>
            <Autocomplete isLoading={isLoading} id="selectInput" register={register} trigger={trigger} setValue={setValue} label="Pokemon name" placeholder="Choose" pokemonName={pokemonName} />
            {errors.selectInput && <ErrorMessage>{errors.selectInput.message}</ErrorMessage>}
          </div>
          <PokemonInfo data={data} />
          <ButtonsWrapper>
            <Button onClick={onReset} type="button" variant="soft" label="Reset" />
            <Button type="submit" variant="primary" label="Submit" />
          </ButtonsWrapper>
        </form>
      </StyledFormSection>
    </>
  )
}
