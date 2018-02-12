import { Injectable } from '@angular/core';
@Injectable()
export class DialogConfirmService {
    confirm(message? : string) 
    {
        return new Promise(resolve => {
            return resolve(window.confirm(message || 'Confirma ?'));
        });
    }
}

//implementacao:

//this.dialogconfirmService.confirm('Deseja excluir o cliente ' + cliente.Nome + ' ?')
//.then((podeDeletar : boolean) => {
//    if(podeDeletar) {
//        this.clienteService
//        .delete(cliente);
//    }
//});