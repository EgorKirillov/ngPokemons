import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {debounce, interval, map, Observable, Subject, Subscription} from "rxjs";
import {PokemonsService} from "../../services/pokemons.service";
import {HttpClient} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {Location} from "@angular/common";

@Component({
  selector: 'pk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  serchSubscr!: Subscription

  searchInput = new FormControl('');

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute, private router: Router, private httpClient: HttpClient, private location: Location) {
  }


  search(text: string | null) {
    console.log('serch by text:', text)
  }


  ngOnInit(): void {
    this.serchSubscr = this.searchInput.valueChanges
      .pipe(debounce(() => interval(1000)))
      .subscribe((this.search))
  }

  ngOnDestroy() {
    this.serchSubscr.unsubscribe()
  }

}
