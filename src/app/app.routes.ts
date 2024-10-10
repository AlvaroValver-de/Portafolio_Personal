import { Routes,RouterModule } from '@angular/router';
import { DatosPesonalesComponent } from './datos-pesonales/datos-pesonales.component';



export const routes: Routes = [
    { path: 'home', component: DatosPesonalesComponent },  
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/home' }
];
