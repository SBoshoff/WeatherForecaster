import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
})
export class ForecastListComponent implements OnInit {

  forecastList: WeatherForecast;

  constructor(private dataService: FetchDataService) { }

  ngOnInit() {
    this.getWeatherForecast();

    var mouseY = 0;
    var startMouseY = 0;
    $('body').on('mousedown', function (ev) {
        mouseY = ev.pageY;
        startMouseY = mouseY;
        $(document).mousemove(function (e) {
            if (e.pageY > mouseY) {
                var d = e.pageY - startMouseY;
                console.log("d: " + d);
                if (d >= 200)
                    location.reload();
                $('body').css('margin-top', d/4 + 'px');
            }
            else
                $(document).unbind("mousemove");


        });
    });
    $('body').on('mouseup', function () {
        $('body').css('margin-top', '0px');
        $(document).unbind("mousemove");
    });
    $('body').on('mouseleave', function () {
        $('body').css('margin-top', '0px');
        $(document).unbind("mousemove");
    });
  }

  getWeatherForecast(){
    this.dataService.getWeatherForecast<WeatherForecast>().subscribe(result => {
      this.forecastList = result;
      console.log(this.forecastList);
    })
  }

}
