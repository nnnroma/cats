import { Component, OnInit, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

@Injectable()
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }

  response: any;



  ngOnInit() {
    this.http.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0').subscribe((response) => {
      this.response = response
      console.log(response)
    })
  }

}
