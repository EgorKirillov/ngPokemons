import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, EMPTY } from 'rxjs';
import { PokemonResponce } from "../models/pokemonResponce.models";
import { environment } from 'src/environments/environment';
import { PokemonSpecies } from "../models/pokemonSpecies.models";
import { Pokemon } from "../models/pokemon.models";

@Injectable()
export class PokemonsService {

  pokemonSpecies$ = new BehaviorSubject<PokemonSpecies[]>([])
  pokemon$ = new BehaviorSubject<Pokemon | null>(null)

  getPokemons() {
    this.http
      .get<PokemonResponce>(`${environment.baseUrl}pokemon`)
      .pipe(catchError(PokemonsService.errorHandler.bind(this)))
      .subscribe(res => {
        this.pokemonSpecies$.next(res.results)
      })
  }

  //https://pokeapi.co/api/v2/pokemon/{id or name}/
  getPokemon(id: string = '') {
    this.http
      .get<Pokemon>(`${environment.baseUrl}pokemon/${id}`)
      .pipe(catchError(PokemonsService.errorHandler.bind(this)))
      .subscribe(res => {
        this.pokemon$.next(res)
      })
  }

  resetPokemon() {
    this.pokemon$.next(null)
  }

  private static errorHandler(err: HttpErrorResponse) {
    console.log(err.message, 'error')
    return EMPTY
  }


  constructor(private http: HttpClient) {
  }
}
