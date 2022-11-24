import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Pokemon} from "../../../shared/models/pokemon.models";
import {PokemonsService} from "../../../shared/services/pokemons.service";
import {PokedoxService} from "../../../shared/services/pokedox.service";

@Component({
  selector: 'pk-pokedox',
  templateUrl: './pokedox.component.html',
  styleUrls: ['./pokedox.component.scss']
})
export class PokedoxComponent implements OnInit {

  pokemons$!: Observable<Pokemon>[]
  pokedox$!: Observable<number[]>

  constructor(private pokemonsService:PokemonsService, private pokedoxService:PokedoxService) {
    this.pokedox$ = this.pokedoxService.pokedox$

    this.pokemons$=this.pokemonsService.getPokemonById(this.pokedoxService.pokedox$.getValue())
  }

  ngOnInit(): void {
  }

}
