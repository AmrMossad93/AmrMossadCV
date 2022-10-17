import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './Components/card/card.component';
import {AngularMaterialModule} from "../Core/Module/AngularMaterial/angular-material.module";
import {SkillCardComponent} from './Components/skill-card/skill-card.component';


@NgModule({
  declarations: [
    CardComponent,
    SkillCardComponent
  ],
  exports: [
    CardComponent,
    SkillCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class SharedModule {
}
