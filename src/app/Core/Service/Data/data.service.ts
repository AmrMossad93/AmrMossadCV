import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  get(PATH: string): Observable<any> {
    return this.httpClient.get(environment.JSON_FILE_END_POINT + PATH);
  }
}
