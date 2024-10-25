"use client"

import React, { FC, useCallback, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { DropdownItem, Loader, StyledAutocomplete, StyledDropdown, StyledFormControl, StyledLabel } from "./Autocomplete.styles"
import { useDebounceCallback } from "usehooks-ts"
import { UseFormRegister, UseFormSetValue, UseFormTrigger } from "react-hook-form"
import Image from "next/image"

type AutocompleteType = {
  isLoading: boolean
  label: string
  placeholder: string
  pokemonName: string
  id: "selectInput"
  register: UseFormRegister<{
    textInput: string
    numberInput: number
    selectInput: string
  }>
  setValue: UseFormSetValue<{
    textInput: string
    numberInput: number
    selectInput: string
  }>
  trigger: UseFormTrigger<{
    selectInput: string
    textInput: string
    numberInput: number
  }>
}

export const Autocomplete: FC<AutocompleteType> = (props) => {
  const { label, placeholder, id, register, setValue, trigger, pokemonName, isLoading } = props

  const [pokemons, setPokemons] = useState<{ name: string; id: string }[]>([])
  const [pokemon, setPokemon] = useState(pokemonName)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const pokemonQuery = searchParams.get("pokemon")
    setPokemon(pokemonQuery || "")
  }, [searchParams])

  const handleOptionSelect = (value: string) => {
    router.push(`?pokemon=${value}`)
    setPokemon(value)
    setValue(id, value)
    trigger(id)
    setDropdownOpen(false)
  }

  const fetchPokemons = useCallback(async (params: string) => {
    const response = await fetch(`/api/search?q=${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data: {
      data: {
        name: string
        id: string
      }[]
    } = await response.json()
    return data
  }, [])

  const handleSearch = useCallback(
    async (value: string) => {
      setDropdownOpen(true)
      const data = await fetchPokemons(value)
      setPokemons(data.data)
    },
    [fetchPokemons]
  )

  const debouncedSearch = useDebounceCallback(handleSearch, 500)

  return (
    <StyledFormControl>
      <StyledLabel>{label}</StyledLabel>
      <div>
        <StyledAutocomplete
          value={pokemon}
          onClick={() => setDropdownOpen((prev) => !prev)}
          onChange={(e) => {
            setPokemon(e.currentTarget.value)
            debouncedSearch(e.currentTarget.value)
          }}
          placeholder={placeholder}
        />
        {isLoading ? <Loader src="/loader.svg" alt="Loading" width={17} height={17} /> : null}
      </div>
      {pokemons.length && dropdownOpen ? (
        <StyledDropdown id={id} {...register("selectInput")}>
          {pokemons.map((pokemon) => (
            <DropdownItem onClick={() => handleOptionSelect(pokemon.name)} key={pokemon.id} value={pokemon.name}>
              {pokemon.name}
            </DropdownItem>
          ))}
        </StyledDropdown>
      ) : null}
      <input type="hidden" {...register(id)} />
    </StyledFormControl>
  )
}
