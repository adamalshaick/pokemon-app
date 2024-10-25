export const fetchPokemon = async (pokemonName: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  if (!response.ok) {
    throw new Error("Pokemon not found")
  }
  return response.json()
}
