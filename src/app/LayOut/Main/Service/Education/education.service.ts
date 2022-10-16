import {Injectable} from '@angular/core';
import {DataService} from "../../../../Core/Service/Data/data.service";
import {Observable} from "rxjs";
import {IEducation} from "../../DTO/Interface/Education/education";
import {MAIN_API_NAME} from "../../DTO/Constant/MAIN_API_NAME";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private dataService: DataService) {
  }

  getEducation(): Observable<IEducation[]> {
    return this.dataService.get(MAIN_API_NAME.EDUCATION)
  }
}
