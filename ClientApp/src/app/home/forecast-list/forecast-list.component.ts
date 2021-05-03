import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
})
export class ForecastListComponent implements OnInit {

  forecastList: WeatherForecast;
  visible: boolean = false;
  loading: boolean = false;

  constructor(private dataService: FetchDataService) { }

  ngOnInit() {
    this.getWeatherForecast();
  }

  refreshForecast() {
    this.getWeatherForecast();
  }

  getWeatherForecast(){
    this.loading = true;
    this.dataService.getWeatherForecast<WeatherForecast>().subscribe(result => {
      this.visible = true;
      this.forecastList = result;
      console.log(this.forecastList);
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  }

}
