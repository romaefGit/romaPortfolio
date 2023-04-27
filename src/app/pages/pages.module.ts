import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: [],
  bootstrap: [PagesComponent],
  exports: []
})
export class PagesModule { }
