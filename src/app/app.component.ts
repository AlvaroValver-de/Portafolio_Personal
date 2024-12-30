import { Component, OnInit, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

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
export class AppComponent implements OnInit {
  idiomas = ['es', 'en', 'fr'];
  idiomaSeleccionado: string = '';
  title = 'Portafolio_Personal';

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    let navegadorIdioma = 'es'; // Idioma predeterminado

    // Verifica si el código se está ejecutando en el navegador
    if (isPlatformBrowser(this.platformId)) {
      navegadorIdioma = navigator.language.split('-')[0];
    }

    this.translate.setDefaultLang('es');
    this.translate.use(navegadorIdioma);
  }

  cambiarIdioma() {
    this.translate.use(this.idiomaSeleccionado);
  }
}
