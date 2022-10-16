import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IAboutMe} from "../../DTO/Interface/AboutMe/about-me";

declare let $: any;

@Component({
  selector: 'app-Main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  aboutMeOBJ = {} as IAboutMe;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.aboutMeOBJ = res['aboutMeData'];
    })
    $.getScript('./assets/Tools/js/script.js');
  }

}
