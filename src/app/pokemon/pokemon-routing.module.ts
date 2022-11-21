import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from "./pokemon/pokemon.component";

const routes: Routes = [{  path: 'pokemons/:id',  component: PokemonComponent,},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
