import { DialogBox } from './../dialogBox';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Mascaras } from './../mascaras';
import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { Location } from '@angular/common';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';
import { GoogleMapsComponent } from '.././google-maps/google-maps.component';

@Component({
  selector: 'cliente-detalhe',
  templateUrl: 'cliente-detalhe.component.html',
  styles: [`
    agm-map {
      height: 350px;
      width: 350px;
    }
  `]
})
export class ClienteDetalheComponent {
  public searchControl: FormControl;
  private autocomplete_init: boolean = false;

  @ViewChild("Endereco")
  public searchElementRef;

  @ViewChild('dialog')
  dialog: DialogBox;

  @ViewChild("CompGoogleMaps")
  public compGoogleMaps: GoogleMapsComponent;

  public mascaras = new Mascaras();
  cliente: Cliente = new Cliente();

  private isNovo: boolean = true;

  constructor(

    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id: number = + params['id'];
      if (id) {
        this.isNovo = false;
        this.clienteService.getCliente(id).subscribe(
          cliente => {
            this.cliente = cliente;
            this.cliente.cep = this.mascaras.format(this.cliente.cep, "#####-###");
            this.cliente.cpf = this.mascaras.format(this.cliente.cpf, "###.###.###-##");
            this.cliente.telCel = this.mascaras.format(this.cliente.telCel, "(##)####-####");
            this.cliente.telRes = this.mascaras.format(this.cliente.telRes, "(##)####-####");

            if (this.cliente.latLog != null) {
              var LatLog = this.cliente.latLog.split(";");
              this.compGoogleMaps.lat = Number(LatLog[0]);
              this.compGoogleMaps.long = Number(LatLog[1]);
            }
            else {
              this.compGoogleMaps.lat = 0;
              this.compGoogleMaps.long = 0;
            }
            this.compGoogleMaps.zoom = 16;
          }
        )
      }
      else {
        this.compGoogleMaps.lat = 0;
        this.compGoogleMaps.long = 0;
      };
    });
  }

  onSubmit(): void {
    //for (var key in this.cliente) {
    //  var str = this.cliente[key];
    //  console.log(str.toString().replace(/[^a-zA-Z0-9]/g,''));
    //}


    if (this.isNovo) {
      this.clienteService.create(this.cliente).subscribe(
        data => {
          this.dialog.openAlert("Cliente salvo sucesso !", (() => this.router.navigate(['cliente']))
          )
        }
      );
    } else {
      this.clienteService.update(this.cliente).subscribe(
        data => {
          this.dialog.openAlert("Cliente alterado com sucesso !", (() => this.router.navigate(['cliente']))
          )
        }
      );
    }
  }



  getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-group': true,
      'has-danger': !isValid && !isPristine,
      'has-success': isValid && !isPristine
    };
  }
  getFormControlClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-control': true,
      'has-danger': !isValid && !isPristine,
      'has-success': isValid && !isPristine
    };
  }

  autocompleteFocus() {
    this.autocomplete_init = true;
    this.compGoogleMaps.PreparaMapa(this.searchElementRef, this.cliente);
  }
}

