import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IAboutMe} from "../../DTO/Interface/AboutMe/about-me";
import {IServices} from "../../DTO/Interface/Services/services";

declare let $: any;

@Component({
  selector: 'app-Main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  aboutMeOBJ = {} as IAboutMe;
  servicesList: IServices[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.aboutMeOBJ = res['aboutMeData'];
      this.servicesList = res['servicesList'];
    })
    $.getScript('./assets/Tools/js/script.js');
  }

}
