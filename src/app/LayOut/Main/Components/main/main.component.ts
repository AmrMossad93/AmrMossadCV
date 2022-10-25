import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IAboutMe} from "../../DTO/Interface/AboutMe/about-me";
import {IServices} from "../../DTO/Interface/Services/services";
import {IProgrammingSkills} from "../../DTO/Interface/ProgrammingSkills/programming-skills";
import {IEducation} from "../../DTO/Interface/Education/education";
import {IExperience} from "../../DTO/Interface/Experiance/experiance";
import {IProjects} from "../../DTO/Interface/Projects/projects";

declare let $: any;

@Component({
  selector: 'app-Main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  aboutMeOBJ = {} as IAboutMe;
  servicesList: IServices[] = [];
  programmingSkillsList: IProgrammingSkills[] = [];
  educationList: IEducation[] = []
  experienceList: IExperience[] = [];
  projectsList: IProjects[] = []
  categories: string[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.aboutMeOBJ = res['aboutMeData'];
      this.servicesList = res['servicesList'];
      this.programmingSkillsList = res['programmingSkillsList'];
      this.educationList = res['educationList'];
      this.experienceList = res['experienceList'].slice().reverse();
      this.projectsList = res['projectsList'].slice().reverse();
    })

  }

  ngAfterViewInit() {
    this.onLoadProjectList();
  }

  onLoadProjectList(): void {
    let cat = this.projectsList.map(c => c.type)
    this.categories = [...new Set(cat)];
    $.getScript('./assets/Tools/js/script.js');
  }
}
