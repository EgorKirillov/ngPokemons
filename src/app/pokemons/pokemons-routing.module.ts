import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  // {  path: '',  component: PokemonsComponent, pathMatch: 'full'},
  {path: 'pokemons', component: PokemonsComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule {
}
