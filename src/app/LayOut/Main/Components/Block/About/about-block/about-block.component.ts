import {Component, Input, OnInit} from '@angular/core';
import {IAboutMe} from "../../../../DTO/Interface/AboutMe/about-me";

@Component({
  selector: 'app-about-block',
  templateUrl: './about-block.component.html',
  styleUrls: ['./about-block.component.css']
})
export class AboutBlockComponent implements OnInit {
  @Input() aboutMeOBJ = {} as IAboutMe;

  constructor() {
  }

  ngOnInit(): void {
  }

}
