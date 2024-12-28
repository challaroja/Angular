import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delivary-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './delivary-details.component.html',
  styleUrl: './delivary-details.component.css'
})
export class DelivaryDetailsComponent {
  data=true;
  showTerms = false; // Controls the visibility of Terms & Conditions
  showPolicy = false; // Controls the visibility of Return Policy

  // Toggles the visibility of Terms & Conditions
  toggleTerms() {
    this.showTerms = !this.showTerms;
  }

  // Toggles the visibility of Return Policy
  togglePolicy() {
    this.showPolicy = this.showPolicy;
  }
  
  

}
