import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonCardComponent} from "./components/pokemon-card/pokemon-card.component";
import {MatCardModule} from "@angular/material/card";
import {RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [PokemonCardComponent],
  exports:[PokemonCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterLinkWithHref,

  ]
})
export class SharedModule { }
