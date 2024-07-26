import { Cep } from "./cep.interface";

export interface User {
    id: number,
    email: string,
    senha: string,
    tipoPerfil: string,
    nome: string,
    telefone: string,
    cpf: string,
    rg: string,
    naturalidade: string,
    cep: Cep,
    materias: string[],
    turmas: string[]
}