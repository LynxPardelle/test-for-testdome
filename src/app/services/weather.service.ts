import { Injectable } from '@angular/core';

export class Weather {
  temperature!: string;
  description!: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}
  public saveWeather(weather: Weather) {
    console.log(
      `Temperature: ${weather.temperature} - Description: ${weather.description}`
    );
  }
}
