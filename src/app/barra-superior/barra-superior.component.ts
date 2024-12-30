import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css',
})
export class BarraSuperiorComponent {}
