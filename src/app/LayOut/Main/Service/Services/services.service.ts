import {Injectable} from '@angular/core';
import {DataService} from "../../../../Core/Service/Data/data.service";
import {Observable} from "rxjs";
import {MAIN_API_NAME} from "../../DTO/Constant/MAIN_API_NAME";
import {IServices} from "../../DTO/Interface/Services/services";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private dataService: DataService) {
  }

  getServices(): Observable<IServices[]> {
    return this.dataService.get(MAIN_API_NAME.SERVICES)
  }
}
