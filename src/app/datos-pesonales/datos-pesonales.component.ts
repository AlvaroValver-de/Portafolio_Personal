import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../barra-superior/barra-superior.component";

@Component({
  selector: 'app-datos-pesonales',
  standalone: true,
  imports: [BarraSuperiorComponent],
  templateUrl: './datos-pesonales.component.html',
  styleUrl: './datos-pesonales.component.css'
})
export class DatosPesonalesComponent {

}
