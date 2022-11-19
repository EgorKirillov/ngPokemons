import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { Pokemon } from "../../shared/models/pokemon.models";
import { PokemonsService } from "../../shared/services/pokemons.service";

@Component({
  selector: 'pk-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {

  private routeSub?: Subscription;
  id?:string
  pokemon$!: Observable<Pokemon | null>

  constructor(private router:ActivatedRoute, private pokemonsService: PokemonsService ) { }

  ngOnInit(): void {
    console.log(this.router)
    this.routeSub=this.router.params.subscribe(params=> {
      this.id = params['id']
    })
    this.pokemonsService.getPokemon(this.id)
    this.pokemon$ = this.pokemonsService.pokemon$
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe()
    this.pokemonsService.resetPokemon()
  }

}
