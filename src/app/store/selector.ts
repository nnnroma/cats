import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatState } from "./reducer";

export const catsSelectorKey = 'breeds';
export const catsFeatureSelector = createFeatureSelector<CatState>(catsSelectorKey);

export const selectBreeds = createSelector(catsFeatureSelector, (state: CatState) => state.breeds);
export const selectCats = createSelector(catsFeatureSelector, (state: CatState) => state.cats);