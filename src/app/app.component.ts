import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BarraSuperiorComponent } from "./barra-superior/barra-superior.component";

@Component({
  selector: 'appi-root',
  standalone: true,
  imports: [RouterModule,BarraSuperiorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portafolio_Personal';
}
