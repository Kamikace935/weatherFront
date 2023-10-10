import { Component } from '@angular/core';
import {AppService} from "./app.service";
import {CityWeather} from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData?: CityWeather;

  constructor(private appService: AppService) { }

  getWeather(city: string) {
    this.appService.getWeather(city)
      .subscribe(data => {
        this.weatherData = data;
      })
  }
}
