import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule],
  providers: [WeatherService],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnInit {
  weather!: Weather;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weather = new Weather();
  }

  onSubmit() {
    this.weatherService.saveWeather(this.weather);
  }
}
