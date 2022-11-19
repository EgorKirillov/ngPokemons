import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonsService } from "../shared/services/pokemons.service";



@NgModule({
  declarations: [
    PokemonComponent
  ],
  exports: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonModule { }
