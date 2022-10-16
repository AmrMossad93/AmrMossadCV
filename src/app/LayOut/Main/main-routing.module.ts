import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./Components/main/main.component";
import {AboutMeResolver} from "./Resolver/AboutMe/about-me.resolver";
import {ServicesResolver} from "./Resolver/Services/services.resolver";
import {ProgrammingSkillsResolver} from "./Resolver/ProgrammingSkills/programming-skills.resolver";
import {EducationResolver} from "./Resolver/Education/education.resolver";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      aboutMeData: AboutMeResolver,
      servicesList: ServicesResolver,
      programmingSkillsList: ProgrammingSkillsResolver,
      educationList: EducationResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
