import { Component, EventEmitter, Output } from '@angular/core';
export type DarkModeTogglerComponentState = 'active' | 'disabled';

@Component({
  selector: 'darkmode-toggler',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode-toggler.component.html',
  styleUrl: './dark-mode-toggler.component.scss',
})
export class DarkModeTogglerComponent {
  public state: DarkModeTogglerComponentState = 'disabled';
  @Output() stateChanged = new EventEmitter<DarkModeTogglerComponentState>();
  changeState() {
    this.state = this.state === 'active' ? 'disabled' : 'active';
    this.stateChanged.emit(this.state);
  }
}
