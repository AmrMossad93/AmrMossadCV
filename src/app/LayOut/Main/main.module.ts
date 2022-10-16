import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './Components/main/main.component';
import { AboutBlockComponent } from './Components/Block/About/about-block/about-block.component';
import {AngularMaterialModule} from "../../Core/Module/AngularMaterial/angular-material.module";


@NgModule({
  declarations: [
    MainComponent,
    AboutBlockComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModule
  ]
})
export class MainModule { }
