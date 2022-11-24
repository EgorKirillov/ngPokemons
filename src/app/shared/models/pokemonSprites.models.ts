
export interface PokemonSprites {
  front_default:string  | null
  front_shiny:string  | null
  front_female:string
  front_shiny_female:string
  back_default:string
  back_shiny:string
  back_female:string
  back_shiny_female:string
  other:{
    dream_world:{
      front_default:string
      front_female:string | null
    }
    home:{
      front_default: string
      front_female: string | null
      front_shiny: string
      front_shiny_female: string | null
    }
    'official-artwork':{
      front_default: string
    }

  }

}
