import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {PokemonsService} from "./pokemons.service";

@Injectable({
  providedIn: 'root'
})
export class PokedoxService {

  constructor() {
  }

  pokedox$ = new BehaviorSubject<number[]>([1,2,3,4,5,6,7,8,9,10,11])

  addInPokedox(id: number) {
    console.log(id)
    this.pokedox$.next( [...this.pokedox$.getValue(), id])
    console.log(this.pokedox$)
  }

  removeFromPokedox(id: number) {
    console.log(id)
    this.pokedox$.next( this.pokedox$.getValue().filter(pokedox => pokedox !== id))
    console.log(this.pokedox$)
  }

}
