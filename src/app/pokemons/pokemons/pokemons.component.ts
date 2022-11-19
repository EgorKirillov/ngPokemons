import { Component, OnInit } from '@angular/core';
import { PokemonSpecies } from "../models/pokemonSpecies.models";
import { Observable, Subscription } from "rxjs";
import { PokemonsService } from "../../shared/services/pokemons.service";

@Component({
  selector: 'pk-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemonsSubscr!: Subscription
  pokemons$!: Observable<PokemonSpecies[]>

  constructor(private pokemonsService: PokemonsService) {  }

  ngOnInit(): void {
    this.pokemons$ = this.pokemonsService.PokemonSpecies$
  }


}
