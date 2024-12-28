import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-other-platforms',
  standalone: true,
  imports: [NgClass,NgIf],
  templateUrl: './other-platforms.component.html',
  styleUrl: './other-platforms.component.css'
})
export class OtherPlatformsComponent {
  isPopupVisible: boolean = false;

  addToWishlist(): void {
    this.isPopupVisible = true;

    // Hide the popup after 3 seconds
    setTimeout(() => {
      this.isPopupVisible = false;
    }, 1000);
  }
  popup(){
       alert("added successfullay");
  }

}
