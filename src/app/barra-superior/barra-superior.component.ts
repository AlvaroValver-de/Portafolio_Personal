import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, TranslateModule],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css',
})
export class BarraSuperiorComponent {
  constructor(private servicioTraduccion: TranslateService) {
    this.servicioTraduccion.get('dates').subscribe((respuesta: string) => {
      console.log(respuesta);
    });
  }
}
