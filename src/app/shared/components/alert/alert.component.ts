import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() errorMessage!: string;
  @Output() close = new EventEmitter<void>();

  clearErrorMessage()
  {
    this.close.emit();
  }
}
