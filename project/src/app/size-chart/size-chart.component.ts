import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-size-chart',
  standalone: true,
  imports: [NgClass,NgFor],
  templateUrl: './size-chart.component.html',
  styleUrl: './size-chart.component.css'
})
export class SizeChartComponent {
  // List of all sizes to display
  sizes: number[] = [6, 7, 8, 9, 10, 11, 12, 13];

  // Variable to track the currently selected size
  selectedSize: number = 11; // Default selection is size 11

  // Function to update selected size when a circle is clicked
  selectSize(size: number): void {
    this.selectedSize = size; // Update the selected size
  }
}
 
