import {Component, OnInit} from '@angular/core';
import {Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {LoaderService} from "./Core/Service/Loader/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AmrCV_V3';

  constructor(
    public router: Router,
    private loaderService: LoaderService,
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loaderService.show();
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loaderService.hide();
      }
      window.scrollTo(0, 0);
    });
  }
}
