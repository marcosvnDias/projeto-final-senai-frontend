import { Cep } from "./cep.interface";
import { Nota } from "./nota.interface";

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
    genero: string
    cep: Cep,
    notas: Nota[]
}