import {Injectable} from '@angular/core';
import {DataService} from "../../../../Core/Service/Data/data.service";
import {Observable} from "rxjs";
import {MAIN_API_NAME} from "../../DTO/Constant/MAIN_API_NAME";
import {IProgrammingSkills} from "../../DTO/Interface/ProgrammingSkills/programming-skills";

@Injectable({
  providedIn: 'root'
})
export class ProgrammingSkillsService {

  constructor(private dataService: DataService) {
  }

  getProgrammingSkills(): Observable<IProgrammingSkills[]> {
    return this.dataService.get(MAIN_API_NAME.PROGRAMMING_SKILLS)
  }
}
