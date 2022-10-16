import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProgrammingSkillsService} from "../../Service/ProgrammingSkills/programming-skills.service";
import {IProgrammingSkills} from "../../DTO/Interface/ProgrammingSkills/programming-skills";

@Injectable({
  providedIn: 'root'
})
export class ProgrammingSkillsResolver implements Resolve<IProgrammingSkills[]> {
  constructor(private programmingSkillsService: ProgrammingSkillsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProgrammingSkills[]> {
    return this.programmingSkillsService.getProgrammingSkills()
  }
}
