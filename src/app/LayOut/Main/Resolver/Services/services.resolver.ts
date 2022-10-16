import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ServicesService} from "../../Service/Services/services.service";
import {IServices} from "../../DTO/Interface/Services/services";

@Injectable({
  providedIn: 'root'
})
export class ServicesResolver implements Resolve<IServices[]> {
  constructor(private servicesService: ServicesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IServices[]> {
    return this.servicesService.getServices()
  }
}
