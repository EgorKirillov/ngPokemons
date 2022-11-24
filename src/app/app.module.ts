import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PokemonsModule } from "./pokemons/pokemons.module";
import { PokemonModule } from "./pokemon/pokemon.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PokedoxModule} from "./pokedox/pokedox.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonsModule,
    PokemonModule,
    PokedoxModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
