import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ServiceBaseService } from './service-base.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WeatherForecast } from '../models/weather-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService extends ServiceBaseService {


  constructor(private httpClient: HttpClient) {
    super();
  }

  getWeatherForecast<T>(woeid: number = 0): Observable<T> {
    console.log(this.baseUrl);
    const fullUrl = this.baseUrl + '/weatherforecast/' + (woeid !== 0 ? woeid.toString() : '');
    return this.httpClient.get<T>(fullUrl).pipe<T>(catchError(error => {
      return this.handleError(error);
    }));
  }
}
