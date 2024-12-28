import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  

}
