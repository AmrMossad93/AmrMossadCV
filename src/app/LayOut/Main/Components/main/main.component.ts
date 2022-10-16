import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IAboutMe} from "../../DTO/Interface/AboutMe/about-me";
import {IServices} from "../../DTO/Interface/Services/services";
import {IProgrammingSkills} from "../../DTO/Interface/ProgrammingSkills/programming-skills";
import {IEducation} from "../../DTO/Interface/Education/education";

declare let $: any;

@Component({
  selector: 'app-Main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  aboutMeOBJ = {} as IAboutMe;
  servicesList: IServices[] = [];
  programmingSkillsList: IProgrammingSkills[] = [];
  educationList: IEducation[] = []

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.aboutMeOBJ = res['aboutMeData'];
      this.servicesList = res['servicesList'];
      this.programmingSkillsList = res['programmingSkillsList'];
      this.educationList = res['educationList'];
    })
    $.getScript('./assets/Tools/js/script.js');
  }

}
