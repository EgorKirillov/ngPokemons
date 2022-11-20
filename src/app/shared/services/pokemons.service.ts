import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, EMPTY, tap } from 'rxjs';
import { PokemonResponce } from "../models/pokemonResponce.models";
import { environment } from 'src/environments/environment';
import { PokemonSpecies } from "../models/pokemonSpecies.models";
import { Pokemon } from "../models/pokemon.models";
import { UriParams } from "../models/uriParams.models";

@Injectable()
export class PokemonsService {

  pokemonSpecies$ = new BehaviorSubject<PokemonSpecies[]>([])
  pokemon$ = new BehaviorSubject<Pokemon | null>(null)

  pokemonCount$ = new BehaviorSubject<number>(0)

  pokemonPageSize$ = new BehaviorSubject<number>(20)
  pokemonPageIndex$ = new BehaviorSubject<number>(1)
  isLoading$ = new BehaviorSubject<boolean>(false)
  nextUrl?: string | null
  previosUrl?: string | null


  getPokemons( params: UriParams = {}) {
    this.isLoading$.next(true)
    this.http
      .get<PokemonResponce>(`${environment.baseUrl}pokemon`, {params: {...params}})
      .pipe(
        catchError(PokemonsService.errorHandler.bind(this)),
        tap((res) => {
          this.nextUrl = res.next
          this.previosUrl = res.previous
        })
      )
      .subscribe(res => {
        const pageSize = params.limit ?? 20
        const pageIndex = (params.offset && params.limit) ? params.offset/params.limit : 1
        this.pokemonSpecies$.next(res.results)
        this.pokemonCount$.next(res.count)
        this.pokemonPageIndex$.next(pageIndex)
        this.pokemonPageSize$.next(pageSize)
        this.isLoading$.next(false)
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
