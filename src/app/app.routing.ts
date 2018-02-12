import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

const APP_ROUTES: Routes = [
    { path: 'teste', component: TesteComponent },
    { path: 'google-maps', component: GoogleMapsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);