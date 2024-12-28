import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css'
})
export class RecommendedProductsComponent {
  onShareClick() {
    console.log('Share button clicked!');
  }

  onCartClick() {
    console.log('Cart button clicked!');
  }

  onBuyNowClick() {
    console.log('Buy Now button clicked!');
  }

 
}
