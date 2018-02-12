import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { CLIENTES } from './cliente.mock';
import { Cliente } from './cliente.model';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/throw';
//import 'rxjs/Rx';  // use this line if you want to be lazy, otherwise:
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';


@Injectable()
export class ClienteService {

  private clientesUrl: string = 'http://localhost:63963/';
  retorno: Cliente;
  
  constructor(private http: Http, private router: Router) { }

  GetClientes() {
    return this.http.get(this.clientesUrl + "cliente/get")
      .map(res => res.json())
      //.catch(error => Observable.throw(this.router.navigate(['PaginaDeErro'])))
      ;
  }

  create(cliente: Cliente) {
    cliente = this.retiraMascaras(cliente);
    return this.http.post(this.clientesUrl + "cliente/add", cliente);
  }

  update(cliente: Cliente) {
    cliente = this.retiraMascaras(cliente);
    return this.http.put(this.clientesUrl + "cliente/update", cliente);
  }


  delete(cliente: Cliente) {
    console.log(this.clientesUrl + "cliente/delete/" + cliente.clienteId);
    return this.http.delete(this.clientesUrl + "cliente/delete/" + cliente.clienteId);
  }

  getCliente(id: number) {
    return this.http.get(this.clientesUrl + "cliente/getByid/" + id)
      .map((res: Response) => res.json());
  }

  retiraMascaras(cliente: Cliente)
  {
    cliente.cpf = cliente.cpf.replace("-","").replace(".","").replace(".","");
    cliente.telCel = cliente.telCel.replace("(","").replace(")","").replace("-","").replace(" ","");
    cliente.telRes = cliente.telRes.replace("(","").replace(")","").replace("-","").replace(" ","");
    cliente.cep = cliente.cep.replace("-","");
    return cliente;
  }
}
//https://stackoverflow.com/questions/44778789/angular-2-how-to-redirect-after-rest-http-post-put-as-per-the-returned-status-co