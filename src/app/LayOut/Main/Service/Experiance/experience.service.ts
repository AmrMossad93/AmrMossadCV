import {Injectable} from '@angular/core';
import {DataService} from "../../../../Core/Service/Data/data.service";
import {Observable} from "rxjs";
import {IExperience} from "../../DTO/Interface/Experiance/experiance";
import {MAIN_API_NAME} from "../../DTO/Constant/MAIN_API_NAME";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private dataService: DataService) {
  }

  getExperienceList(): Observable<IExperience[]> {
    return this.dataService.get(MAIN_API_NAME.EXPERIENCE)
  }
}
