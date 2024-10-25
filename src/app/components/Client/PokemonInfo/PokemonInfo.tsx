"use client"

import React from "react"
import { Detail, PokemonDetails, StyledPokemonInfo } from "./PokemonInfo.styles"
import Image from "next/image"
import { Label } from ".."

type PokemonInfoType = {
  data: {
    sprites: {
      front_default: string
    }
    name: string
    types: {
      slot: number
      type: {
        name: string
      }
    }[]
    base_experience: string
    id: string
  }
}

export const PokemonInfo: React.FC<PokemonInfoType> = ({ data }) => {
  return (
    <StyledPokemonInfo>
      {data ? (
        <PokemonDetails>
          <Image width={194} height={196} src={data?.sprites?.front_default} alt={data.name} />
          <div>
            <Detail>Name: {data.name}</Detail>
            <Detail>
              Type:{" "}
              {data.types.map((type) => (
                <Label key={type.slot} text={type.type.name} />
              ))}
            </Detail>
            <Detail>Base experience: {data.base_experience}</Detail>
            <Detail>id: {data.id}</Detail>
          </div>
        </PokemonDetails>
      ) : (
        "Your Pokemon"
      )}
    </StyledPokemonInfo>
  )
}
