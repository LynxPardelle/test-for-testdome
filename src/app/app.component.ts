import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DarkModeTogglerComponent,
  DarkModeTogglerComponentState,
} from './components/dark-mode-toggler/dark-mode-toggler.component';
import { StartsWithFilterPipePipe } from './pipes/starts-with-filter-pipe.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DarkModeTogglerComponent, StartsWithFilterPipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  handleStateChange(event: DarkModeTogglerComponentState) {
    console.log('Event value: ' + event);
  }
}
