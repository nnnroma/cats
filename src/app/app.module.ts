import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CatsComponent } from './components/cats/cats.component';
import { catsSelectorKey } from './store/selector';
import { breedReducer } from './store/reducer';
import { CatsEffects } from './store/effects';
import { CatService } from './services/cat.service';
import { MenuComponent } from './components/cats/menu/menu.component';
import { Routes, RouterModule } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CatsResolver } from './resolver/cats.resolver';

const appRoutes: Routes = [
  {
  path: '', 
  component: CatsComponent,
  resolve: {
    items: CatsResolver,
  },
},
];
 
@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [catsSelectorKey]: breedReducer }),
    EffectsModule.forRoot([CatsEffects]),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  },
    CatService,
],
  bootstrap: [AppComponent],
})
export class AppModule { }
