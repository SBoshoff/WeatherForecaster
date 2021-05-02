import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AuthorizeService } from '../../api-authorization/authorize.service'

@Injectable({
  providedIn: 'root'
})
export class ServiceBaseService {

  baseUrl: String = window.location.origin + '/api';

  constructor() { }

  handleError(error){
    console.log(error);
    return throwError(error);
  }

  protected get requestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*, multipart/form-data'
    });

    return { headers };
  }

  private getBearerToken() {
    return JSON.parse(localStorage.getItem('currentUser')).access_token;
  }
}
