export const fetchPokemon = async (pokemonName: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_POKEMON_API_URL}/${pokemonName}`)
  if (!response.ok) {
    throw new Error("Pokemon not found")
  }
  return response.json()
}
