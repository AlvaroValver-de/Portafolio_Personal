import { Component, OnInit, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Configuración del loader para cargar archivos de traducción
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'appi-root',
  standalone: true,
  imports: [RouterModule, BarraSuperiorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
