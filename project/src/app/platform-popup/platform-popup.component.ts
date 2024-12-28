import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-platform-popup',
  standalone: true,
  imports: [],
  templateUrl: './platform-popup.component.html',
  styleUrl: './platform-popup.component.css'
})
export class PlatformPopupComponent {
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
