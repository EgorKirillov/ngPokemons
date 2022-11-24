import { Component, OnDestroy, OnInit } from '@angular/core';
import {map, Observable, Subscription} from "rxjs";
import { PokemonsService } from "../../shared/services/pokemons.service";
import { PageEvent } from "@angular/material/paginator";
import { Pokemon } from 'src/app/shared/models/pokemon.models';
import { QueryParams } from "../../shared/models/queryParams.models";
import { ActivatedRoute, Params, Router } from "@angular/router";
import {PokedoxService} from "../../shared/services/pokedox.service";

@Component({
  selector: 'pk-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {

  queryParamSubscr!: Subscription

  pokemons$!: Observable<Pokemon[]>

  pokemonsCount$!: Observable<number>
  pokemonPageSize$!: Observable<number>
  pokemonPageIndex$!: Observable<number>

  isLoading$!: Observable<boolean>

  pageSizeOptions = [5, 10, 20, 50];

  pokedox$!:Observable<number[]>

  inPokedox(id:number):Observable<boolean> {
    return this.pokedox$.pipe(map(pokedox=>pokedox.findIndex(pokedox=>id===pokedox)>-1))
  }


  handlePageEvent(event: PageEvent) {
    const params: QueryParams = {
      limit: event.pageSize,
      offset: event.pageIndex * event.pageSize
    }
    this.router.navigate(['/pokemons'], {queryParams: params})
  }

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute, private router: Router, private pokedoxservice:PokedoxService) {
    this.pokemonPageIndex$ = this.pokemonsService.pokemonPageIndex$
    this.pokemonsCount$ = this.pokemonsService.pokemonCount$
    this.pokemonPageSize$ = this.pokemonsService.pokemonPageSize$
    this.isLoading$ = this.pokemonsService.isLoading$
    this.pokemons$ = this.pokemonsService.pokemons$
    this.pokedox$ = this.pokedoxservice.pokedox$
  }

  ngOnInit(): void {
    this.queryParamSubscr = this.route.queryParams.subscribe((param: Params) => {
      this.pokemonsService.getPokemons(param)
    })
  }

  ngOnDestroy() {
    this.queryParamSubscr.unsubscribe()
  }
}
