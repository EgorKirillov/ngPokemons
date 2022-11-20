import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pk-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() imgSrc: string | null = null;
  @Input() pokemonName: string | null = null;
  @Input() pokemonType: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
