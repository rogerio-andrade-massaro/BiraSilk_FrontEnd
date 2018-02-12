import { DialogBox } from './../dialogBox';
import { AppModule } from './../app.module';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListaComponent } from './clientes-lista.component';
import { ClienteDetalheComponent } from './cliente-detalhe.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { GoogleMapsComponent } from '.././google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './cliente.service';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({ 
    imports : [ 
        CommonModule,
        ClienteRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule,
        Ng2Bs3ModalModule
        ,AgmCoreModule.forRoot({
            apiKey: "AIzaSyCoETsYOsu0QlCSbMcGNzwxN_n84KluBqo",
            libraries: ["places"]
          })
          
    ],
     declarations : [
         ClientesListaComponent,
         ClienteDetalheComponent,
         GoogleMapsComponent,
         DialogBox
         
     ],
     exports : [ ClientesListaComponent, GoogleMapsComponent],
     providers : [
        ClienteService
     ]
    
})
export class ClientesModule {}