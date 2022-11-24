import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonsComponent} from './pokemons/pokemons.component';
import {PokemonsService} from "../shared/services/pokemons.service";
import {PokemonsRoutingModule} from "./pokemons-routing.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PokemonsComponent,
  ],
  exports: [
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
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
