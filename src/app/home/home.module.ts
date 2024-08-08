import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../master/footer/footer.component';
import { NavbarComponent } from '../master/navbar/navbar.component';
import { BottomTabsComponent } from '../master/bottom-tabs/bottom-tabs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    BottomTabsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
