import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBreeds, getCatsAction } from './store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'last_cat';
  // breedId?: string;
  // selectAmount?: number;
  // breedId:string = '';
  // selectAmount:number = 10;


  constructor(private store: Store) {
    // this.store.dispatch(getBreeds());
   }
  
   ngOnInit(): void {
    // this.store.dispatch(getCatsAction({breedId: this.breedId, selectAmount: this.selectAmount}));
  }
}
