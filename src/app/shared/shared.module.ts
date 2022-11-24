import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonCardComponent} from "./components/pokemon-card/pokemon-card.component";
import {MatCardModule} from "@angular/material/card";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [PokemonCardComponent, HeaderComponent],
  exports: [PokemonCardComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterLinkWithHref,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLinkActive,
    MatButtonModule,

  ]
})
export class SharedModule { }
