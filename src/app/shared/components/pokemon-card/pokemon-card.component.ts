import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from "../../models/pokemon.models";
import {PokedoxService} from "../../services/pokedox.service";

@Component({
  selector: 'pk-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!: Pokemon
  @Input() inPokedox!: boolean | null

  types:string =""
  constructor(private pokedoxservice:PokedoxService) { }

  getTypes(pokemonTypes: PokemonType[]): string {
    return pokemonTypes.map(t=>t.type.name).join(' ')
  }

  ngOnInit(): void {
    this.types=this.getTypes(this.pokemon.types)
  }

  removeFromPokedox(id: number) {
    this.pokedoxservice.removeFromPokedox(id)
  }

  addToPokedox(id: number) {
    this.pokedoxservice.addInPokedox(id)
  }
}
