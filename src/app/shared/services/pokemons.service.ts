import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, EMPTY, map, Observable, tap} from 'rxjs';
import {PokemonResponce} from "../models/pokemonResponce.models";
import {environment} from 'src/environments/environment';
import {Pokemon} from "../models/pokemon.models";
import {QueryParams} from "../models/queryParams.models";

@Injectable()
export class PokemonsService {

  //p
  pokemon$ = new BehaviorSubject<Pokemon | null>(null)
  //paginator
  pokemonCount$ = new BehaviorSubject<number>(0)
  pokemonPageSize$ = new BehaviorSubject<number>(20)
  pokemonPageIndex$ = new BehaviorSubject<number>(0)

//ps
  pokemons$ = new BehaviorSubject<Pokemon[]>([])
  _pokemons: Pokemon[] = []

  //core
  isLoading$ = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) {
  }

  //p
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

  //ps
  getPokemons(params: QueryParams = {}) {
    this._pokemons = []
    this.pokemons$.next([])
    this.isLoading$.next(true)
    this.http
      .get<PokemonResponce>(`${environment.baseUrl}pokemon`, {params: {...params}})
      .pipe(
        catchError(PokemonsService.errorHandler.bind(this)),
        tap((res) => {
          this.pokemonCount$.next(res.count)
          const pageSize = params.limit ?? 20
          const pageIndex = (params.offset && params.limit)
            ? Math.ceil(params.offset / params.limit)
            : 0
          this.pokemonPageIndex$.next(pageIndex)
          this.pokemonPageSize$.next(pageSize)
        }),
        map(res => res.results.map(pok => this._addPokemon(pok.url)))
      )
      .subscribe((res) => {
        this.isLoading$.next(false)
        this.pokemons$.next(this._pokemons)

      })
  }

  _addPokemon(url: string) {
    this.http
      .get<Pokemon>(url)
      .pipe(catchError(PokemonsService.errorHandler.bind(this)))
      .subscribe(res => {
        this._pokemons.push(res)
      })
  }

//pokedox
  getPokemonById (id: number[]):Observable<Pokemon>[] {
    const result = []
    for (let i = 0; i < id.length; i++) {
      result.push(this.http.get<Pokemon>(`${environment.baseUrl}pokemon/${id[i]}`))
    }
   return result
  }


  private static errorHandler(err: HttpErrorResponse) {
    console.log(err.message, 'error')
    return EMPTY
  }


}
