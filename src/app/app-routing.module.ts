import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// https://angular.io/tutorial/tour-of-heroes/toh-pt5 to create routes navigation
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      FormsModule            
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
