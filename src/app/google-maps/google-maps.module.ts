import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsComponent } from './google-maps.component';

@NgModule({
  imports: [
    CommonModule
    ,BrowserModule 
    ,AgmCoreModule.forRoot({
      apiKey: "AIzaSyCoETsYOsu0QlCSbMcGNzwxN_n84KluBqo",
      libraries: ["places"]
    })
  ]
})
export class GoogleMapsModule { }
