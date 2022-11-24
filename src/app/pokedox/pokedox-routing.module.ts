import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokedoxComponent} from "./components/pokedox/pokedox.component";

const routes: Routes = [
  {path: 'pokedox', component: PokedoxComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedoxRoutingModule {
}
