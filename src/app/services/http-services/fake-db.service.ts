import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FakeDbService {

  constructor(
    private httpClient: HttpClient) { }

  public getEmployees(pageNumber: number, pageSize: number): Observable<any> {
    let url = `${environment.httpServices.baseAddress.domain}:${environment.httpServices.baseAddress.port}/${environment.httpServices.baseAddress.prefix}/${environment.httpServices.FakeDb.api.getEmployees}`;

    url += `?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    return this.httpClient.get(url);
  }
}
