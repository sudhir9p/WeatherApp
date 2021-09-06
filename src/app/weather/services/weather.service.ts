import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment';

@Injectable()
export class WeatherService {

    constructor(private httpClient: HttpClient) {

    }

    getCitiesWeatherData(city: string, state: string) {
        return this.httpClient.get(`${environment.apiUrl}/weather?q=${city},${state}&appid=${environment.weatherApiKey}`);
    }

    getCitiesForecastData(city: string, state: string) {
        return this.httpClient.get(`${environment.apiUrl}/forecast?q=${city},${state}&appid=${environment.weatherApiKey}`);
    }
}