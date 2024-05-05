import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ChipModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  showModal = true;

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
