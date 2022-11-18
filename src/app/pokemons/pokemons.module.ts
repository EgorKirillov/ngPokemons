import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsService } from "./services/pokemons.service";


@NgModule({
  declarations: [
    PokemonsComponent
  ],
  exports: [
    PokemonsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonsModule {
}
