import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = 'Click me';
  @Input() type: 'primary' | 'secondary' | 'icon' | 'toggle' | 'text' | 'fab' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() icon?: string; // Optional icon
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
