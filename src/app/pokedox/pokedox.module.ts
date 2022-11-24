import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedoxComponent } from './components/pokedox/pokedox.component';
import {PokedoxRoutingModule} from "./pokedox-routing.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    PokedoxComponent
  ],
  imports: [
    CommonModule,
    PokedoxRoutingModule,
    SharedModule
  ]
})
export class PokedoxModule { }
