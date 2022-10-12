import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBreed } from '../store/interface';

@Injectable()
export class CatService {
  constructor(private http: HttpClient) { }

  getBreeds():Observable<IBreed[]> {
    return this.http.get<IBreed[]>('https://api.thecatapi.com/v1/breeds/');
  }

  getCats(breedId:string, selectAmount: number): Observable<any> {
    return this.http.get<any>('https://api.thecatapi.com/v1/images/search', { params: { 'breed_ids': breedId, 'limit': selectAmount } });
  }
}
