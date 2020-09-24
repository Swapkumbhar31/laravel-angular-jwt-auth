import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [MainComponent, NavbarComponent, HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
