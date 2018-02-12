import { DialogConfirmService } from './dialogconfirm.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { routing } from './app.routing';
import { TesteComponent } from './teste/teste.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { CustomModal } from './custom-modal-dialog';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';



@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    CustomModal
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule, 
    ClientesModule, 
    routing, 
    FormsModule, 
    BrowserModule, 
    ModalModule.forRoot(),
    BootstrapModalModule,
    HttpModule,
    Ng2Bs3ModalModule //https://www.npmjs.com/package/ng2-bs3-modal
    
  ],
  providers: [
    DialogConfirmService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ CustomModal ]
})
export class AppModule { }
