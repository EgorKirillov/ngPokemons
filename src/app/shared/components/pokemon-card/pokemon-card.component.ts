import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from "../../models/pokemon.models";

@Component({
  selector: 'pk-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!: Pokemon
  types:string =""
  constructor() { }

  getTypes(pokemonTypes: PokemonType[]): string {
    return pokemonTypes.map(t=>t.type.name).join(' ')
  }

  ngOnInit(): void {
    this.types=this.getTypes(this.pokemon.types)
  }

}
