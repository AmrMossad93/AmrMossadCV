import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IEducation} from "../../DTO/Interface/Education/education";
import {EducationService} from "../../Service/Education/education.service";

@Injectable({
  providedIn: 'root'
})
export class EducationResolver implements Resolve<IEducation[]> {
  constructor(private educationService: EducationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEducation[]> {
    return this.educationService.getEducation();
  }
}
