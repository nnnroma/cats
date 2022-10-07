import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getBreeds } from 'src/app/store/action'; 
import { selectBreeds, selectCats } from 'src/app/store/selector';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent  {

  constructor(private store: Store) { }

  breedsList$ = this.store.pipe(select(selectBreeds));

  // show() {
  //   this.store.dispatch(getBreeds())
  //   this.store.select(selectBreeds).subscribe((v)=> {
  //     console.log(v)
  //   })
  // }

  cats$ = this.store.select(selectCats)
}