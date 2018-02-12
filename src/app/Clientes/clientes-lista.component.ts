import { ActivatedRoute, Router } from '@angular/router';
import { Mascaras } from './../mascaras';
import { DialogConfirmService } from './../dialogconfirm.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogBox } from './../dialogBox';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';
import { CLIENTES } from './cliente.mock';

@Component({
    moduleId: module.id,
    selector: 'Clientes-Lista',
    templateUrl: 'clientes-lista.component.html'
})
export class ClientesListaComponent implements OnInit {
    public clientes: Cliente[] = [];
    public mascaras = new Mascaras();

    @ViewChild('dialog')
    dialog: DialogBox;

    onDelete(cliente: Cliente): void {
        //this.dialog.funcaoSim =  this.clienteService.delete(cliente);
        this.dialog.open("Deseja excluir o cliente ?",
            (() => {
                this.clienteService.delete(cliente).subscribe((res) => {
                    this.GetClientes();
                });
            }));

    }

    //https://stackoverflow.com/questions/41684114/angular-2-easy-way-to-make-a-confirmation-dialog

    constructor(
        private clienteService: ClienteService,
        private dialogconfirmService: DialogConfirmService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.GetClientes();
    }

    GetClientes() {
        this.clienteService.GetClientes().subscribe(data => {
            this.clientes = data;
        });
    }
}

//http://jasonwatmore.com/post/2016/08/23/angular-2-pagination-example-with-logic-like-google