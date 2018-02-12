import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'dialog-box',
    templateUrl: './dialogBox.html'
})
export class DialogBox {

    constructor() {
        this.modal
    }

    @ViewChild('modal')
    modal: ModalComponent;

    @ViewChild('modalFooter')
    modalFooter: ModalComponent;

    mensagem: string;
    showDefaultButtons : boolean = true;


    @Input() funcaoSim: Function;

    funcao: Function;
    funcaoClose: Function;

    open(mensagem: string, funcao: Function) {
        this.mensagem = mensagem;
        this.modal.open();
        this.funcao = funcao;
    }

    openAlert(mensagem: string, funcao: Function) {
        this.mensagem = mensagem;
        this.funcaoClose = funcao;
        this.modal.open();
        this.showDefaultButtons = false;
    }






}

//http://4dev.tech/2016/11/angular2-how-to-pass-callback-functions-to-a-component/