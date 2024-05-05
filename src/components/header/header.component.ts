import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() sheltersQuantity: any;
  @Output() refreshShelter = new EventEmitter<void>();

  constructor() {}

  refreshShelters() {
    this.refreshShelter.emit();
  }
}
