import { Cep } from "./cep.interface";

export interface User {
    id: number,
    email: string,
    senha: string,
    tipoPerfil: string,
    nome: string,
    telefone: string,
    idade: number,
    cpf: string,
    rg: string,
    naturalidade: string,
    cep: Cep
}