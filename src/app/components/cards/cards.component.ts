import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  @Input() count!: number;
  public selectedCard: number = 0;
  public cards: number[] = [];
  ngOnInit() {
    if (!this.count) {
      this.count = 4;
    }
    // Create an array of numbers from 1 to count
    this.cards = Array.from(Array(this.count).keys());
  }

  selectCard(index: number) {
    this.selectedCard = index;
  }
}
