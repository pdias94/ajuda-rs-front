import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { Shelter } from '../../core/models/shelter/shelters';
import { ShelterById } from '../../core/models/shelter/shelter-by-id';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ChipModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnChanges{
  @Input() showModal = false;
  @Input() shelterById!: ShelterById | undefined
  @Input() shelter!: Shelter | undefined
  @Output() modalClosed = new EventEmitter<void>();



  constructor() {


  }
  ngOnChanges(): void {
  }

  toggleModal() {
    this.showModal = false;
    this.modalClosed.emit();
  }
}
