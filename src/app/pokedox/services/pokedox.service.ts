import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {PokemonsService} from "../../shared/services/pokemons.service";
import {Pokemon} from "../../shared/models/pokemon.models";

@Injectable({
  providedIn: 'root'
})
export class PokedoxService {

  constructor(private pokemonsService: PokemonsService) {
  }

  // pokedox$ = new BehaviorSubject<Pokemon[]>([])
  pokedox: Pokemon[] = []

  addInPokedox(pokemon: Pokemon) {
    this.pokedox = [...this.pokedox, pokemon]
  }

  removeFromPokedox(id: number) {
    this.pokedox = this.pokedox.filter(p => p.id !== id)
  }

}
