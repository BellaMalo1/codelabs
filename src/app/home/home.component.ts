import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseingLocationComponent } from '../houseing-location/houseing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HouseingLocationComponent],
  template: `
    <section>
      <form>
        <input type="test" placeholder="filter by city">
        <button class="primary" type="buttom">Search please</button>
      </form>
    <section class="results">
      <app-houseing-location></app-houseing-location>
    </section>


    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
