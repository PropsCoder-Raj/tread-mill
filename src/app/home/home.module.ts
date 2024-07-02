import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../master/footer/footer.component';
import { NavbarComponent } from '../master/navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
