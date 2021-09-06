
import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'weather-cities',
    templateUrl: '../html/weather-details.html',
    styleUrls: ['../styles/weather-details.scss']
})
export class WeatherDetails {
    constructor(private weatherService: WeatherService,
        private activateRoute: ActivatedRoute,
        private router: Router) {
    }

    city = "";
    forecastData: any[] = [];

    ngOnInit() {
        this.city = this.activateRoute.snapshot.queryParams['city'];
        this.getWeatherForecastData();
    }

    getWeatherForecastData() {
        const countryCode = this.activateRoute.snapshot.queryParams['country'];
        this.weatherService.getCitiesForecastData(this.city, countryCode).subscribe((data: any) => {
            const weatherData = data.list;
            data.list.forEach((fdata: any) => {
                if (fdata.dt_txt.includes("09:00:00")) {
                    this.forecastData.push({
                        date: fdata.dt_txt,
                        temperature: fdata.main.temp,
                        seaLevel: fdata.main.sea_level
                    })
                }
            })
        });
    }

    goBack() {
        this.router.navigate(['/home']);
    }
}