import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCatsAction } from 'src/app/store/action';
import { IBreed } from 'src/app/store/interface';
import { selectBreeds } from 'src/app/store/selector';
import { Iselect } from 'src/app/services/menuInterfaces';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() resolveBreeds!:IBreed[];
  breeds$: Observable<IBreed[]> = this.store.select(selectBreeds);
  selectAmount:number = 10;
  breedId:string = '';
  lengthNumber: number = 100;
  sizeNumber: number = 10;
  optionsNumber: number[] = [5, 10, 25, 50];
  firstOption = 5;
  twoOption = 10;
  threeOption = 25;
  fourOption = 50;

  constructor(
    private store: Store,
  ) { };

  ngOnInit(): void {
    this.store.dispatch(getCatsAction({ breedId: this.breedId, selectAmount: this.selectAmount }));
  };
  
  selectPaginator(e: PageEvent): void {
    this.selectAmount = e.pageSize;
    this.store.dispatch(getCatsAction({ breedId: this.breedId, selectAmount: this.selectAmount }));
  };

  onSelect(e: Iselect): void {
    this.breedId = e.value;
    this.store.dispatch(getCatsAction({ breedId: this.breedId, selectAmount: this.selectAmount }));
  };
}
