import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {
  @Input() name: string = ''
  @Input() percentage: number = 0

  constructor() {
  }

  ngOnInit(): void {
  }

}
