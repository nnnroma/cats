import { createAction, props } from '@ngrx/store';
import { IBreed, ICat } from './interface';

export const getBreeds = createAction('[CATS ACTION], get cats breeds');
export const breedsLoaded = createAction('[CATS ACTION], breeds loaded', props<{ breeds: IBreed[] }>());

export const getCatsAction = createAction('[CATS ACTION], get loaded', props<{breedId: string, selectAmount: number}>());
export const catsLoaded = createAction('[CATS ACTION], cats loaded', props<{cats: ICat[]}>());
