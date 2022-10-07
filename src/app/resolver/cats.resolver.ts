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
      console.log('resolved');
      return this.store.select(selectBreeds)
        .pipe(map((items: IBreed[]) => items.length !== 0));
    }
  }

// export class PostResolver implements Resolve<IBreed[]> {
//     constructor(private catSerive: CatService)
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IBreed[] | Observable<IBreed[]> | Promise<IBreed[]> {
//         throw new Error("Method not implemented.");
//     }

// }    