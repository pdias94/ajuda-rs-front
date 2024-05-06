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

  generateLinkForWhatsapp(phone?: string){
    if(phone == null || phone == undefined) return;
    const cleanNumber = phone?.replace(/[\(\)\-\s]/g, '');

    const linkWhatsapp = `https://wa.me/+55${cleanNumber}`;
    window.open(linkWhatsapp, '_blank');
  }

  generateLinkForWaze(latitude?: number, longitude?: number){
    if(latitude != null && longitude != null){
    const link = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`
    window.open(link, '_blank');
    }
  }
}
