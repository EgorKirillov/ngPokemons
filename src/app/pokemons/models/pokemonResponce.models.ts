import { PokemonSpecies } from "./pokemonSpecies.models";

export interface PokemonResponce {
  count: number
  next: string // next page
  previous: string | null
  results: PokemonSpecies[]
}
