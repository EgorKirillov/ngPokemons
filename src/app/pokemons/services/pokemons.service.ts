import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, EMPTY } from 'rxjs';
import { PokemonResponce } from "../models/pokemonResponce.models";
import { environment } from 'src/environments/environment';
import { PokemonSpecies } from "../models/pokemonSpecies.models";

@Injectable()
export class PokemonsService {

  PokemonSpecies$ = new BehaviorSubject<PokemonSpecies[]>([])


  getPokemons() {
    this.http
      .get<PokemonResponce>(`${environment.baseUrl}pokemon`)
      .pipe(catchError(PokemonsService.errorHandler.bind(this)))
      .subscribe(res => {
        this.PokemonSpecies$.next(res.results)
      })
  }
  private static errorHandler(err: HttpErrorResponse) {
    console.log(err.message, 'error')
    return EMPTY
  }


  constructor(private http: HttpClient) { }
}
