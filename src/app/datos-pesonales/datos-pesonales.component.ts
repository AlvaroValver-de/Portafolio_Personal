import { Component } from '@angular/core';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-datos-pesonales',
  standalone: true,
  imports: [BarraSuperiorComponent, TranslateModule],
  templateUrl: './datos-pesonales.component.html',
  styleUrl: './datos-pesonales.component.css',
})
export class DatosPesonalesComponent {}
