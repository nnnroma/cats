import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IBreed } from "../store/interface";
import { CatService } from "../services/cat.service";

@Injectable({providedIn: 'root'})
export class CatsResolver implements Resolve<IBreed[]> {
    constructor(
      private store: Store,
      private catService: CatService  
    ) {
    }
    resolve(route: ActivatedRouteSnapshot): Observable<IBreed[]> {
      return this.catService.getBreeds()
    }
  }