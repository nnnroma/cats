import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
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
        // tap(() => console.log('work')),
        // switchMap(({ hi })=> {
        switchMap(()=> {
            return this.catService.getBreeds().pipe(
                map(breeds => breedsLoaded({breeds})),
                // tap((r)=> console.log(r, 'done') ),
            )   
        })
    ))

    getCats$ = createEffect(() => this.actions$.pipe(
        ofType(getCatsAction),
        switchMap(({ breedId, selectAmount })=> {
            return this.catService.getCats(breedId, selectAmount).pipe(
                tap(v => console.log('effect', v)),
                map(cats => catsLoaded({ cats: cats }))
            )
        })
    ))

}