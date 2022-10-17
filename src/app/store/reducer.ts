import { IBreed, ICat } from './interface';
import * as actions from './action';
import { createReducer, on } from '@ngrx/store';

export interface CatState {
  breeds: IBreed[];
  cats: ICat[];
}

export const breedEntity: CatState = {
  breeds: [],
  cats: [],
};

export const breedReducer = createReducer(
  breedEntity,
    on(
      actions.breedsLoaded,
      (state, { breeds }) => ({ ...state, breeds }),
    ),
    on(
      actions.catsLoaded,
      (state, { cats }) => ({ ...state, cats }),
    ),
);
