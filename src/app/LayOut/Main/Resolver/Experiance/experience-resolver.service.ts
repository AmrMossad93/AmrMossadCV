import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IExperience} from "../../DTO/Interface/Experiance/experiance";
import {ExperienceService} from "../../Service/Experiance/experience.service";

@Injectable({
  providedIn: 'root'
})
export class ExperienceResolver implements Resolve<IExperience[]> {
  constructor(private experienceService: ExperienceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IExperience[]> {
    return this.experienceService.getExperienceList();
  }
}
