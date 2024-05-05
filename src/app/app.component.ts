import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from '../components/map/map.component';
import { HeaderComponent } from '../components/header/header.component';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, MapComponent, HeaderComponent, ModalComponent],
})
export class AppComponent {
  title = 'ajuda-rs-front';
}
