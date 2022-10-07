import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { CatService } from "../services/cat.service";
import { breedsLoaded, catsLoaded, getBreeds, getCatsAction } from "./action";

@Injectable()
export class CatsEffects {
    constructor(
        private actions$: Actions,
        private catService: CatService
    ) {}

    getBreeds$ = createEffect(() => this.actions$.pipe(
        ofType(getBreeds),
        switchMap(()=> {
            return this.catService.getBreeds().pipe(
                map(breeds => breedsLoaded({breeds})),
            )   
        })
    ))

    getCats$ = createEffect(() => this.actions$.pipe(
        ofType(getCatsAction),
        switchMap(({ breedId, selectAmount })=> {
            return this.catService.getCats(breedId, selectAmount).pipe(
                map(cats => catsLoaded({ cats: cats }))
            )
        })
    ))
}