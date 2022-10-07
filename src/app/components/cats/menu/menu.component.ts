import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBreeds, getCatsAction } from 'src/app/store/action';
import { IBreed } from 'src/app/store/interface';
import { selectBreeds, selectCats } from 'src/app/store/selector';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [
    './menu.component.css',
 ]
})
export class MenuComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getBreeds());
    this.store.dispatch(getCatsAction({breedId: this.breedId, selectAmount: this.selectAmount}));
  }
  
  breeds$: Observable<IBreed[]> = this.store.select(selectBreeds);
  cats$ = this.store.select(selectCats)

  selectAmount:number = 10;

  selectPaginator(e: any) {
    this.selectAmount = e.pageSize;
    this.store.dispatch(getCatsAction({breedId: this.breedId, selectAmount: this.selectAmount}))
  }

  breedId:string = '';

  onSelect(e: any) {
    this.breedId = e.value;
    this.store.dispatch(getCatsAction({breedId: this.breedId, selectAmount: this.selectAmount}))
  }
}
