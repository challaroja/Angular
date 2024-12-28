import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-available-colours',
  standalone: true,
  imports: [NgClass,NgFor],
  templateUrl: './available-colours.component.html',
  styleUrl: './available-colours.component.css'
})
export class AvailableColoursComponent {
  colors = [
    { name: 'Brown', image: '/assets/11.jpg' },
    { name: 'Black', image: '/assets/22.jpg' },
    { name: 'Tan', image: '/assets/tan.jpg' }
  ];

  selectedColor: string | null = null;

  selectColor(color: string): void {
    this.selectedColor = color;
  }

}


