import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsService } from "../shared/services/pokemons.service";
import { PokemonsRoutingModule } from "./pokemons-routing.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonCardComponent
  ],
  exports: [
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonsModule {
}
