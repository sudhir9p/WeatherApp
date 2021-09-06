import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { WeatherCities } from '../components/weather-cities.component';
import { WeatherService } from '../services/weather.service';
import { WeatherDetails } from '../components/weather-details.component';
import { TimeZonePipe } from '../pipes/utctotimezone.pipe';
@NgModule({
    declarations: [
        WeatherCities,
        WeatherDetails,
        TimeZonePipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    exports: [WeatherCities],
    providers: [WeatherService],
})
export class WeatherModule { }
