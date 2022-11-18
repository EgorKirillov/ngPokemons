import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "./pokemons/services/pokemons.service";

@Component({
  selector: 'pk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pokemon';
  constructor(private pokemonsService:PokemonsService) {  }

  ngOnInit(): void {
    this.pokemonsService.getPokemons()
  }
}
