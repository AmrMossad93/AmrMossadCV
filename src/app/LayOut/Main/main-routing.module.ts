import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./Components/main/main.component";
import {AboutMeResolver} from "./Resolver/AboutMe/about-me.resolver";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      aboutMeData: AboutMeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
