import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-houseing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listings">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}},{{housingLocation.state}}</p>

    </section>
  `,
  styleUrls: ['./houseing-location.component.css']
})
export class HouseingLocationComponent {
  @Input() housingLocation!:HousingLocation;
}
