import { Cep } from "./cep.interface";
import { User } from "./user.interface";

export interface Class {
    nome: string
    alunos: User[],
    professor: User[]
}