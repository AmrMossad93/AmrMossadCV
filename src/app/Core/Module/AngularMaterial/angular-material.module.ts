import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";

const angularMaterial = [
  MatCardModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    angularMaterial
  ],
  exports: [
    angularMaterial
  ]
})
export class AngularMaterialModule {
}
