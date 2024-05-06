import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  provideAnimations
} from '@angular/platform-browser/animations';
import L from 'leaflet';
import { Shelter, Shelters } from '../../core/models/shelter/shelters';
import { HeaderComponent } from '../header/header.component';
import { ModalComponent } from '../modal/modal.component';
import { RegisterHelpService } from './../../core/services/register-help/register-help.service';
import { ShelterService } from './../../core/services/shelter/shelter.service';
import { ShelterById } from '../../core/models/shelter/shelter-by-id';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
  imports: [HttpClientModule, CommonModule, ModalComponent, HeaderComponent],
  providers: [
    ShelterService,
    RegisterHelpService,
    provideAnimations(),
  ],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map!: L.Map;
  visibleModal = false;

  greenIcon = L.icon({
    iconUrl: '../../assets/icons/shelter.png',
    iconSize: [30, 30],
  });

  markers: L.Marker[] = [];

  private shelters!: Shelters;
  public shelter!: Shelter | undefined
  public shelterById!: ShelterById | undefined
  public sheltersQuantity: any;

  constructor(
    private shelterService: ShelterService
  ) {}

  ngOnInit() {
    this.getAllShelters();
  }

  ngAfterViewInit() {
    this.initializeMap();
  }

  latitude = -30.052288;
  longitude = -51.177329;

  zoomLevel = 13;

  private initializeMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    this.map = L.map('map', { zoomControl: false }).setView(
      [this.latitude, this.longitude],
      this.zoomLevel
    );
    L.tileLayer(baseMapURl).addTo(this.map);
  }

  private addMarkers() {
    this.markers.forEach((marker) => marker.addTo(this.map));
  }

  private centerMap() {
    const bounds = L.latLngBounds(
      this.markers.map((marker) => marker.getLatLng())
    );

    this.map.fitBounds(bounds);
  }

  private getAllShelters() {
    this.shelterService.getAllShelters().subscribe((data: any) => {
      this.shelters = data.data;
      this.sheltersQuantity = this.shelters.length;
      this.popular();
    });
  }

  popular() {
    var marker: L.Marker<any>;
    this.shelters.forEach((shelter: any) => {
      if (
        typeof shelter.latitude === 'number' &&
        typeof shelter.longitude === 'number'
      ) {
        marker = L.marker([shelter.latitude, shelter.longitude], {
          icon: this.greenIcon,
        });
        marker.on('click', () => {
          this.buscarAbrigoPorId(shelter.id);
        });
        this.markers.push(marker);
      }
    });
    this.addMarkers();
    this.centerMap();
  }

  buscarAbrigoPorId(id: string) {
    this.shelterService.getShelterById(id).subscribe((data: any) => {
      this.shelterById = data.data;
      var shelter = this.shelters.find(x => x.id == id);
      this.shelter = shelter;
      this.showDialog();
    })
  }

  showDialog() {
    this.visibleModal = true;
  }

  modalClosedHandler() {
    this.visibleModal = false;
  }

  refreshShelters(){
    this.visibleModal = false;
    this.getAllShelters();
  }
}
