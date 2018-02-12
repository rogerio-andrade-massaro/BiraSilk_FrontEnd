import { Cliente } from './cliente.model'

export const CLIENTES: Cliente[] =
    [
        { clienteId: 1, cpf: '27855751807', nome: 'rogerio massaro', endereco: 'rua jose ferreira', numero: '49', complemento: 'casa', bairro: 'jd mont kemel', cidade: 'sao paulo', estado: 'SP', cep: '05633030', telRes: '1198771111', telCel: '67665511', dataCadastro: '05/12/2002', ativo: true, latLog: "12;12" },
        { clienteId: 2, cpf: '98989809809', nome: 'Flavia Meira', endereco: 'rua Osiris Magalhaes', numero: '49', complemento: 'casa', bairro: 'jd mont kemel', cidade: 'sao paulo', estado: 'SP', cep: '05633030', telRes: '98771111', telCel: '67665511', dataCadastro: '05/12/2002', ativo: true, latLog: "12;12" },
        { clienteId: 3, cpf: '56657676577', nome: 'Ubiraldo Lopes', endereco: 'rua Arnaldo Rocha', numero: '49', complemento: 'casa', bairro: 'jd mont kemel', cidade: 'sao paulo', estado: 'SP', cep: '05633030', telRes: '98771111', telCel: '67665511', dataCadastro: '05/12/2002', ativo: true, latLog: "12;12" }
    ];