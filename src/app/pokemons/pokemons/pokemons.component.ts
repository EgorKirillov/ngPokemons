import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PokemonsService } from "../../shared/services/pokemons.service";
import { PageEvent } from "@angular/material/paginator";
import { Pokemon } from 'src/app/shared/models/pokemon.models';
import { QueryParams } from "../../shared/models/queryParams.models";

@Component({
  selector: 'pk-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemons$!: Observable<Pokemon[]>
  pokemonsCount$!: Observable<number>
  pokemonPageSize$!: Observable<number>
  pokemonPageIndex$!: Observable<number>
  isLoading$!: Observable<boolean>

  pageSizeOptions = [5, 10, 20, 50];
  showFirstLastButtons = true;


  handlePageEvent(event: PageEvent) {
    const params: QueryParams = {limit: event.pageSize, offset: event.pageIndex * event.pageSize}
    this.pokemonsService.getPokemons(params)
  }

  constructor(private pokemonsService: PokemonsService) {
    this.pokemonPageIndex$ = this.pokemonsService.pokemonPageIndex$  }

  ngOnInit(): void {
    this.pokemons$ = this.pokemonsService.pokemons$

    this.pokemonsCount$ = this.pokemonsService.pokemonCount$
    this.pokemonPageSize$ = this.pokemonsService.pokemonPageSize$

    this.isLoading$ = this.pokemonsService.isLoading$

  }
}
