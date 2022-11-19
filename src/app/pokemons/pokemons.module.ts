import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsService } from "../shared/services/pokemons.service";
import { PokemonsRoutingModule } from "./pokemons-routing.module";


@NgModule({
  declarations: [
    PokemonsComponent
  ],
  exports: [
    PokemonsComponent
  ],
  imports: [
    CommonModule, PokemonsRoutingModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonsModule {
}
