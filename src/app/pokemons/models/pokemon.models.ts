import { PokemonSpecies } from "./pokemonSpecies.models";
import { PokemonSprites } from "./pokemonSprites.models";

export interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number //in decimeters
  is_default: boolean
  order: number
  weight: number // in hectograms (*100gr)
  // abilities: PokemonAbility[]
  // forms: PokemonForm[]
  // game_indices: VersionGameIndex[]
  // held_items: PokemonHeldItem[]
  location_area_encounters: string
  // moves: PokemonMove[]
  species:PokemonSpecies
  sprites: PokemonSprites
  // stats: PokemonStat[]
  // types: PokemonType[]
  // past_types: PokemonTypePast[]
}
