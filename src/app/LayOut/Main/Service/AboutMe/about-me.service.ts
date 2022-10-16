import {Injectable} from '@angular/core';
import {DataService} from "../../../../Core/Service/Data/data.service";
import {Observable} from "rxjs";
import {MAIN_API_NAME} from "../../DTO/Constant/MAIN_API_NAME";
import {IAboutMe} from "../../DTO/Interface/AboutMe/about-me";

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private dataService: DataService) {
  }

  getAboutMe(): Observable<IAboutMe> {
    return this.dataService.get(MAIN_API_NAME.ABOUT_ME)
  }
}
