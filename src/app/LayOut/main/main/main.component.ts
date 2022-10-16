import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('../assets/Tools/js/script.js');
  }

}
