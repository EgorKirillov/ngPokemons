import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsService } from "../shared/services/pokemons.service";
import { PokemonsRoutingModule } from "./pokemons-routing.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatProgressBarModule } from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    PokemonsComponent
  ],
  exports: [
    PokemonsComponent
  ],
  imports: [
    CommonModule, PokemonsRoutingModule, MatPaginatorModule, MatTableModule, MatProgressBarModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonsModule {
}
