import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCats } from 'src/app/store/selector';
import { ActivatedRoute } from '@angular/router'; 
import { IBreed } from 'src/app/store/interface';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent  {

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.data.subscribe(({items}) => {
      this.resolveBreeds = items;
    })
  }

  resolveBreeds!: IBreed[];

  cats$ = this.store.select(selectCats)
}