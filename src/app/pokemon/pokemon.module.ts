import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonsService } from "../shared/services/pokemons.service";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    PokemonComponent
  ],
  exports: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonModule { }
