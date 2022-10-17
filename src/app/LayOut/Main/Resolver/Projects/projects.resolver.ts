import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProjectsService} from "../../Service/Projects/projects.service";
import {IProjects} from "../../DTO/Interface/Projects/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolver implements Resolve<IProjects[]> {
  constructor(private projectsService: ProjectsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProjects[]> {
    return this.projectsService.getProjects()
  }
}
