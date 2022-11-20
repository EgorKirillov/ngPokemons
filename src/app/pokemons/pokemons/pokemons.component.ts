import { Component, OnInit } from '@angular/core';
import { PokemonSpecies } from "../../shared/models/pokemonSpecies.models";
import { Observable, Subscription } from "rxjs";
import { PokemonsService } from "../../shared/services/pokemons.service";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'pk-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemonsSubscr!: Subscription
  pokemons$!: Observable<PokemonSpecies[]>
  pokemonsCount$!: Observable<number>
  pokemonPageSize$!: Observable<number>
  pokemonPageIndex$!:Observable<number>
  isLoading$!:Observable<boolean>

  pageSizeOptions = [5, 10, 20 , 50];
  showFirstLastButtons = true;


  handlePageEvent (event: PageEvent) {

    this.pokemonsService.getPokemons({limit: event.pageSize, offset: event.pageIndex * event.pageSize})
    console.log(event)
    // this.length = event.length;
    // this.pageSize = event.pageSize;
    // this.pageIndex = event.pageIndex;
  }

  constructor(private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    this.pokemons$ = this.pokemonsService.pokemonSpecies$
    this.pokemonsCount$ = this.pokemonsService.pokemonCount$
    this.pokemonPageSize$ = this.pokemonsService.pokemonPageSize$
    this.pokemonPageIndex$ = this.pokemonsService.pokemonPageIndex$
    this.isLoading$ =this.pokemonsService.isLoading$

  }
}
