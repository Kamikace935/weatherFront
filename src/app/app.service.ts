import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CityWeather} from "./app.model";

@Injectable({providedIn:'root'})
export class AppService {
  private apiUrl :string = 'http://localhost:4200/weather/'

  constructor(private http: HttpClient) {  }

  getWeather(city: string): Observable<CityWeather> {
    return this.http.get<CityWeather>(`${this.apiUrl}${city}`);
  }
}
