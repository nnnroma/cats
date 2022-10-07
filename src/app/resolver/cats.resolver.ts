import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
// import { CatService } from "../services/cat.service";
// import { getBreeds } from "../store/action";
import { IBreed } from "../store/interface";
import { selectBreeds } from "../store/selector";

@Injectable({providedIn: 'root'})
export class CatsResolver implements Resolve<boolean> {
    constructor(private store: Store) {
    }
  
    resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
      return this.store.select(selectBreeds)
        .pipe(map((items: IBreed[]) => items.length !== 0));
    }
  }