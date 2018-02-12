import { Output, EventEmitter } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Location } from '@angular/common';
import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild, Input } from '@angular/core';
import { GoogleMapsModel } from './google-maps.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

import { } from 'googlemaps';


declare var google: any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styles: [`
  agm-map {
    height: 350px;
    width: 350px;
  }
`]

})
export class GoogleMapsComponent {

  //lat: number;
  long: number;

  public lat: number = 51.678418;
  public lng: number = 7.809007;

  public googleMapsModel: GoogleMapsModel = new GoogleMapsModel();

  public searchControl: FormControl;
  public zoom: number;

  constructor(
    private location: Location,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.zoom = 16;
    }
  public PreparaMapa(searchElementRef, obj) {
    //set google maps defaults
    this.zoom = 4;
    //create search FormControl
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

      let autocomplete = new google.maps.places.Autocomplete(searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.long = place.geometry.location.lng();
          this.lng = place.geometry.location.lng();
          this.googleMapsModel.endereco = '';
          this.googleMapsModel.bairro = '';
          this.googleMapsModel.cidade = '';
          this.googleMapsModel.estado = '';
          this.googleMapsModel.cep = '';
          this.googleMapsModel.latLog = this.lat + ";" + this.long;

          obj.latLog = this.googleMapsModel.latLog;


          for (var i = 0; i < place.address_components.length; i++) {
            switch (place.address_components[i].types[0]) {
              case 'route':
                this.googleMapsModel.endereco = place.address_components[i].long_name;
                obj.endereco =this.googleMapsModel.endereco;
                break;
              case 'political': case 'sublocality': case 'sublocality_level_1':
                this.googleMapsModel.bairro = place.address_components[i].long_name;
                obj.bairro =this.googleMapsModel.bairro;
                break;
              case 'administrative_area_level_2':
                this.googleMapsModel.cidade = place.address_components[i].long_name;
                obj.cidade =this.googleMapsModel.cidade;
                break;
              case 'administrative_area_level_1':
                this.googleMapsModel.estado = place.address_components[i].short_name;
                obj.estado =this.googleMapsModel.estado;
                break;
              case 'postal_code':
                this.googleMapsModel.cep = place.address_components[i].long_name;
                obj.cep =this.googleMapsModel.cep;
                break;
            }
          }
          this.zoom = 15;
        });
      });
    })
  }
}

