import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../entities/weather.entities';
import { Router } from '@angular/router';


@Component({
    selector: 'weather-cities',
    templateUrl: '../html/weather-cities.html'
})
export class WeatherCities {
    constructor(private weatherService: WeatherService, private router: Router) {
    }

    citiesWeatherData: WeatherData[] = [];

    cities = [
        { city: "London", country: "GB", },
        { city: "Paris", country: "FR" },
        { city: "Barcelona", country: "ES" },
        { city: "Florence", country: "IT" },
        { city: "Rome", country: "IT" },
    ];

    ngOnInit() {
        for (let region of this.cities) {
            this.weatherService.getCitiesWeatherData(region.city, region.country).subscribe((data: any) => {
                this.citiesWeatherData.push(
                    {
                        tempearture: data.main.temp,
                        sunriseTime: data.sys.sunrise,
                        sunsetTime: data.sys.sunset,
                        city: region.city,
                        country: region.country,
                        timeZone: +data.timezone
                    }
                )
            });
        }
    }

    onCityClick(cityData: WeatherData) {
        this.router.navigate(['/details'], { queryParams: { city: cityData.city, country: cityData.country } });
    }

}