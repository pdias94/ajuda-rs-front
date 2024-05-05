import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputSearchComponent } from '../components/input-search/input-search.component';
import { MapComponent } from '../components/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, MapComponent, InputSearchComponent],
})
export class AppComponent {
  title = 'ajuda-rs-front';
}
