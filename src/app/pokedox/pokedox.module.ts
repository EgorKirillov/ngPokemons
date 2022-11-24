import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedoxComponent } from './components/pokedox/pokedox.component';
import {PokedoxRoutingModule} from "./pokedox-routing.module";



@NgModule({
  declarations: [
    PokedoxComponent
  ],
  imports: [
    CommonModule,
    PokedoxRoutingModule
  ]
})
export class PokedoxModule { }
