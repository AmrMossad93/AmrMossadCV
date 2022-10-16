import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AboutMeService} from "../../Service/AboutMe/about-me.service";
import {IAboutMe} from "../../DTO/Interface/AboutMe/about-me";

@Injectable({
  providedIn: 'root'
})
export class AboutMeResolver implements Resolve<IAboutMe> {
  constructor(private aboutMeService: AboutMeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAboutMe> {
    return this.aboutMeService.getAboutMe()
  }
}
