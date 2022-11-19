import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'pk-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {

  private routeSub?: Subscription;
  id?:string
  constructor(private router:ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.router)
    this.routeSub=this.router.params.subscribe(params=> {
      this.id = params['id']
    })
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe()
  }

}
