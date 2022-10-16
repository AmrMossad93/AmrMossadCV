import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './Components/main/main.component';
import { AboutBlockComponent } from './Components/Block/About/about-block/about-block.component';


@NgModule({
  declarations: [
    MainComponent,
    AboutBlockComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
